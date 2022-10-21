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





//Array
const person={
    name:'siddhart',
    age:21,
    hobbies:['spots','Cooking'],
    role:[2,'author']
};
person.role.push('admin');
person.role[1]=10;
let favoriteActivity:string[];
favoriteActivity=['spots'];
for(const hobbies of person.hobbies){
    console.log(hobbies.toUpperCase());
}

console.log(person);


//Working with Tuples
const person1:{
    name:string;
    age:number;
    hobbies:string[];
    role:[number,string];
}={
    name:'siddhart',
    age:21,
    hobbies:['spots','Cooking'],
    role:[2,'author']
};
person1.role.push('admin');
//person1.role[1]=10;


//Working with Enum

// const admin =0;
// const read_only=1;
// const author=2;
enum Role{
admin,read_only,author
};


const per={
    name:'siddharth',
    age:21,
    hobbies:['spots','cooking'],
    role:Role.admin
}

if(per.role === Role.admin){
    console.log('is admin');
    

}