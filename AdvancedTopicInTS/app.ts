//InterSection
type Admin={
    name:string;
    privillage:string[];

};
type Employe={
    name:string;
    startDate:Date;
};
type ElevateEmployee=Admin & Employe;
const e1:ElevateEmployee={
    name:'Singh',
    privillage:['create-server'],
    startDate: new Date()
};
type Combinable =string | number;
type Numeric =number | boolean;
type Universal=Combinable & Numeric
