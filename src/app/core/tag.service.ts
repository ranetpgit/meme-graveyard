import { Injectable } from '@angular/core';
import { Tag } from '../shared/types/tag';
import { DummyConstants } from '../core/dummy-constants';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private dummyTags = DummyConstants.DUMMY_TAGS.slice();

  constructor() { }

  /** GET tags from the server */
  getTags(): Observable<Tag[]> {
    return of(this.dummyTags);
  }

  getTag(id: number): Observable<Tag> {
    return of(this.dummyTags.find(tag => tag.id === id));
  }
}
