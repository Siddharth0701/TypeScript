class DepartmentS{
    // private id:string;
    // private name:string;
    private employees:string[]=[];
     constructor( public name:string, private readonly id:string){
         //this.name=na;
         //this.id=id;
 
     }
     describe( this:DepartmentS) {
         console.log(`Department(${this.name}):${this.id}`);
         
 
     }
     addEmployee( employee:string){
       // this.id='d1';
        this.employees.push(employee); 
     }
     printEmployeeInformation(){
         console.log(this.employees.length);
         console.log(this.employees);
         
     }
 }
   const accountings=new DepartmentS("Accounting","D1");
  // accounting1.addEmployee('SIDDHARTH');
 //accounting1.addEmployee('Singh');
 //accounting1.employees[2]='Mohan';
   accountings.describe();
   //accounting1.printEmployeeInformation();