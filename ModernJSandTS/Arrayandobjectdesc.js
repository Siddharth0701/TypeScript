"use strict";
// const hobbies1=hobbies[0];
// console.log(hobbies1);
const [hobbies1, hobbies2, ...remaininghobbies] = hobbies;
console.log(hobbies1, hobbies2, remaininghobbies);
const persion1 = {
    firstName: 'Singh',
    age: 21
};
const { firstName: Uname, age } = persion1;
console.log(Uname, age);
