import { DataObj } from './data-obj';

export class UserAccount extends DataObj {

    accountId: number = undefined;
    userId: number = undefined;
    accountName: string = undefined;
    email: string = undefined;
    password: string = undefined;
    values: any[] = undefined;

    public static createEmpty(): UserAccount {
        const result = UserAccount.new();
        result._empty = true;
        return result;
    }

    public static new(): UserAccount {
        const outItem = new this();
        return outItem;
    }

}
