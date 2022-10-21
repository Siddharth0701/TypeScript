function generateError(message:string, code:number):never {
    throw{message:message,errorCode:code};
    
}
const errorreport=generateError('An error occurred!',500);
console.log(errorreport);
