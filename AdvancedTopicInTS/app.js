"use strict";
const e1 = {
    name: 'Singh',
    privileges: ['create-server'],
    startDate: new Date()
};
function add2(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add2('Max', 'Singh'); //as string
console.log(result.split(''));
const result1 = add2('Singh', 1);
console.log(result1);
// type UnknownEmployee =Employe | Admin;
// function printEmployeeInformation(emp:UnknownEmployee) {
//     console.log('Name'+emp.name);
//     if('privileges' in emp ){
//         console.log('Privillage:'+emp.privileges);
//     }
//     if('startDate' in emp){
//         console.log('Privillage:'+emp.startDate);
//     }
// }
// printEmployeeInformation({name:'Manu', startDate:new Date()});
// class Car{
//     drive(){
//         console.log('Driving...');
//     }
// }
// class Truck{
//     drive(){
//     console.log("Driving a truck...");
//     }
//     loadCargo(amount:number){
//         console.log('loading cargo ...'+amount);
//     }
// }
// type Vehicle= Car | Truck;
// const v1=new Car();
// const v2=new Truck();
// function useVehicle(vehicle:Vehicle) {
//     vehicle.drive();
//     // if('loadCargo' in vehicle){
//     //     vehicle.loadCargo(1000);
//     // }    
//     if(vehicle instanceof Truck){
//         vehicle.loadCargo(1000);
//     }    
// }
// useVehicle(v1);
// useVehicle(v2);
