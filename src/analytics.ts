console.log('Sending data....');// tsc --init, tsc -w

let age;
age=21;
console.log(age);

const button= document.querySelector('button') !;
button?.addEventListener( 'click',()=>{
    console.log('Clicked!');
    
});
let logged;

function sendAnalysic(data:string) {
    console.log(data);
    logged=true
    

    
}
sendAnalysic('the data');

