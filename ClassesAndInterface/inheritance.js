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
    describe() {
        console.log(`Department(${this.name}):${this.id}`);
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
    addEmp(name) {
        if (name === 'Singh') {
            return;
        }
        this.employees.push(name);
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
const accountingit = new DepartmentIT('D1', 'Singh');
account.addEmployee('SIDDHARTH');
account.addEmployee('Singh');
//accounting1.employees[2]='Mohan';
account.describe();
console.log(account);
const accounti = new AccountingDepartment('d2', []);
accounti.mostrecentReport = 'Year end report';
accounti.addReport('Something went wrong...');
console.log(accounti.mostrecentReport);
accounti.addEmp('Singham');
accounti.addEmp('Singh');
accounti.printEmployeeInformation();
accounti.getReport();
//accounting1.printEmployeeInformation();
