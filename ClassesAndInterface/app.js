"use strict";
class Person {
    constructor(n) {
        this.age = 21;
        this.name = n;
    }
    greet(phrase) {
    }
}
let user1;
user1 = new Person('Siddharth');
//{
//     name:'Siddharth',
//     //age:21,
//     greet(phrase:string){
//         console.log(phrase+''+this.name);
//     }
// };
user1.greet('Hi there - I am ');
console.log(user1);
