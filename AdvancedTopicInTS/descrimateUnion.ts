interface Bird{
    type:'bird';
    flyingSpeed:number;

}
interface Horse{
    type:'horse'
    runningSpeed:number;
}
type Animal=Bird |Horse;
function moveAnimal(animal:Animal) {
    // if('flyingSpeed' in animal)
    // console.log("Moving with Speed:"+ animal.flyingSpeed);
    let speed;
    switch (animal.type) {
        case 'bird':
            speed=animal.flyingSpeed;
            break;
        case 'horse':
            speed=animal.runningSpeed;
            

    
        default:
            break;
    }
    console.log('Moving at speed:'+speed);
    
    
    
}

moveAnimal({type:'bird',flyingSpeed:1000});
// const paragraph=document.querySelector('p');
// const userInputElement=<HTMLInputElement> document.getElementById('user-input')!;
// const userInputElement=document.getElementById('user-input')! as HTMLInputElement;
const userInputElement=document.getElementById('user-input');
if (userInputElement){
    (userInputElement as HTMLInputElement).value= 'Hi there!';
}

//Index property
interface ErrorContainer{   //{email:'Not a valid email', username:'Must start with a character!'}
   // id:string;
    [prop:string]:string;

}
const errorBug:ErrorContainer={
email:'Not a valid email',
username:'Must start with a capital character!'
};
