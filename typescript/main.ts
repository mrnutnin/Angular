

let something: any;
let anything: any = 0 ;
let age = 0;
let itname: string;
let isLoading: boolean;
let friends: string[];
const enum Color{
    Red, Green,Blue
};
const myColor = Color.Red;

//let is var
//use const always
//when want to assign new value use let

let myValue: string;
myValue = 'This is my String';
(<string>myValue).length;
(myValue as string)


const myName = 'John Snow';
//console.log('My name is' + myName);
console.log(`
My name is ${myName} Nice to meet you.
`);


const sum = (
    num1 = 0,num2?): number => {
    return num1+num2;
}

const sum2 = (num1,num2) => {
    return num1+num2;
}

const shoppingCart = [100, 25, 50,35];
const result = shoppingCart.map((item) => item*1.07);
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

import {UserInfo} from './user.model';
const myUser = new UserInfo('John'); 

