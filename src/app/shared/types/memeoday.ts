import { DataObj } from './data-obj';
import { UserAccount } from './user-account';
import { Meme } from './meme';

export class Memeoday extends DataObj {
    meme: Meme;
    date_featured: string;

    public static createEmpty(): Memeoday {
        let result = Memeoday.new();
        result._empty = true;
        return result;
    }

    public static new(): Memeoday {
        const outItem = new this();
        return outItem;
    }
}
