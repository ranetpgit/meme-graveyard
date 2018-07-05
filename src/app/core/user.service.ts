import {Injectable} from '@angular/core';
import {of, Observable} from 'rxjs';
import { UserAccount } from '../shared/types/user-account';
import { DummyConstants } from './dummy-constants';

@Injectable()
export class UserService {

    private dummyData = DummyConstants.DUMMY_USERACCOUNTS.slice();

    private dummyLoggedInUser: UserAccount = undefined;

    constructor() {

    }

    authenticate(username: string, password: string): Observable<UserAccount> {
        const user = this.dummyData.filter(element => element.email === username)[0];
        if (user !== undefined && user.password === password) {
            this.dummyLoggedInUser = user;
            return of(user);
        } else {
            console.log('error false information');
            return of(UserAccount.createEmpty());
        }
    }

    logout(): void {
        this.dummyLoggedInUser = undefined;
    }

    getUser(): Observable<UserAccount> {
        return of(this.dummyLoggedInUser);
        // return Observable.of(this.dummyData.find(member => member. id ===id));
        // return this.userStore.currentUser()
    }

}
