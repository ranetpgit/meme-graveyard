import { MemeObj } from "./meme-obj";

export class Meme extends MemeObj{
    name: string;
    date: Date;
    categories: any[];
    upvotes:number;
    downvotes:number;

    constructor() {
        super();
    }

    public static createEmpty(): Meme {
        let result = Meme.new();    
        result._empty = true;
        return result;
    }

    public static new(): Meme {
        let outItem = new this();
        return outItem;
    }
}
