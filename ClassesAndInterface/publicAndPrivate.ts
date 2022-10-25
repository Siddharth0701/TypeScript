class Department1{
   private name:string;
   private employees:string[]=[];
    constructor(na:string){
        this.name=na;

    }
    describe() {
        console.log('Department:'+this.name);
        

    }
    addEmployee( employee:string){
       this.employees.push(employee); 
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
        
    }
}
  const accounting1=new Department1("Accounting");
  accounting1.addEmployee('SIDDHARTH');
accounting1.addEmployee('Singh');
//accounting1.employees[2]='Mohan';
  accounting.describe();
  accounting1.printEmployeeInformation();
 //const accountingCopy1={describe:accounting.describe};
  //console.log(accounting);
  