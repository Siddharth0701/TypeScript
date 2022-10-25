//InterSection
type Admin={
    name:string;
    privileges:string[];

};
type Employe={
    name:string;
    startDate:Date;
};
type ElevateEmployee=Admin & Employe;
const e1:ElevateEmployee={
    name:'Singh',
    privileges:['create-server'],
    startDate: new Date()
};
type Combinable =string | number;
type Numeric =number | boolean;
type Universal=Combinable & Numeric

//More On Type Guards
function add2(a:Combinable, b:Combinable) {
    if( typeof a=== 'string' || typeof b === 'string'){
        return a.toString() + b.toString();

    }
    return a +b;
    
}
type UnknownEmployee =Employe | Admin;
function printEmployeeInformation(emp:UnknownEmployee) {
    console.log('Name'+emp.name);
    if('privileges' in emp ){
        console.log('Privillage:'+emp.privileges);

    }
    if('startDate' in emp){
        console.log('Privillage:'+emp.startDate);
        
    }
   
    
    
}
printEmployeeInformation({name:'Manu', startDate:new Date()});
class Car{
    drive(){
        console.log('Driving...');
        
    }
}

class Truck{
    drive(){
    console.log("Driving a truck...");
    }
    loadCargo(amount:number){
        console.log('loading cargo ...'+amount);
    
    }
}
type Vehicle= Car | Truck;
const v1=new Car();
const v2=new Truck();
function useVehicle(vehicle:Vehicle) {
    vehicle.drive();
    // if('loadCargo' in vehicle){
    //     vehicle.loadCargo(1000);
    // }    
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }    
}
useVehicle(v1);
useVehicle(v2);

