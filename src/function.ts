function add12(n1:number, n2:number) {
    return n1+n2;
    
}
function printResult(num:number):void {
    console.log('Result:'+num);
    
    
    
}
function addAndHandle(n1:number,n2:number,cb:(num:number)=>void) {
    const result=n1+n2;
    cb(result);
    
}
printResult(add12(10,20));
//let combinedvalue:Function;
let combinedvalue:(a:number,b:number)=> number;
combinedvalue    =add12;
//combinedvalue=printResult;
//combinedvalue=5;

console.log(combinedvalue(8,8));
addAndHandle(10,20,(result)=>{
    console.log(result);
    
});
