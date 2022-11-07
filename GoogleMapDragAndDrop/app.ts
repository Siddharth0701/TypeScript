import axios from 'axios';
const form =document.querySelector('form')!;
const addressInput=document.getElementById('address')! as HTMLInputElement;
const Google_Api_Key="AIzaSyCIaAc2c5M3VpbCH6PPq_guwy9lHuowXOs";
function searchAddressHandler(event:Event) {
    event.preventDefault();
    const enteredAddress= addressInput.value;
    //send this to google api
   // fetch('');
   axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
      enteredAddress
      )}&key=${Google_Api_Key}`).then(response=>{
    console.log(response);
    

   }).catch(err =>{
console.log(err);

   });


    
}
form.addEventListener('submit',searchAddressHandler);
