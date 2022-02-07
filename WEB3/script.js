/*jshint esversion: 6 */
/* jshint node: true */

'use strict';


const reg = document.querySelector('.login'),
      btn = document.querySelector('button'),
      pswrd = document.querySelector('.Password'),
      pswrd2 = document.querySelector('.Password2');



btn.addEventListener('click', (e)=> {
    e.preventDefault();
    let data = reg.value;
    let pass = pswrd.value;
    let pass2 = pswrd2.value;


    if (data == " "  && pass == pass2){
         alert('Enter the correct value');
     } else{
        alert('Registration was successful');
     }

});


// function yourName() {
//     let a = prompt('What is your name?');
//     alert('Hello ' + a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()); 
// }


// function lifeInTime() {
//     let currentAge = 18;
//     let goalAge = 90;
//     let days, weaks, months;
//     days = (goalAge - currentAge)*365;
//     weaks = (goalAge - currentAge)*52;
//     months = (goalAge - currentAge)* 12;

//     return("You have " + days + " days, " + weaks + " weaks, and " + months + " months left." );
// }


// function BMI() {
//     let weight = 67, height = 1.8, bmi;

//     bmi = weight/(height*height);
//     if(bmi < 18.5) {
//         return('"Your BMI is '+ bmi +' so you are underweight.');
//     } else if(bmi > 18.5 && bmi < 24.9){
//         return('"Your BMI is '+ bmi +' so you have a normal weight.');
//     } else if(bmi > 24.9){
//         return ('"Your BMI is '+ bmi +' so you are overweight.');
//     }
// }

// function leapYear() {
//     let year = parseInt(prompt('Enter the year: '));

//     if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
//         return( year + " - Leap year");
//     } else {
//         return( year + " - Not Leap year");
//     }
// }

// function lunch() {
//     let nameArr = new Array("Adil", "Diyar", "Amir", "Sanzhar", "Dimash");
//     return nameArr[Math.floor(Math.random()* nameArr.length)] + " is going to buy lunch today";
// }

//  function fibonnaci(n){
//     let fib = [0, 1];
//     for(let i=fib.length; i<n; i++) {
//         fib[i] = fib[i-2] + fib[i-1];
//     }
//     return (fib); 
// }


