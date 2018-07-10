import { DataObj } from './data-obj';
import { UserAccount } from './user-account';
import { Tag } from './tag';

export class Hub extends DataObj {
    name: string;
    description: string;
    tags: Tag[];
    num_followers: number;
    num_posts: number;
    creator: UserAccount;
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
