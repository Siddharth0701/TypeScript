function add(n1:number, n2:number) {
    return n1+n2;
    
}
function printResult(num:number):void {
    console.log('Result:'+num);
    
    
}
printResult(add(10,20));
//let combinedvalue:Function;
let combinedvalue:(a:number,b:number)=> number;
combinedvalue    =add;
//combinedvalue=printResult;
//combinedvalue=5;

console.log(combinedvalue(8,8));
