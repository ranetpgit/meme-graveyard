import { DataObj } from './data-obj';
import { UserAccount } from './user-account';

export class Hub extends DataObj {
    name: string;
    description: string;
    tags: string[];
    num_followers: number;
    num_posts: number;
    // creator user id
    creator: UserAccount;
    // admin user ids
    admins: UserAccount[];
    date_created: string;

    public static createEmpty(): Hub {
        let result = Hub.new();
        result._empty = true;
        return result;
    }

    public static new(): Hub {
        const outItem = new this();
        return outItem;
    }
}
