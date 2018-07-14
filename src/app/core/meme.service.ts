import { Injectable } from '@angular/core';
import { Meme } from '../shared/types/meme';
import { Memeoday } from '../shared/types/memeoday';
import { DummyConstants } from '../core/dummy-constants';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  private dummyMemes = DummyConstants.DUMMY_MEMES.slice();
  private dummyMemesoday = DummyConstants.DUMMY_MEMESODAY.slice();

  constructor() { }

  /** GET memes from the server */
  getMemes(): Observable<Meme[]> {
    return of(this.dummyMemes);
  }

  getMeme(id: number): Observable<Meme> {
    return of(this.dummyMemes.find(meme => meme.id === id));
  }

  getMemesoday(): Observable<Memeoday[]> {
    return of(this.dummyMemesoday);
  }

  getMemeoday(): Observable<Memeoday> {
    return of(this.dummyMemesoday[0]); // temp, just get the latest value
  }
}
