//variable voor tijd en datum
const vandaag = document.getElementById("date");
// const tijd = document.getElementById("time");
let today = new Date();

//dag-maand-jaar
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let datum = date;
console.log(datum);
vandaag.innerText = datum;


let time = (today.getHours()) + ":" + today.getMinutes() + ":" + today.getSeconds();
wijzigen = document.getElementById("time");
function tijd() {   
    today = new Date();
    hours = today.getHours(); 
    minutes = today.getMinutes();
    seconds = today.getSeconds();
    

    if(hours < 10){
        hours = "0" + hours
    }

    if(minutes < 10){
        minutes = "0" + minutes
    }

    if(seconds < 10){
        seconds = "0" + seconds
    }

    acarateTime = hours + ":" + minutes + ":" + seconds;

    wijzigen.innerText = acarateTime;
}
setInterval(tijd, 1000);