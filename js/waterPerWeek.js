const xValues = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
const yValues = [6.3, 12.7, 19, 25.1, 31, 36.9, 45.5];

new Chart("waterVerbruik", {

  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: true,
      lineTension: 0.5,
      borderColor: "rgba(119,135,119,1)",
      data: yValues

    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{ ticks: { min: 0, max: 50 } }],
    }
  }
});