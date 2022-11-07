"use strict";
//autobind decorator
// function autobind( 
//     _:any, 
//     _2:string,
//     descriptor:PropertyDescriptor
//     ){
function validate(validatableInput) {
    var _a;
    let isValid = true;
    if (validatableInput.required) {
        // if(typeof validatableInput.value ==='string'){
        //     isValid=isValid && validatableInput.value.trim().length
        // }
        isValid = isValid && ((_a = validatableInput.value) === null || _a === void 0 ? void 0 : _a.toString().trim().length) == 0;
    }
    if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length > validatableInput.minLength;
    }
    return isValid;
}
class Projectinput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importNode = document.importNode(this.templateElement.content, true);
        this.element = importNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInputElement = this.element.querySelector('#title');
        this.descriptionInputElement = this.element.querySelector('#description');
        this.peopleInputElement = this.element.querySelector('#people');
        this.configure();
        this.attach();
    }
    gatherUserInput() {
        const enteredTitle = this.titleInputElement.value;
        const enterDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        if (
        //     enteredTitle.trim().length ===0 || 
        // enterDescription.trim().length ===0 || 
        // enteredPeople.trim().length ===0)
        validate({ value: enteredTitle, required: true, minLength: 5 }) &&
            validate({ value: enterDescription, required: true, minLength: 5 }) &&
            validate({ value: enteredPeople, required: true, minLength: 5 })) {
            alert('aleart input, please try again!');
            return;
        }
        else {
            return [enteredTitle, enterDescription, +enteredPeople];
        }
    }
    clearInput() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }
    //  @autobind
    submitHandler(event) {
        event.preventDefault();
        // console.log(this.titleInputElement.value);
        const userInput = this.gatherUserInput();
        //   if( typeof userInput ==='string'){
        //   }
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            console.log(title, desc, people);
            this.clearInput();
        }
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const priInput = new Projectinput();
