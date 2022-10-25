"use strict";
class DepartmentIT {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // private id:string;
        // private name:string;
        this.employees = [];
        //this.name=na;
        //this.id=id;
        console.log(DepartmentIT.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        // this.id='d1';
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
DepartmentIT.fiscalYear = 2022;
class ITDepartment extends DepartmentIT {
    constructor(id, admin) {
        super(id, 'it');
        this.admin = admin;
    }
    describe() {
        console.log("IT Department --ID " + this.id);
    }
}
class AccountingDepartment extends DepartmentIT {
    constructor(id, report) {
        super(id, 'IT');
        this.report = report;
        this.lastReport = report[0];
    }
    get mostrecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("no report founds");
    }
    set mostrecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    addEmp(name) {
        if (name === 'Singh') {
            return;
        }
        this.employees.push(name);
    }
    describe() {
        console.log('Accounting departement -ID:' + this.id);
    }
    addReport(text) {
        this.report.push(text);
        this.lastReport = text;
    }
    getReport() {
        console.log(this.report);
    }
}
const employee1 = DepartmentIT.createEmployee('Singh');
console.log(employee1, DepartmentIT.fiscalYear);
const account = new ITDepartment('D1', ['Max']);
//
//const accountingit=new DepartmentIT('D1','Singh');
account.addEmployee('SIDDHARTH');
account.addEmployee('Singh');
//accounting1.employees[2]='Mohan';
account.describe();
console.log(account);
// const accounti=new AccountingDepartment('d2',[]);
const accounti = AccountingDepartment.getInstance();
const accounti2 = AccountingDepartment.getInstance();
console.log(accounti, accounti2);
accounti.mostrecentReport = 'Year end report';
accounti.addReport('Something went wrong...');
console.log(accounti.mostrecentReport);
accounti.addEmp('Singham');
accounti.addEmp('Singh');
//    accounti.printEmployeeInformation();
//    accounti.getReport();
accounti.describe();
//accounting1.printEmployeeInformation();
