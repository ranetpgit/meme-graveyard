import { Injectable } from '@angular/core';
import { Meme } from '../shared/types/meme';
import { DummyConstants } from '../core/dummy-constants';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  private dummyMemes = DummyConstants.DUMMY_MEMES.slice();
  private dummyMemesOfTheDay = DummyConstants.DUMMY_MEMESOFTHEDAY.slice();

  constructor() { }

  /** GET memes from the server */
  getMemes(): Observable<Meme[]> {
    return of(this.dummyMemes);
  }

  getMeme(id: number): Observable<Meme> {
    return of(this.dummyMemes.find(meme => meme.id === id));
  }

  getMemesOfTheDay(): Observable<Meme[]> {
    return of(this.dummyMemesOfTheDay);
  }

  getMemeOfTheDay(): Observable<Meme> {
    return of(this.dummyMemesOfTheDay[0]); // temp, just get the latest value
  }
}
