//algemene dingen voor tijd en datum
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
    time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    wijzigen.innerText = time;
    
}
setInterval(tijd, 1000);