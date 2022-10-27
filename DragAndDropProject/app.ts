class Projectinput{
    templateElement:HTMLTemplateElement;
    hostElement:HTMLDivElement;
    element:HTMLFormElement;
    
    constructor() {
        this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!;
        this.hostElement=document.getElementById('app')! as HTMLDivElement;
        const importNode=document.importNode(this.templateElement.content,true);
        this.element=importNode.firstElementChild as HTMLFormElement;
        this.attach();
       
        
    }
    private attach(){
        this.hostElement.insertAdjacentElement('afterbegin',this.element);
    }

}

const priInput= new Projectinput();