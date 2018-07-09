import { DataObj } from './data-obj';

export class Hub extends DataObj {
    name: string;
    description: string;
    tags: string[];
    num_followers: number;
    num_posts: number;
    // creator user id
    creator: number;
    // admin user ids
    admins: number[];
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
