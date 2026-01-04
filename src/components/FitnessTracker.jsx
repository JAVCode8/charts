import { Chart as ChartJS } from "chart.js/auto";
import { Line } from 'react-chartjs-2'

export function FitnessTracker() {
  const fitnessData = {
    weeks: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    workouts: [3, 4, 4, 5, 4, 6], // Days per week
    calories: [2200, 2100, 2050, 1950, 2000, 1900], // Daily average
    weight: [75, 74.5, 74, 73.5, 73, 72.5] // kg
  };

  return (
    <>
      <Line
        data={{
          labels: fitnessData.weeks,
          datasets: [
            {
              label: "Workouts (Days per week)",
              data: fitnessData.workouts,
              backgroundColor: "#6A5ACD",
              borderColor: "#6A5ACD",
              tension: 0.4
            },
            {
              label: "Calories (Daily Average)",
              data: fitnessData.calories,
              backgroundColor: "#FF6384",
              borderColor: "#FF6384",
              tension: 0.4,
              yAxisID: 'y1'
            },
            {
              label: "Weights (kg)",
              data: fitnessData.weight,
              backgroundColor: "#20B2AA",
              borderColor: "#20B2AA",
              tension: 0.4,
              yAxisID: 'y2'
            }
          ]
        }}

        options={{
          responsive: true,
          interaction: {
            mode: 'nearest',
            intersect: false
          },
          plugins: {
            title: {
              text: "Fitness Tracker",
              display: true
            },
            datalabels: {
              display: false
            }
          },
          scales: {
            y: {
              type: 'linear',
              position: 'left',
              display: true,
              title: {
                display: true,
                text: "Workouts (Days per week)"
              },
              min: 0,
              max: 7
            },
            y1: {
              type: 'linear',
              position: 'right',
              display: true,
              title: {
                display: true,
                text: "Calories"
              },
              grid:{
                drawOnChartArea : false
              }
            },
            y2 : {
              type: 'linear',
              position: "right",
              display: false,
              min: 70,
              max: 80
            }
          }
        }}
      />
    </>
  );
}