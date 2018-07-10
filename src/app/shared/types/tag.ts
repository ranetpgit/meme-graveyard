import { DataObj } from './data-obj';
import { UserAccount } from './user-account';

export class Tag extends DataObj {
    name: string;
    creator: UserAccount;
    date_created: string;
    num_posts: number;

    public static createEmpty(): Tag {
        let result = Tag.new();
        result._empty = true;
        return result;
    }

    public static new(): Tag {
        const outItem = new this();
        return outItem;
    }
}
