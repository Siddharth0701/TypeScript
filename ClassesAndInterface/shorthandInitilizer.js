"use strict";
class DepartmentS {
    constructor(name, id) {
        //this.name=na;
        //this.id=id;
        this.name = name;
        this.id = id;
        // private id:string;
        // private name:string;
        this.employees = [];
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
const accountings = new DepartmentS("Accounting", "D1");
// accounting1.addEmployee('SIDDHARTH');
//accounting1.addEmployee('Singh');
//accounting1.employees[2]='Mohan';
accountings.describe();
//accounting1.printEmployeeInformation();
