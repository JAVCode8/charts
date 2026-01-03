import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2"

defaults.plugins.title.display = true;
defaults.plugins.title.font.size = 20;
defaults.plugins.title.align = "center";
defaults.plugins.title.color = "black";

export function WeatherChart() {
  const weatherData = {
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    temperature: [28, 32, 30, 27, 29, 33, 31], // Celsius
    humidity: [65, 70, 68, 72, 69, 64, 66], // Percentage
    rainfall: [0, 5, 2, 15, 8, 0, 3] // mm
  };

  return (
    <>
      <Line
        data={{//Combination of Line and Bar charts
          labels: weatherData.days,
          datasets: [
            {
              type: 'line',
              label: "Temperature (°C)",
              data: weatherData.temperature,
              borderColor: "#FF6347",
              backgroundColor: "#FF6347",
              yAxisID: 'y',
              tension: 0.4,
              borderWidth: 3
            },
            {
              type: 'line',
              label: "Humidity (%)",
              data: weatherData.humidity,
              borderColor: "#32CD32",
              backgroundColor: "#32CD32",
              yAxisID: 'y2',
              tension: 0.4,
              borderWidth: 2,
              borderDash: [5, 5]  // Dashed line to differentiate
            },
            {
              type: 'bar',
              label: "Rainfall (mm)",
              data: weatherData.rainfall,
              backgroundColor: "#4682B4",
              yAxisID: 'y1'
            }
          ]
        }}
        options={{
          responsive: true,
          interaction: {
            mode: 'nearest',
            intersect: false,
          },
          plugins: {
            title: {
              display: true,
              text: 'Weekly Weather Forecast'
            },
            datalabels: {
              display: false
            }
          },
          scales: {
            y: {
              type: 'linear',
              display: true,
              position: 'left',
              title: {
                display: true,
                text: 'Temperature (°C)'
              }
            },
            y1: {
              type: 'linear',
              display: true,
              position: 'right',
              title: {
                display: true,
                text: 'Rainfall (mm)'
              },
              grid: {
                drawOnChartArea: false,
              }
            },
            y2: {
              type: 'linear',
              display: false,  // Hide this axis (or set to true if you want 3 axes)
              position: 'left',
              min: 0,
              max: 100  // Humidity is percentage 0-100
            }
          }
        }}
      />
    </>
  );
}