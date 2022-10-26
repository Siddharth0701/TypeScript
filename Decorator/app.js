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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
//..............................................................................................................
function Log(target, propertyName) {
    console.log('Property decorator !');
    console.log(target, propertyName);
}
function Log2(target, name, description) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(description);
    // console.log(target);
}
function Log3(target, name, description) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(description);
}
function Log4(target, name, position) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price -should be positive!');
        }
    }
    getPriceWithtax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log //property decorator
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithtax", null);
