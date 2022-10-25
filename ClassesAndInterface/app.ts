//type AddFn=( a:number,b:number)=> number;
interface AddFn{
    (a:number,b:number): number

}

let addi:AddFn;

addi=(n1:number,n2:number)=>{
return n1+n2;
};




interface Named{
    readonly name: string
}

interface Greetable extends Named{
    //readonly name:string;
    // age:number;
    greet(phrase:string):void;
}
class Person implements Greetable,Named{
    name: string;
    age=21;

    constructor( n:string) {
        this.name=n;
        
    }
    greet(phrase: string) {
        
    }


}
let user1:Greetable;
user1= new Person('Siddharth');
//user1.name='Manu';
//{
//     name:'Siddharth',
//     //age:21,
//     greet(phrase:string){
//         console.log(phrase+''+this.name);
        
//     }
// };
user1.greet('Hi there - I am ');
console.log(user1);
