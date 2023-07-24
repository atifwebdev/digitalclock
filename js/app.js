// document.querySelector("#runFunc").addEventListener("click", () => {
//     let getDate = new Date();
// console.log(getDate);
// });
// setInterval( () => {
   
// }, 1000);

let elemDay = document.querySelector("#day");
let elemDate = document.querySelector("#daynum");
let elemMonth = document.querySelector("#month");
let elemYear = document.querySelector("#year");
let elemHour = document.querySelector("#hour");
let elemmMin = document.querySelector("#min");
let elemSec = document.querySelector("#sec");

let getdate = new Date();
let day = getdate.getDay() + 1;
let date = getdate.getDate();
let month = getdate.getMonth() + 1;
let year = getdate.getFullYear();
let hour = getdate.getHours();
let min = getdate.getMinutes();
let sec = getdate.getSeconds();
console.log(getdate);

elemDate.innerHTML = date;
elemYear.innerHTML = year;

let arrDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
for(let i=0; i<day; i++){
    elemDay.innerHTML = arrDays[i];
    // console.log(arrDays[i]);
}

let arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
for(let i=0; i<month; i++){
    elemMonth.innerHTML = arrMonths[i];
    // console.log(arrMonths[i]);
}

for(let i=0; i<=hour; i++){
    if(i < 12){
        elemHour.innerHTML = hour;
        elemmMin.innerHTML = min;
        elemSec.innerHTML = sec + " AM";
        // console.log(hour +" AM");
    }else{
        elemHour.innerHTML = hour - 12;
        elemmMin.innerHTML = min;
        elemSec.innerHTML = sec + " PM";
        // console.log(hour +" PM");
    }
}

// elemHour.innerHTML = hour;
// elemmMin.innerHTML = min;
// elemSec.innerHTML = sec;

// console.log(hour+" "+ min +" "+ sec);