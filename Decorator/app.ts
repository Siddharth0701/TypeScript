// function Logger( constructor:Function) {
//      console.log('Logging..');
//      console.log(constructor);
     
// }
function Logger(LogString:string ) {
    return function(constructor:Function){
        console.log(LogString);
        console.log(constructor);
        
    }   
}

function WithTemplate(template:string,hookid:string) {
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

