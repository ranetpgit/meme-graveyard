import * as _ from 'lodash';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DummyConstants } from './dummy.constants';
import { Meme } from '../shared/types/meme';


@Injectable()
export class MemeService {

    /* Our dummy data array. Setting some initial data just to make things more interesting */
    private dummyData = DummyConstants.MEMES.slice();
    private idSequence = DummyConstants.MEMES.length;

    constructor() {
    }

    getAll(): Observable<Meme[]> {
        console.log('MemeService.getObjects - Returning dummy object array');

        return of(this.dummyData);
    }

    get(id: number): Observable<Meme> {
        return of(this.dummyData.find(meme => meme.id === id));
    }

    create(item: Meme): Observable<number> {
        this.idSequence = this.idSequence + 1;
        item.id = this.idSequence;
        this.dummyData.push(item);
        return of(this.idSequence);
    }

    update(item: Meme): Observable<Meme> {
        let index = _.findIndex(this.dummyData, meme => meme.id === item.id);
        this.dummyData.splice(index, 1, item);
        return of(item);
    }

    delete(id: number): Observable<number> {
        _.remove(this.dummyData, meme => meme.id === id);
        return of(id);
    }

    /* filterByInclude(term): Observable<Meme[]> {
         let returnValue;
         if (!term.length) {
             returnValue = of(this.dummyData);
         } else {
             returnValue = of(this.dummyData.filter(item => item.name.toLowerCase().includes(term.toLowerCase())));
         }
         console.log('FilterTerm:', term);
         console.log('Value Returned = ', returnValue);
         return returnValue;
     }*/

}
