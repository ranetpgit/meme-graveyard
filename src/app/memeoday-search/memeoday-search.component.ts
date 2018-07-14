import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Meme } from '../shared/types/meme';
import { Memeoday } from '../shared/types/memeoday';

@Component({
  selector: 'app-memeoday-search',
  templateUrl: './memeoday-search.component.html',
  styleUrls: [ './memeoday-search.component.css' ]
})
export class MemeodaySearchComponent implements OnInit {
  @Input() memesoday: Memeoday[];
  filteredMemesoday = this.memesoday;
  private searchTerms = new Subject<string>();

  @Output() searchEvent = new EventEmitter<Memeoday[]>();
  constructor() {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
    this.sendSearch();
  }

  sendSearch() {
    this.searchEvent.emit(this.filteredMemesoday);
    // debugger;
  }

  searchMemesoday(term: string): Observable<Memeoday[]> {

    if (!term.trim()) {
      // if not search term, return empty memeoday array.
      return of(this.memesoday);
    }
    return of(this.memesoday.filter(memeoday => memeoday.meme.name.toLowerCase().includes(term.toLowerCase())));
  }

  ngOnInit(): void {
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      // BUG debounceTime makes the search one keystroke behind
      // debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.searchMemesoday(term)),
    ).subscribe(memesoday => this.filteredMemesoday = memesoday);
  }
}
