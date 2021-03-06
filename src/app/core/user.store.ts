import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { UserAccount } from '../shared/types/user-account';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class UserStore {

    private _selectedUser: BehaviorSubject<UserAccount> = new BehaviorSubject(UserAccount.createEmpty());

    constructor(private userService: UserService) {

    }

    currentUser(): Observable<UserAccount> {
        console.log(this._selectedUser);
        return this._selectedUser.asObservable();
    }

    authenticate(username: string, password: string) {
        return this.userService.authenticate(username, password).pipe(map(user => {
            if (user && !user.isEmpty()) {
                console.log('USer IS noT EmPTy')
                this._selectedUser.next(user);
            }
            return user;
        }))

    }

    public saveMember(item: UserAccount) {
        let op: Observable<UserAccount>;
        if (item.id) {
            op = this.userService.update(item);
        } else {
            op = this.userService.create(item)
                .pipe(mergeMap(id => this.userService.get(id)));
        }

    }

    logout() {
        this.userService.logout();
        this.userService.getUser().subscribe(reallyLoggedInUser => {
            if (!reallyLoggedInUser) {
                this._selectedUser.next(UserAccount.createEmpty());
            }
        });
    }

    filterDatabase(filterFunc: any) {
        return this.userService.filterDatabase(filterFunc)

    }
}
