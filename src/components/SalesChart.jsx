import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2"

defaults.plugins.title.display = true;
defaults.plugins.title.font.size = 20;
defaults.plugins.title.align = "center";
defaults.plugins.title.color = "black";

export function SalesChart() {
  const salesData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    revenue: [45000, 52000, 48000, 61000, 55000, 67000, 72000, 68000, 71000, 78000, 85000, 92000],
    orders: [450, 520, 480, 610, 550, 670, 720, 680, 710, 780, 850, 920],
    customers: [320, 380, 350, 445, 410, 490, 530, 500, 520, 575, 630, 680]
  };
  return (
    <>
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
            },
            datalabels: {
              display: false
            }
          }
        }}
      />
    </>
  );
}