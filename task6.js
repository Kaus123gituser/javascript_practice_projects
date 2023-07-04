console.log('Exercise 6 or the task no 6 in javascript');
// Create  a ToDo liST with the help of Html Css javascript

// add option , create option , delete option and acess all the Todos

// Try to make UI as good as Possible

let text = document.getElementById('text1');
let submit = document.getElementById('btnsubmit');
func();
submit.addEventListener('click', func);
function func() {
    console.log('Clikced');
    let date = new Date();
    let date1 = date.getTime();
    let time = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    console.log(date);
    console.log(date1);
    console.log(time);
    console.log(minute);
    console.log(second);

    let text1 = document.getElementById('text1').value;
    let text2 = document.getElementById('text2').value;
    // let html="";
    if (time < 24) {

        var a = `${time}:${minute}:${second}:PM`;
        // a=`${time}:${minute}:${second}:PM`;
        // document.getElementById('time').innerHTML = a;
        // timein=a;
        // document.getElementById('date').innerHTML=date;    
        // console.log(a);
    }
    else if (time > 24) {
        a = time + ":" + minute + ":" + second + " AM";

    }

    let obj = {
        head: text1,
        note: text2,
        time1: a,
        date1: date,
    }

    if (text1!=0 || text2 != 0) {
        let arr = JSON.parse(localStorage.getItem('crud'));
        console.log(arr);
        if (arr == null) {
            let data = [obj];
            localStorage.setItem('crud', JSON.stringify(data));

        }
        else {
            arr.push(obj);
            localStorage.setItem('crud', JSON.stringify(arr));
        }
    }
    let arr = JSON.parse(localStorage.getItem('crud'));
    let html = "";
    for(let k in arr){

    
        html += `
        <div class="card" id="noteadd">
        <h3>${arr[k].head}</h3>
        <div id="space">
        <p>    ${arr[k].note}</p>
        </div>
        <input type="button" id="${k}" onclick="deletenote(this.id)" value="Delete Note">
    
        <input type="button" id=${k} onclick="Updation(this.id)" value="Update">
        <div id="centre">
            <div id="date">${arr[k].date1}</div>
            <div id="time" >${arr[k].time1}:PM</div>
    
        </div>
    </div>
        `;
    }
document.getElementById('notescont1').innerHTML = html;

    // text1.value = "";
    // text2.value = "";


}


// Now let's create a fuctioning for the delete Button for our to-do app.
// let delete1=document.getElementById('notebtn');
// delete1.addEventListener('click',func1);
// let z=func();
function deletenote(k){
    console.log('Ready for the deletion');
    let arr = JSON.parse(localStorage.getItem('crud'));
    // console.log(l);
    arr.splice(k,1)
    localStorage.setItem('crud',JSON.stringify(arr));
    func();
    console.log(arr);
}

// NOW the next piece of logic will be for the Updation of the previous text
function Updation(k){
//
let update=document.getElementById('update').value;
let arr=JSON.parse(localStorage.getItem('crud'));
arr[k].note=update;
localStorage.setItem('crud',JSON.stringify(arr));
func();

}

// for the memorable local storage collection in the javascript

// function memorable() {
//     if (text1 || text2 != 0) {
//         let arr = JSON.parse(localStorage.getItem('crud'));
//         console.log(arr);
//         if (arr == null) {
//             let data = [obj];
//             localStorage.setItem('crud', JSON.stringify(data));

//         }
//         else {
//             arr.push(obj);
//             localStorage.setItem('crud', JSON.stringify(arr));
//         }
//     }
// }
// console.log(arr);
// Now for the search traversing of the DOM

let search=document.getElementById('searchbtn');
search.addEventListener('click',newfunc);
function newfunc(e){
    console.log('clicked');

    let searchbar=document.getElementById('searchbar').value;
    if(searchbar!=null){
        let arr = JSON.parse(localStorage.getItem('crud'));
        for(j in arr){

            if(searchbar==arr[j].note){
            //  arr[j].note.innerHTML=;
            }
            else{
                console.log('nothign');
            }
        }
    }

    e.preventDefault();  // this will prevetn us from  the default state 
}

// designed the APP
// Task Done;