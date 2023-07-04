console.log("Task 7 in the javascript ");

// Ques:-create a javascript Program capable of generating a password which contains atleast lowercase, one upperCase and one special charachters. Create a password class to acheive the same.

/*
class pssword:
 generateStrongPassword
 generateWeakpassword
 generateSuperStrongpassword
 generateFunnypassword 
*/

const arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const num=[0,1,2,3,4,5,6,7,8,9];
const symb=['@','#','$','&','*'," "];
console.log(arr);
const arr1=[];
for(let i in arr){
   let d=arr1.push(arr[i].toUpperCase());
    // toUpperCase
   
}
let arr2=[]; // creating a new array
console.log(arr1);
console.log(arr1[0]);
console.log(num);
console.log(symb);
let btn1=document.getElementById("btn1");
let check1=document.getElementById('check1');
let check2=document.getElementById('check2');
let check3=document.getElementById('check3');
let check4=document.getElementById('check4');
// let checkboxes=document.querySelectorAll('input[name="inp"]');
let num1=Math.floor(Math.random()*26)+64;
let z=String.fromCharCode(num1);
console.log(z);
console.log(num1);
let emp="";
let pwd=0;
let num2=Math.floor(Math.random()*arr.length-1);
console.log(num2+" random number for array");
btn1.addEventListener('click',func);
function func(){
    if(check1.checked==true){
        console.log('Strong');
        let j=  Math.round(Math.random()*(arr.length-1));
        let j1=  Math.round(Math.random()*(num.length-1));
        let j2=  Math.round(Math.random()*(symb.length-1));
      pwd=arr[j]+num[j1]+symb[j2]+arr[j1]+arr[j2];
      document.getElementById('para').innerHTML=pwd;
        console.log(pwd);
        // console.log("value of j "+j);
        // console.log("value of j "+j1);
        // console.log("value of j "+j2);
        // console.log("value of arr[j] "+ arr[j]);
        // console.log("value of num[j1] "+ num[j1]);
        // console.log("value of num[j2] "+ symb[j2]);
    }
    else if(check2.checked==true){
     console.log('Weak');
    }
    else if(check3.checked==true){
     console.log('Super-strong');
    }
    else if(check4.checked==true){
    console.log('funny');
    }
    // console.log(check1.checked);
    console.log("clicked");
}