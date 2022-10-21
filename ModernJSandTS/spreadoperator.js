"use strict";
const hobbies = ['Sports', 'Cookies'];
//console.log(hobbies[0]);
const activeHobbies = ['Hicking'];
//activeHobbies.push(hobbies[0],hobbies[1]);
activeHobbies.push(...hobbies);
const personsingh = {
    name: 'Siddharth',
    age: 21
};
const copyperson = Object.assign({}, personsingh);
