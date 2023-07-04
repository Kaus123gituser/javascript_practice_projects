console.log("the task 5 of the Javascript exercise");

// hackerman :-
/*
Write a javascript program to pretend to look like a hacker write an aysnc function which will simply display the following output:

//initializing hack program.... 

Hacking Ashish username.....

Username found ashish17....

Connecting to facebook.....

Try to use Html & Styling if possible
*/

async function hack(){
let hack1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("initiallizing hack program ......");
    },1000)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            resolve("Hacking ashish username.....");
        },2000);
        return new Promise((resolve,reject)=>{
         setTimeout((value)=>{
            resolve("Username found Ashish 17...")
         },4000);
         return new Promise((resolve,reject)=>{
            resolve("Connecting to Facebook");
         }).then((value)=>{
            setTimeout(()=>{
           document.getElementById("box4").innerHTML=value;
            },5000)
         })
        },3000).then((value)=>{
            document.getElementById('box3').innerHTML=value;
        });
    }).then((value)=>{
        document.getElementById('box2').innerHTML=value;
    })
  

});
document.getElementById('box1').innerHTML=await hack1; 

}
// Hence the task is completed
hack();



let func=()=>{

}