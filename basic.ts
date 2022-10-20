// //Object types
// const persion={
//     name:'siddhart',
//     age:21
// };
// console.log(persion.name);

const persion:{
    name:string;
    age:number;

}={
    name:'Siddharth Singh',
    age:21
};
console.log(persion);
const persion1={
    name:'Singh',
    age:21
};

//Array
const person={
    name:'siddhart',
    age:21,
    hobbies:['spots','Cooking']
};
let favoriteActivity:string[];
favoriteActivity=['spots'];
for(const hobbies of person.hobbies){
    console.log(hobbies.toUpperCase());
}

console.log(person);
