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

let beginNumber = 0
let randomTime = 0

function generateNumber(min, max) {
    randomTime = Math.floor(Math.random()* (max - min)+ min);
}

window.onload = (generateNumber(60000, 600000))

function showBesparing() {

    let randomNumber = Math.random() * 2;
    beginNumber += randomNumber

    showNumber = beginNumber.toFixed(2);
    besparingText.innerText = "€" + showNumber;
    generateNumber(60000, 600000);
}
setInterval(showBesparing, randomTime);



const besparingText2 = document.getElementById("js--besparing-text-2");

let beginNumber2 = 0
let randomTime2 = 0

function generateNumber2(min, max) {
    randomTime2 = Math.floor(Math.random()* (max - min)+ min);
    console.log(randomTime2);
}

window.onload = (generateNumber2(60000, 600000))

function showBesparing2() {

    let randomNumber2 = Math.random() * 2;
    beginNumber2 += randomNumber2

    showNumber2 = beginNumber2.toFixed(2);
    besparingText2.innerText = "€" + showNumber2;
    generateNumber(60000, 600000);
}
setInterval(showBesparing2, randomTime2);



function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

// energy chart

const labels = [
    "Wasmachine",    
    "föhn",
    "droger",
    "TV",
    "Koelkast",    
  ];
  
  const data = {
    labels: labels,

    datasets: [{
        label: 'Energieverbruik in kW',
        data: [120, 50, 200, 110, 220],
        backgroundColor: [
            '#D21312', 
            '#009FBD', 
            '#210062', 
            '#77037B', 
            '#FF6000'
        ]
      }
    ]
  }
  
  const config = {
    type: 'doughnut',
    data: data,
    options: {},
    maintainAspectRatio: false,
  }
  
  new Chart(document.getElementById("js--chart--energy"),
  config
  );
  