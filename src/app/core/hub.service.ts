import { Injectable } from '@angular/core';
import { Hub } from '../shared/types/hub';
import { DummyConstants } from '../core/dummy-constants';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HubService {
  private dummyHubs = DummyConstants.DUMMY_HUBS.slice();

  constructor() { }

  /** GET hubs from the server */
  getHubs(): Observable<Hub[]> {
    return of(this.dummyHubs);
  }

  getHub(id: number): Observable<Hub> {
    return of(this.dummyHubs.find(hub => hub.id === id));
  }
}
