import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2"

import './App.css'

defaults.plugins.title.display = true;
defaults.plugins.title.font.size = 20;
defaults.plugins.title.align = "center";
defaults.plugins.title.color = "black";


function App() {

  const salesData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    revenue: [45000, 52000, 48000, 61000, 55000, 67000, 72000, 68000, 71000, 78000, 85000, 92000],
    orders: [450, 520, 480, 610, 550, 670, 720, 680, 710, 780, 850, 920],
    customers: [320, 380, 350, 445, 410, 490, 530, 500, 520, 575, 630, 680]
  };

  const weatherData = {
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    temperature: [28, 32, 30, 27, 29, 33, 31], // Celsius
    humidity: [65, 70, 68, 72, 69, 64, 66], // Percentage
    rainfall: [0, 5, 2, 15, 8, 0, 3] // mm
  };

  return (
    <div className='App'>
      <div className="card">
        <Line
          data={{
            labels: salesData.months,
            datasets: [
              {
                label: "Earnings",
                data: salesData.revenue,
                backgroundColor: "#6A5ACD",
                borderColor: "#6A5ACD",
                tension: 0.4
              },
              {
                label: "Orders",
                data: salesData.orders,
                backgroundColor: "#FF6384",
                borderColor: "#FF6384",
                yAxisID: 'y1',
                tension: 0.4
              },
              {
                label: "Customers",
                data: salesData.customers,
                backgroundColor: "#20B2AA",
                borderColor: "#20B2AA",
                yAxisID: 'y1',
                tension: 0.4
              }
            ]
          }}
          options={{
            responsive: true,
            interaction: {
              mode: 'nearest',
              intersect: true,
            },
            scales: {
              y: {
                type: 'linear',
                display: true,
                position: 'left',
                title: {
                  display: true,
                  text: 'Revenue ($)'
                }
              },
              y1: {
                type: 'linear',
                display: true,
                position: 'right',
                title: {
                  display: true,
                  text: 'Orders / Customers'
                },
                grid: {
                  drawOnChartArea: false,
                }
              }
            },
            plugins: {
              title: {
                text: "Sales Data"
              }
            }
          }}
        />
      </div>
      <div className="card">
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
      </div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
    </div>
  )
}

export default App
