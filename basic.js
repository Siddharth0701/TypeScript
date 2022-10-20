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
    hobbies: ['spots', 'Cooking'],
    role: [2, 'author']
};
person.role.push('admin');
person.role[1] = 10;
var favoriteActivity;
favoriteActivity = ['spots'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobbies = _a[_i];
    console.log(hobbies.toUpperCase());
}
console.log(person);
//Working with Tuples
var person1 = {
    name: 'siddhart',
    age: 21,
    hobbies: ['spots', 'Cooking'],
    role: [2, 'author']
};
person1.role.push('admin');
//person1.role[1]=10;
//Working with Enum
// const admin =0;
// const read_only=1;
// const author=2;
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["read_only"] = 1] = "read_only";
    Role[Role["author"] = 2] = "author";
})(Role || (Role = {}));
;
var per = {
    name: 'siddharth',
    age: 21,
    hobbies: ['spots', 'cooking'],
    role: Role.admin
};
if (per.role === Role.admin) {
    console.log('is admin');
}
