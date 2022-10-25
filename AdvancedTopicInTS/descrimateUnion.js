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
