console.log("the applicaton fro the CRUD OPERATION");
// for the input of the search 
let search = document.getElementById("inp");
update();
// for the submission process
let button = document.getElementById("btn");
button.addEventListener('click', func1);
function func1() {
    let search = document.getElementById("inp");
    let val = search.value;
    if (val == "") {
        document.getElementById('msg').innerHTML = "please enter the value";
    }
    else {
        if(val != 0) {
            let arr = JSON.parse(localStorage.getItem('crud'));
            console.log(arr);
            if(arr==null){
                let data=[val];
                localStorage.setItem('crud',JSON.stringify(data));
            }
            else{
                arr.push(val);
                localStorage.setItem('crud',JSON.stringify(arr));
            //  console.log(localStorage.setItem('crud',JSON.stringify(arr)));

            }
            document.getElementById('msg').innerHTML='data added';
            document.getElementById('inp').value="";
        }
        update();

    }
    // return val;
// update();

}
let z=func1();
function update(z){
    
 let arr=JSON.parse(localStorage.getItem('crud'));
 if(arr!=null){
    let html="";
    let sno=1;
    for(let k in arr){
        html+= `<tr><td>${sno}</td>
        <td>${arr[k]}</td>
        <td><button><a href="#" onclick="editdata(${k})"> Edit</a></button> <span> </span> <button><a href="#" onclick="DeleteData(${k})">delete</a></button></td>
       </tr> `;
       sno++;
    }
    document.getElementById('root').innerHTML=html;
 }

}

// to create a function which can create the inforamtion into the Local Storage



// let edit = document.getElementById("edit");
// edit.addEventListener('click', func2);
// function func2() {
//     console.log('edit');
// }
// let delete1 = document.getElementById("delete");
// delete1.addEventListener('click', func3);
// function func3() {
//     console.log('delete');
// }

