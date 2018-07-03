import { Injectable } from '@angular/core';
import { Meme } from './meme';
import { MessageService } from './message.service';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// import { MEMES } from './mock-memes';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  private memesUrl = 'api/memes';  // URL to web api

  private log(message: string) {
    this.messageService.add('MemeService: ' + message);
  }

  /** GET memes from the server */
  getMemes(): Observable<Meme[]> {
    this.messageService.add('MemeService: fetched memes');
    return this.http.get<Meme[]>(this.memesUrl).pipe(
      tap(memes => this.log(`fetched memes`)),
      catchError(this.handleError('getMemes', [])));
  }

  getMeme(id: number): Observable<Meme> {
    const url = `${this.memesUrl}/${id}`;
    return this.http.get<Meme>(url).pipe(
      tap(_ => this.log(`fetched meme id=${id}`)),
      catchError(this.handleError<Meme>(`getMeme id=${id}`))
    );
  }

  /** POST: add a new meme to the server */
  addMeme(meme: Meme): Observable<Meme> {
    return this.http.post<Meme>(this.memesUrl, meme, httpOptions).pipe(
      tap((meme: Meme) => this.log(`added hememero w/ id=${meme.id}`)),
      catchError(this.handleError<Meme>('addMeme'))
    );
  }

  /** PUT: update the meme on the server */
  updateMeme(meme: Meme): Observable<any> {
    return this.http.put(this.memesUrl, meme, httpOptions).pipe(
      tap(_ => this.log(`updated meme id=${meme.id}`)),
      catchError(this.handleError<any>('updateMeme'))
    );
  }

  deleteMeme(meme: Meme | number): Observable<Meme> {
    const id = typeof meme === 'number' ? meme : meme.id;
    const url = `${this.memesUrl}/${id}`;

    return this.http.delete<Meme>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted meme id=${id}`)),
      catchError(this.handleError<Meme>('deleteMeme'))
    );
  }

  /* GET memes whose name contains search term */
  searchMemes(term: string): Observable<Meme[]> {
    if (!term.trim()) {
      // if not search term, return empty meme array.
      return of([]);
    }
    return this.http.get<Meme[]>(`${this.memesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found memes matching "${term}"`)),
      catchError(this.handleError<Meme[]>('searchMemes', []))
    );
  }


  constructor(private http: HttpClient, private messageService: MessageService) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
