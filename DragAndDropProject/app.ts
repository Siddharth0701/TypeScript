//autobind decorator
// function autobind( 
//     _:any, 
//     _2:string,
//     descriptor:PropertyDescriptor
//     ){

//     const originalMethod=descriptor.value;
//     const abjDescriptor:PropertyDecorator={
//         configurable:true ,
//         get(){
//             const boundFn: originalMethod.bind(this);
//             return boundFn;

//         }

//     };
//     return abjDescriptor;
// }

//Validation
interface Validatable{
    value?:string | number;
    required?:boolean;
    minLength?: number;
    maxLength?:number;
    min?:number;
    max?:number;
}
function validate(validatableInput:Validatable) {
    let isValid = true;
    if(validatableInput.required){
        // if(typeof validatableInput.value ==='string'){
        //     isValid=isValid && validatableInput.value.trim().length
        // }

        isValid=isValid && validatableInput.value?.toString().trim().length ! ==0   
    }
    if(validatableInput.minLength != null  && typeof validatableInput.value ==='string' ){
        isValid =isValid && validatableInput.value.length > validatableInput.minLength;

    }
    return isValid
    
}


class Projectinput{
    templateElement:HTMLTemplateElement;
    hostElement:HTMLDivElement;
    element:HTMLFormElement;
    titleInputElement:HTMLInputElement;
    descriptionInputElement:HTMLInputElement;
    peopleInputElement:HTMLInputElement;
    
    constructor() {
        this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!;
        this.hostElement=document.getElementById('app')! as HTMLDivElement;
        const importNode=document.importNode(this.templateElement.content,true);
        this.element=importNode.firstElementChild as HTMLFormElement;
        this.element.id='user-input';
        this.titleInputElement=this.element.querySelector('#title') as HTMLInputElement
        this.descriptionInputElement=this.element.querySelector('#description') as HTMLInputElement
        this.peopleInputElement=this.element.querySelector('#people') as HTMLInputElement
        this.configure();
        this.attach(); 
        
    }

    private gatherUserInput():[string,string,number] | void {
        const enteredTitle =this.titleInputElement.value;
        const enterDescription=this.descriptionInputElement.value;
        const enteredPeople=this.peopleInputElement.value;
        if(
        //     enteredTitle.trim().length ===0 || 
        // enterDescription.trim().length ===0 || 
        // enteredPeople.trim().length ===0)
        validate({value:enteredTitle,required:true,minLength:5}) &&
        validate({value:enterDescription,required:true,minLength:5}) &&
        validate({value:enteredPeople,required:true,minLength:5}) )
        {
                alert('aleart input, please try again!');
                return;
        }
        else{
            return [enteredTitle,enterDescription,+enteredPeople]
        }   
    }
private clearInput(){
    this.titleInputElement.value='';
    this.descriptionInputElement.value='';
    this.peopleInputElement.value='';

}

  //  @autobind
    private submitHandler( event:Event){
       event.preventDefault();
      // console.log(this.titleInputElement.value);
      const userInput=this.gatherUserInput();
    //   if( typeof userInput ==='string'){

    //   }
    if( Array.isArray(userInput)){
            const [title,desc,people] =userInput;
            console.log(title,desc,people);
            this.clearInput();
            
    }
        

    }
    private configure(){
        this.element.addEventListener('submit',this.submitHandler.bind(this))

    }

    private attach(){
        this.hostElement.insertAdjacentElement('afterbegin',this.element);
    }

}

const priInput= new Projectinput();