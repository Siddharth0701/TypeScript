function combine(input1, input2, resultConversion) {
    var result;
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
var combinedAges = combine(30, 20, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '25', 'as-number');
console.log(combinedStringAges);
var combinedName = combine('Max', 'Anna', 'astext');
console.log(combinedName);
