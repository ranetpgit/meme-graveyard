import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hub } from '../shared/types/hub';

@Component({
  selector: 'app-hub-search',
  templateUrl: './hub-search.component.html',
  styleUrls: [ './hub-search.component.css' ]
})
export class HubSearchComponent implements OnInit {
  @Input() hubs: Hub[];
  filteredHubs = this.hubs;
  private searchTerms = new Subject<string>();

  @Output() searchEvent = new EventEmitter<Hub[]>();
  constructor() {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
    this.sendSearch();
  }

  sendSearch() {
    this.searchEvent.emit(this.filteredHubs);
    // debugger;
  }

  searchHubs(term: string): Observable<Hub[]> {

    if (!term.trim()) {
      // if not search term, return empty hub array.
      return of(this.hubs);
    }
    return of(this.hubs.filter(hub => hub.name.toLowerCase().includes(term.toLowerCase())));
  }

  ngOnInit(): void {
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      // BUG debounceTime makes the search one keystroke behind
      // debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.searchHubs(term)),
    ).subscribe(hubs => this.filteredHubs = hubs);
  }
}
