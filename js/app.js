// ---- Digital Clock JS -------
setInterval(() => {

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

    if (date < 10) {
        elemDate.innerHTML = "0" + date;
    } else {
        elemDate.innerHTML = date;
    }

    elemYear.innerHTML = year;

    let arrDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (let i = 0; i < day; i++) {
        elemDay.innerHTML = arrDays[i];
    }

    let arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let i = 0; i < month; i++) {
        elemMonth.innerHTML = arrMonths[i];
    }

    if (hour < 12) {
        if (hour === 0) {
            elemHour.innerHTML = hour + 12;
        } else {
            elemHour.innerHTML = hour;
        }
        elemmMin.innerHTML = min;
        elemSec.innerHTML = sec + " AM";
    } else if (hour > 11) {
        if (hour === 12) {
            elemHour.innerHTML = hour;
        } else {
            elemHour.innerHTML = hour - 12;
        }
        elemmMin.innerHTML = min;
        elemSec.innerHTML = sec + " PM";
    }

}, 1000);