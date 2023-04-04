let today = new Date();

//dag-maand-jaar
const vandaag = document.getElementById("date");
function datum() {
    let year = today.getFullYear();
    let month = (today.getMonth() + 1);
    let day = today.getDate();

    if (month < 10) {
        month = "0" + month
    }

    if (day < 10) {
        day = "0" + day
    }

    let datum = day + "/" + month + "/" + year;
    vandaag.innerText = datum;
}
setInterval(datum, 1000);

// uur-minuut-seconde
wijzigen = document.getElementById("time");
function tijd() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();


    if (hours < 10) {
        hours = "0" + hours
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    if (seconds < 10) {
        seconds = "0" + seconds
    }

    let acarateTime = hours + ":" + minutes + ":" + seconds;

    wijzigen.innerText = acarateTime;
}
setInterval(tijd, 1000);

//besparing

const besparingText = document.getElementById("js--besparing-text");


let beginNumber = 0;
let secondNumber = 0;

function showBesparing () {

    let randomNumber = Math.floor(Math.random() * 11);
    let randomDecimal = Math.floor(Math.random() * 99);

    if (randomDecimal < 10) {
        randomDecimal = "0" + randomDecimal;
    }

    showNumber = randomNumber + "," + randomDecimal;
    besparingText.innerText = showNumber;
}
setInterval(showBesparing, 10000);

