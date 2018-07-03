import * as _ from 'lodash';

import { Injectable } from '@angular/core';
import { MemeService } from './meme.service';
import { Meme } from '../shared/types/meme';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, mergeMap } from 'rxjs/operators';

@Injectable()
export class MemeStore {

    private _meme: BehaviorSubject<Meme[]> = new BehaviorSubject([]);
    private _selectedMeme: BehaviorSubject<Meme> = new BehaviorSubject(Meme.createEmpty());

    constructor(private memeService: MemeService) {
        this.loadMeme();
    }

    private loadMeme() {
        this.memeService.getAll().pipe(first()).subscribe(
            res => {this._meme.next(res)
                console.log('Store Requesting MemeService Data');},
            err => {
                console.log('Error retrieving products', err);
                // let errObj: any = err.json();
                // if(errObj) this.notificationStore.addNotificationByFields('danger', errObj.error, errObj.message, 10000);
                // else this.notificationStore.addNotificationByFields('danger', 'Error!', err.message, 10000);
            }
        );
    }

    public getMemes(): Observable<Meme[]> {
        return this._meme.asObservable();
    }

    public getSelectedMeme(): Observable<Meme> {
        return this._selectedMeme.asObservable();
    }

    public selectMemeById(itemId: number) {
        if (!itemId) {
            this.selectMeme(Meme.createEmpty());
        }
        // debugger;
        if (itemId === 0) {
            this.selectMeme(Meme.new());
        } else {
            this.memeService.get(itemId).subscribe(item => this.selectMeme(item));
        }
    }

    public selectMeme(item: Meme) {

        this._selectedMeme.next(item);
    }

    public saveMeme(item: Meme, callback?: Function) {
        let op: Observable<Meme>;
        if (item.id) {
            op = this.memeService.update(item);
        } else {
            op = this.memeService.create(item).pipe(mergeMap(id => this.memeService.get(id)));

        }
        op.subscribe(savedItem => {
            // this.notificationStore.addNotificationByFields('success', 'Save', 'done', 5000);
            this.selectMeme(savedItem);
            this.loadMeme();
            if (callback) {
                callback();
            }
        },
            err => {
                console.log('Error saving product', err);
                // let errObj: any = err.json();
                // if (errObj) {
                //     this.notificationStore.addNotificationByFields('danger', errObj.error, errObj.message, 10000);
                // } else {
                //     this.notificationStore.addNotificationByFields('danger', 'Error!', err.message, 10000);
                // }
            });
    }

    public deleteMeme(itemId: number, callback?: Function) {
        if (_.isUndefined(itemId)) {
            return;
        }
        this.memeService.delete(itemId)
            .subscribe(deletedId => {
                // this.notificationStore.addNotificationByFields('success', 'Delete', 'done', 5000);
                let currentSelectedItem = this._selectedMeme.getValue();
                if (currentSelectedItem && currentSelectedItem.id === deletedId) {
                    this.selectMeme(Meme.createEmpty());
                }
                this.loadMeme();
                if (callback) {
                    callback();
                }
            });
    }

}
