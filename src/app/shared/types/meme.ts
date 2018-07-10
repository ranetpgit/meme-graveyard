import { DataObj } from './data-obj';
import { UserAccount } from './user-account';
import { Hub } from './hub';
import { Tag } from './tag';

export class Meme extends DataObj {
    name: string;
    born: string;
    died: string;
    description: string;
    tags: Tag[];
    image: string;
    creator: UserAccount;
    date_created: string;
    hub: Hub;

    public static createEmpty(): Meme {
        let result = Meme.new();
        result._empty = true;
        return result;
    }

    public static new(): Meme {
        const outItem = new this();
        return outItem;
    }
}
