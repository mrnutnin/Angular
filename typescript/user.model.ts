export class UserInfo {
    get name() {
        return this._name;
    }
    set name(value: string) {
        this._name = value ?
        value : 'Someone';
    }
    //? is short if else
    /*
        if(value){
            this._name = value;
        }else {
            this._name = 'Someone';
        }
    */
    constructor (public _name: string){
    }
    talk() {
        console.log(`I am ${this.name}`)
    }
}
