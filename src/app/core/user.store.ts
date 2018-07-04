import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {UserAccount} from '../shared/types/user-account';
import { BehaviorSubject, Observable } from 'rxjs';

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
        this.userService.authenticate(username, password).subscribe(res => {
            if (res !== null) {
                this.userService.getUser().subscribe(reallyLoggedInUser => {
                    this._selectedUser.next(reallyLoggedInUser);
                });
            }
        });

    }

    logout() {
        this.userService.logout();
        this.userService.getUser().subscribe(reallyLoggedInUser => {
            if (!reallyLoggedInUser) {
                this._selectedUser.next(UserAccount.createEmpty());
            }
        });
    }
}
