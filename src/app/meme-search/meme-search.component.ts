import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Meme } from '../shared/types/meme';

@Component({
  selector: 'app-meme-search',
  templateUrl: './meme-search.component.html',
  styleUrls: [ './meme-search.component.css' ]
})
export class MemeSearchComponent implements OnInit {
  @Input() memes: Meme[];
  filteredMemes = this.memes;
  private searchTerms = new Subject<string>();

  @Output() searchEvent = new EventEmitter<Meme[]>();
  constructor() {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
    this.sendSearch();
  }

  sendSearch() {
    this.searchEvent.emit(this.filteredMemes);
    // debugger;
  }

  searchMemes(term: string): Observable<Meme[]> {

    if (!term.trim()) {
      // if not search term, return empty meme array.
      return of(this.memes);
    }
    return of(this.memes.filter(meme => meme.name.toLowerCase().includes(term.toLowerCase())));
  }

  ngOnInit(): void {
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      // BUG debounceTime makes the search one keystroke behind
      // debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.searchMemes(term)),
    ).subscribe(memes => this.filteredMemes = memes);
  }
}
