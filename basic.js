// //Object types
// const persion={
//     name:'siddhart',
//     age:21
// };
// console.log(persion.name);
var persion = {
    name: 'Siddharth Singh',
    age: 21
};
console.log(persion);
var persion1 = {
    name: 'Singh',
    age: 21
};
//Array
var person = {
    name: 'siddhart',
    age: 21,
    hobbies: ['spots', 'Cooking']
};
var favoriteActivity;
favoriteActivity = ['spots'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobbies = _a[_i];
    console.log(hobbies.toUpperCase());
}
console.log(person);
