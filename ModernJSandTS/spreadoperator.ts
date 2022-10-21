const hobbies=['Sports','Cookies'];

//console.log(hobbies[0]);
const activeHobbies=['Hicking'];
//activeHobbies.push(hobbies[0],hobbies[1]);
activeHobbies.push(...hobbies);
const personsingh={
    name:'Siddharth',
    age:21
};
const copyperson={...personsingh};


const ad= (...numbers:number[])=>{
    //return a+b;
    //let result=0;
     return numbers.reduce(( curResult,curValue)=>{
        return curResult + curValue
    },0);

};
const Addnumber=ad(5,5,6,7.8)
console.log(Addnumber);

const Output=(output:number |string)=>{

console.log(output);

}
//Output(ad(5,5))
const button12=document.querySelector('button');
if(button){
button.addEventListener('click', event=> console.log(event));
}




