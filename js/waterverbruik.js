const xValues = ["maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag","zondag"];
const yValues = [100, 119, 180, 480, 332, 412, 430];

new Chart("waterVerbruik", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 100, max:500}}],
    }
  }
});