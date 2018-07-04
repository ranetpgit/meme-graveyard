import { UserAccount } from "../shared/types/user-account";
import * as _ from 'lodash';

export class DummyConstants {
    static readonly DUMMY_USERACCOUNTS: UserAccount[] = [

        _.create((UserAccount.prototype), {
            id: 1,
            userId: 1,
            accountName: "AntiVaxMOvemeNT!!",
            email: 'dfuosir341@gmail.com',
            password: 'asd12'
        }),
        _.create((UserAccount.prototype), {
            id: 2,
            userId: 2,
            accountName: "AutismSpreader",
            email: 'catlove9732@hot.ee',
            password: 'asd122'
        }),
        _.create((UserAccount.prototype), {
            id: 7,
            userId: 3,
            accountName: "black_people",
            email: 'cars723804@mail.ee',
            password: 'kfc'
        })];


}