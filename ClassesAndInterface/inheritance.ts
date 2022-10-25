class DepartmentIT{
     static fiscalYear=2022;
    // private id:string;
    // private name:string;
    protected employees:string[]=[];
     constructor( public name:string, private readonly id:string){
         //this.name=na;
         //this.id=id;
         console.log(DepartmentIT.fiscalYear);
         
 
     }
      static createEmployee(name:string){
        return {name:name};

     }
     describe( this:DepartmentIT) {
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
 class ITDepartment extends DepartmentIT{
    admin:string[];
    constructor( id:string, admin:string[]){
        super(id,'it');
        this.admin=admin;


    }

 }
 class AccountingDepartment extends DepartmentIT{
    private lastReport:string;
    get mostrecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error("no report founds")

    }
    set mostrecentReport(value:string){
        if(!value){
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value)

    }


    constructor( id:string , private report:string[]){
        super(id,'IT');
        this.lastReport=report[0];

    
    }
    addEmp(name:string){
        if(name === 'Singh'){
          return;  
        }
        this.employees.push(name)

    }
    addReport(text:string){
        this.report.push(text);
        this.lastReport =text;
    }
    getReport(){
        console.log(this.report);
        
    }

 }

 const employee1= DepartmentIT.createEmployee('Singh');
 console.log(employee1, DepartmentIT.fiscalYear);
 
 const account=new ITDepartment('D1',['Max'])
 
   //

   const accountingit=new DepartmentIT('D1','Singh');

   account.addEmployee('SIDDHARTH');
 account.addEmployee('Singh');
 //accounting1.employees[2]='Mohan';
   account.describe();
   console.log(account);
   const accounti=new AccountingDepartment('d2',[]);
   accounti.mostrecentReport='Year end report';
  
   
   accounti.addReport('Something went wrong...');
   console.log(accounti.mostrecentReport);
   accounti.addEmp('Singham');
   accounti.addEmp('Singh');
   accounti.printEmployeeInformation();
   accounti.getReport();
   
   //accounting1.printEmployeeInformation();