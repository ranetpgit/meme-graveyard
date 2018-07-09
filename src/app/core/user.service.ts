import { Injectable, Predicate } from '@angular/core';
import { of, Observable } from 'rxjs';
import { UserAccount } from '../shared/types/user-account';
import { DummyConstants } from './dummy-constants';

@Injectable()
export class UserService {

    private dummyData = DummyConstants.DUMMY_USERACCOUNTS.slice();
    private idSequence = DummyConstants.DUMMY_USERACCOUNTS.length;
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

    get(id: number): Observable<UserAccount> {
        return of(this.dummyData.find(member => member.id === id));
    }
    
    create(item: UserAccount): Observable<number> {
        this.idSequence = this.idSequence + 1;
        item.id = this.idSequence;
        this.dummyData.push(item);
        return of(this.idSequence);
    }

    update(item: UserAccount): Observable<UserAccount> {
        let index = this.dummyData.findIndex(member => member.id === item.id);
        this.dummyData.splice(index, 1, item);
        return of(item);
    }

    logout(): void {
        this.dummyLoggedInUser = undefined;
    }

    getUser(): Observable<UserAccount> {
        return of(this.dummyLoggedInUser);
    }

    filterDatabase(filterFunc: any){
        console.log(this.dummyData.filter(filterFunc))
        return this.dummyData.filter(filterFunc)
    }

}
