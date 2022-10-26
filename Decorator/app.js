"use strict";
// function Logger( constructor:Function) {
//      console.log('Logging..');
//      console.log(constructor);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// }
function Logger(LogString) {
    console.log('logger factory');
    return function (constructor) {
        console.log(LogString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookid) {
    console.log('Rendering template');
    return function (constructor) {
        const hookEl = document.getElementById(hookid);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
//@Logger('LOGGING -PERSONSINGH')
let PersonSingh = class PersonSingh {
    constructor() {
        this.name = 'Singh';
        console.log("Creating personsingh object...");
        // super();
    }
};
PersonSingh = __decorate([
    Logger('LOGGING'),
    WithTemplate('<h1> My PersonSingh Object </h1>', 'app')
], PersonSingh);
const pers = new PersonSingh();
console.log(pers);
