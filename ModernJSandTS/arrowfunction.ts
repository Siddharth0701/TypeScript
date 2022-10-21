    const addit= (a:number,b:number)=>{
        return a+b;

    };
    console.log(addit(5,5));

 const printOutput=(output:number |string)=>{

console.log(output);

  }
  printOutput(addit(5,5))
  const button=document.querySelector('button');
  if(button){
    button.addEventListener('click', event=> console.log(event));
  }
  
    