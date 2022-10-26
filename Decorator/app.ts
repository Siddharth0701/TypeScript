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
@Logger('LOGGING -PERSONSINGH')
class PersonSingh{
    name='Singh';

    constructor() {
        console.log("Creating personsingh object...");
        
       // super();
        
    }
}
const pers =new PersonSingh();
console.log(pers);

