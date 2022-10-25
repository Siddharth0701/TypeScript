"use strict";
function moveAnimal(animal) {
    // if('flyingSpeed' in animal)
    // console.log("Moving with Speed:"+ animal.flyingSpeed);
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
        default:
            break;
    }
    console.log('Moving at speed:' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 1000 });
// const paragraph=document.querySelector('p');
// const userInputElement=<HTMLInputElement> document.getElementById('user-input')!;
// const userInputElement=document.getElementById('user-input')! as HTMLInputElement;
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi there!';
}
