"use strict";
// // function Logger( constructor:Function) {
// //      console.log('Logging..');
// //      console.log(constructor);
// // }
// function Logger(LogString:string ) {
//     console.log('logger factory');
//     return function(constructor:Function){
//         console.log(LogString);
//         console.log(constructor);
//     }   
// }
// function WithTemplate(template:string,hookid:string) {
//     console.log('Rendering template');
//     return function<T extends {new(...args:any[]):{name:string} }>(originalconstructor: T)
//     {   return class extends originalconstructor{
//             constructor(){
//                 super();
//                 console.log("Rendering template");
//                 const hookEl=document.getElementById(hookid);
//        // const p=new originalconstructor();
//         if(hookEl){
//             hookEl.innerHTML=template;
//             hookEl.querySelector('h1')!.textContent=this.name ;
//         }
//             }
//         };
//     };
// }
// //@Logger('LOGGING -PERSONSINGH')
// @Logger('LOGGING')
// @WithTemplate('<h1> My PersonSingh Object </h1>','app')
// class PersonSingh{
//     name='Singh';
//     constructor() {
//         console.log("Creating personsingh object...");
//        // super();
//     }
// }
// const pers =new PersonSingh();
// console.log(pers);
// //..............................................................................................................
// function Log(target:any,propertyName:string | Symbol){
//     console.log('Property decorator !');
//     console.log(target, propertyName);
// }
// function Log2(target:any, name:string, description:PropertyDescriptor){
//     console.log('Accessor decorator!');
//     console.log(target);
//     console.log(name);
//     console.log(description);
//    // console.log(target);
// }
// function Log3(target:any,name:string | Symbol, description:PropertyDescriptor) {
// console.log('Method decorator!');
//     console.log(target);
//     console.log(name);
//     console.log(description);
// }
// function Log4(target:any,name:string | Symbol, position:PropertyDescriptor){
//     console.log('Parameter decorator!');
//     console.log(target);
//     console.log(name);
//     console.log(position);
// }
// class Product{
//     @Log   //property decorator
//     title:string;
//    private _price:number;
//    @Log2
//     set price(val:number){
//         if(val>0){
//             this._price=val;
//         }
//         else{
//             throw new Error('Invalid price -should be positive!');
//         }
//     }
//     constructor( t:string,p:number) {
//         this.title=t;
//         this._price=p;
//     }
//     // @Log3 
//     // getPriceWithtax( @Log4 tax:number){
//     //     return this._price * (1+tax);
//     // }
//     @Log3 
//     getPriceWithtax(tax:number){
//         return this._price * (1+tax);
//     }
// }
// const p1=new Product('Book',19)
// const p2=new Product('Book',19)
// const p3=new Product('Book',19)
