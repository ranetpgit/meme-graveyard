import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Tag } from '../shared/types/tag';

@Component({
  selector: 'app-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrls: [ './tag-search.component.css' ]
})
export class TagSearchComponent implements OnInit {
  @Input() tags: Tag[];
  filteredTags = this.tags;
  private searchTerms = new Subject<string>();

  @Output() searchEvent = new EventEmitter<Tag[]>();
  constructor() {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
    this.sendSearch();
  }

  sendSearch() {
    this.searchEvent.emit(this.filteredTags);
    // debugger;
  }

  searchTags(term: string): Observable<Tag[]> {

    if (!term.trim()) {
      // if not search term, return empty tag array.
      return of(this.tags);
    }
    return of(this.tags.filter(tag => tag.name.toLowerCase().includes(term.toLowerCase())));
  }

  ngOnInit(): void {
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      // BUG debounceTime makes the search one keystroke behind
      // debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.searchTags(term)),
    ).subscribe(tags => this.filteredTags = tags);
  }
}
