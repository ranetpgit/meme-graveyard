import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Meme } from '../shared/types/meme';
import { MemeService } from '../core/meme.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-meme-search',
  templateUrl: './meme-search.component.html',
  styleUrls: [ './meme-search.component.css' ]
})
export class MemeSearchComponent implements OnInit {
  @Input() memes$: Observable<Meme[]>;
  private searchTerms = new Subject<string>();

  constructor(private memeService: MemeService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
    console.log(this.memes$);
  }

  ngOnInit(): void {
    console.log(this.memes$)
    this.memes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.memeService.searchMemes(term)),
    );
    console.log(this.memes$)
  }
}
