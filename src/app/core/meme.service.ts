import { Injectable } from '@angular/core';
import { Meme } from '../shared/types/meme';
import { DummyConstants } from '../core/dummy-constants';
import { MessageService } from '../message.service';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  private dummyMemes = DummyConstants.DUMMY_MEMES.slice();
  private dummyMemesOfTheDay = DummyConstants.DUMMY_MEMESOFTHEDAY.slice();

  constructor(private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add('MemeService: ' + message);
  }

  /** GET memes from the server */
  getMemes(): Observable<Meme[]> {
    this.messageService.add('MemeService: fetched memes');
    return of(this.dummyMemes);
  }

  getMeme(id: number): Observable<Meme> {
    this.log(`fetched meme id=${id}`);
    return of(this.dummyMemes.find(meme => meme.id === id));
  }

  getMemesOfTheDay(): Observable<Meme[]> {
    this.messageService.add('MemeService: fetched memes of the day');
    return of(this.dummyMemesOfTheDay);
  }

  getMemeOfTheDay(): Observable<Meme> {
    this.messageService.add('MemeService: fetched the meme of the day');
    return of(this.dummyMemesOfTheDay[0]); // temp, just get the latest value
  }
}
