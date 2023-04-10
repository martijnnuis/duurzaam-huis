const xValues = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];
const yValues = [27, 119, 180, 480, 332, 412, 430];

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
      yAxes: [{ ticks: { min: 0, max: 500 } }],
    }
  }
});