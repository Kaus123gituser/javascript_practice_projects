console.log('counter creation of javascript');

let a = 1;
// let b=1;

const time = setInterval(() => {

    document.getElementById('box1').innerHTML = a;
    a++;
    if (a == 10) {
        a = 0;
        // return a+1;
        recall();
        if (b == 8) {

            clearInterval(time);
        }
    }
}, 1000);



function zero() {

}
let b = 0;
function recall() {
    // a=0;
    // let c=counter();
    setTimeout(() => {

        document.querySelector('.card').innerHTML = b + 1;
        b++;
        console.log("triggered");
    }, 1000)
    // document.querySelector('.card').innerHTML=b;
};
//  Task Completed
