"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const form = document.querySelector('form');
const addressInput = document.getElementById('address');
const Google_Api_Key = "AIzaSyCIaAc2c5M3VpbCH6PPq_guwy9lHuowXOs";
function searchAddressHandler(event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
    //send this to google api
    // fetch('');
    axios_1.default.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${Google_Api_Key}`).then(response => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    });
}
form.addEventListener('submit', searchAddressHandler);
