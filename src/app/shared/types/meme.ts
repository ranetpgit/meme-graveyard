import { DataObj } from './data-obj';

export class Meme extends DataObj {
    name: string;
    born: string;
    died: string;
    description: string;
    tags: string[];
    image: string;
    creator_id: number;

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
