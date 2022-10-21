"use strict";
function add12(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result:' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add12(10, 20));
//let combinedvalue:Function;
let combinedvalue;
combinedvalue = add12;
//combinedvalue=printResult;
//combinedvalue=5;
console.log(combinedvalue(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
