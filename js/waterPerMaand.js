const xValues = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
const yValues = [27, 119, 180, 480, 332, 412, 430];

new Chart("waterVerbruik2", {

  
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
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{ ticks: { min: 0, max: 5000 } }],
    }
  }
});