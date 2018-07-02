export class MemeObj {

    id: number = undefined;
    protected _empty = false;

    public isEmpty(): boolean {
        return this._empty;
    }

}
