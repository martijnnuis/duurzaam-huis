//algemene dingen voor tijd en datum
const vandaag = document.getElementById("date");
const tijd = document.getElementById("Time");
var today = new Date();

//dag-maand-jaar
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var datum = date;
console.log(datum);
vandaag.innerText = datum;

//tijd in uren en minuten
var time = (today.getHours()) + ":" + today.getMinutes();
tijd.innerText = time;


