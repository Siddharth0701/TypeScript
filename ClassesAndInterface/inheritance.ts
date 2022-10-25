abstract class DepartmentIT{
     static fiscalYear=2022;
    // private id:string;
    // private name:string;
    protected employees:string[]=[];
     constructor( public name:string, protected readonly id:string){
         //this.name=na;
         //this.id=id;
         console.log(DepartmentIT.fiscalYear);
         
 
     }
      static createEmployee(name:string){
        return {name:name};

     }
     abstract describe( this:DepartmentIT): void;
         
 
     
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
    describe() {
        console.log("IT Department --ID "+this.id);
        
        
    }

 }
 class AccountingDepartment extends DepartmentIT{
    private lastReport:string;
     private static instance: AccountingDepartment;
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


   private constructor( id:string , private report:string[]){
        super(id,'IT');
        this.lastReport=report[0];

    
    }
    static getInstance(){
        if(AccountingDepartment.instance){
            return this.instance;
        }
        this.instance =new AccountingDepartment('d2',[]);
        return this.instance;
    }

    addEmp(name:string){
        if(name === 'Singh'){
          return;  
        }
        this.employees.push(name)

    }
    describe() {
        console.log('Accounting departement -ID:'+this.id);
        

        
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

   //const accountingit=new DepartmentIT('D1','Singh');

   account.addEmployee('SIDDHARTH');
 account.addEmployee('Singh');
 //accounting1.employees[2]='Mohan';
   account.describe();
   console.log(account);
  // const accounti=new AccountingDepartment('d2',[]);
  const accounti =AccountingDepartment.getInstance();
  const accounti2 =AccountingDepartment.getInstance();
  console.log(accounti,accounti2);
  
   accounti.mostrecentReport='Year end report';
  
   
   accounti.addReport('Something went wrong...');
   console.log(accounti.mostrecentReport);
   accounti.addEmp('Singham');
   accounti.addEmp('Singh');
//    accounti.printEmployeeInformation();
//    accounti.getReport();
accounti.describe();

   
   //accounting1.printEmployeeInformation();