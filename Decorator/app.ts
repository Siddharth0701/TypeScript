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
class Product{
    @Log   //property decorator
    title:string;
   private _price:number;

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
    getPriceWithtax(tax:number){
        return this._price * (1+tax);
    }
}
