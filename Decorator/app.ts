function Logger( constructor:Function) {
     console.log('Logging..');
     console.log(constructor);
     
}
@Logger
class PersonSingh{
    name='Singh';

    constructor() {
        console.log("Creating personsingh object...");
        
       // super();
        
    }
}
const pers =new PersonSingh();
console.log(pers);

