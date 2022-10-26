// function Logger( constructor:Function) {
//      console.log('Logging..');
//      console.log(constructor);
     
// }
function Logger(LogString:string ) {
    console.log('logger factory');
    
    return function(constructor:Function){
        console.log(LogString);
        console.log(constructor);
        
    }   
}

function WithTemplate(template:string,hookid:string) {
    console.log('Rendering template');
    
    return function(constructor: any){
        const hookEl=document.getElementById(hookid);
        const p=new constructor();
        if(hookEl){
            hookEl.innerHTML=template;
            hookEl.querySelector('h1')! .textContent=p.name ;

        }

    }
    
}
//@Logger('LOGGING -PERSONSINGH')
@Logger('LOGGING')
@WithTemplate('<h1> My PersonSingh Object </h1>','app')
class PersonSingh{
    name='Singh';

    constructor() {
        console.log("Creating personsingh object...");
        
       // super();
        
    }
}
const pers =new PersonSingh();
console.log(pers);


//..............................................................................................................
function Log(target:any,propertyName:string | Symbol){
    console.log('Property decorator !');
    console.log(target, propertyName);
    
}

function Log2(target:any, name:string, description:PropertyDescriptor){
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(description);
   // console.log(target);

}
function Log3(target:any,name:string | Symbol, description:PropertyDescriptor) {

console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(description);
    
}

function Log4(target:any,name:string | Symbol, position:PropertyDescriptor){
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product{
    @Log   //property decorator
    title:string;
   private _price:number;
    
   @Log2
    set price(val:number){
        if(val>0){
            this._price=val;
        }
        else{
            throw new Error('Invalid price -should be positive!');
        }
    }


    constructor( t:string,p:number) {
        this.title=t;
        this._price=p;
           
    }
    @Log3 
    getPriceWithtax( @Log4 tax:number){
        return this._price * (1+tax);
    }
}
