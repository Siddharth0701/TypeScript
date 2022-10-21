"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    //const result=input1 + input2;
    return result;
    //  if(resultConversion=== 'as-nnumber'){
    //     return +(result);
    //  }
    //  else{
    //     return result.toString();
    //  }
}
const combinedAges = combine(30, 20, 'as-number');
console.log(combinedAges);
const combinedStringAges = combine('30', '25', 'as-number');
console.log(combinedStringAges);
const combinedName = combine('Max', 'Anna', 'astext');
console.log(combinedName);
