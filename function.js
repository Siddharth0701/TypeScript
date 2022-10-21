function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result:' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(10, 20));
//let combinedvalue:Function;
var combinedvalue;
combinedvalue = add;
//combinedvalue=printResult;
//combinedvalue=5;
console.log(combinedvalue(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
