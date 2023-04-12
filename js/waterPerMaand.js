const chartCanvas = document.getElementById('myChart');

const energyData = [6.33, 6.39, 6.38, 6.13, 5.81, 5.87, 5.63, 5.49, 5.41, 5.35, 5.42, 5.14, 5.34, 5.3, 5.05, 4.85, 4.86, 4.99, 4.96, 5.06, 5.06, 4.96, 4.84, 4.53, 4.37, 4.55, 4.49, 4.55, 4.19, 6.69];

const dailyTotals = [energyData[0]];
for (let i = 1; i < energyData.length; i++) {
  dailyTotals.push(dailyTotals[i - 1] + energyData[i]);
}

const days = Array.from({ length: energyData.length }, (_, i) => i + 1);

const myChart = new Chart("waterVerbruik2", {
  type: 'line',
  data: {
    labels: days,
    datasets: [{
      label: 'Totaal gas verbruik',
      data: dailyTotals,
      fill: true,
      borderColor: "rgba(119,135,119,1)",
      tension: 0.5
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{ ticks: { min: 0, max: 160 } }],
    }
  }
});