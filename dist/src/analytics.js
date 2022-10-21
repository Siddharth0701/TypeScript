"use strict";
console.log('Sending data....'); // tsc --init, tsc -w
let age;
age = 21;
console.log(age);
const button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    console.log('Clicked!');
});
let logged;
function sendAnalysic(data) {
    console.log(data);
    logged = true;
}
sendAnalysic('the data');
