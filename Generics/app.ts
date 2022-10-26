// const names:Array<string >=['Max','Singh']
// console.log(

// names[0].split(''));

// const promise:Promise<any>=new Promise( (resolve,reject) =>{
//     setTimeout( () =>{

//         resolve('This is done');
//     },2000)

// } );

// promise.then(data =>{
//     //data.split('');
// })


//Own generics

function merge<T extends object,U extends object>(objA:T,objB:U) 
{    
    return  Object.assign(objA, objB); 
}
//console.log(merge({name:'Max'},{age:21}));
const mergeObj=merge<{name:string,hobbies:string[]},{age:number}>({name:'Siddharth', hobbies:['Sports']}, {age:21}) //as {name:string,age:number}
const mergeObj2=merge({name:'Siddharth'}, {age:21}) //as {name:string,age:number}
console.log(mergeObj);

//mergeObj.age;

//Another generic function
interface Lengthy{
    length:number 

}
function countAndDescribe<T extends Lengthy>(element:T):[T,string] {
    let descriptionText='Got no value';
    if(element.length === 1){
        descriptionText='Got 1 elements.';
    }
    else if(element.length>1){
        descriptionText ='Got'+element.length+ 'element';
    }
    return [element, descriptionText]
    
}

console.log( countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports','Cooking']));
console.log(countAndDescribe([]));




