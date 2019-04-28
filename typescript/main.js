let something;
let anything = 0;
let age = 0;
let itname;
let isLoading;
let friends;
;
const myColor = 0 /* Red */;
//let is var
//use const always
//when want to assign new value use let
let myValue;
myValue = 'This is my String';
myValue.length;
myValue;
const myName = 'John Snow';
//console.log('My name is' + myName);
console.log(`
My name is ${myName} Nice to meet you.
`);
const sum = (num1 = 0, num2) => {
    return num1 + num2;
};
const sum2 = (num1, num2) => {
    return num1 + num2;
};
const shoppingCart = [100, 25, 50, 35];
const result = shoppingCart.map((item) => item * 1.07);
//console.log(result);
//name, age, isAdmin
/*
interface UserInfo {
    name: string;
    age: number;
    isAdmin: boolean;
}

const myUser: UserInfo = {
    name: 'John',
    age: 20,
    isAdmin: false,
};
*/
/*
class UserInfo {
    name: string;
    age: number;
    isAdmin: boolean;
    talk() {
        console.log(`I am ${this.name}`)
    }
}
const myUser = new UserInfo();
*/
/*
class UserInfo {
    public name: string;
    constructor (){
        console.log('I am created');
    }
    talk() {
        console.log(`I am ${this.name}`)
    }
}
const myUser = new UserInfo();
*/
class UserInfo {
    //? is short if else
    /*
        if(value){
            this._name = value;
        }else {
            this._name = 'Someone';
        }
    */
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value ?
            value : 'Someone';
    }
    talk() {
        console.log(`I am ${this.name}`);
    }
}
const myUser = new UserInfo('John');
