import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Pie } from "react-chartjs-2"
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ChartDataLabels);

defaults.plugins.title.font.size = 20;
defaults.plugins.title.align = "center";
defaults.plugins.title.color = "black";

export function SPChart() {

  const portfolioData = {
    assets: ['Stocks', 'Bonds', 'Real Estate', 'Crypto', 'Cash'],
    allocation: [45, 25, 15, 10, 5], // Percentage
    values: [45000, 25000, 15000, 10000, 5000] // USD
  };

  return (
    <>
      <Pie
        data={{
          labels: portfolioData.assets,
          datasets: [
            {
              label: "Portfolio Allocation",
              data: portfolioData.allocation,
              backgroundColor: [
                "#FF6384",  
                "#36A2EB",  
                "#FFCE56",  
                "#4BC0C0",  
                "#9966FF"   
              ],
              borderColor: "#fff",
              borderWidth: 2
            },
          ]
        }}
        options={{
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Investment Portfolio Distribution',
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  const label = context.label || '';
                  const value = context.parsed || 0;
                  const usdValue = portfolioData.values[context.dataIndex];
                  return `${label}: ${value}% ($${usdValue.toLocaleString()})`;
                }
              }
            },
            datalabels: {
              color: '#fff',           // Text color
              font: {
                weight: 'bold',
                size: 16
              },
              formatter: (value, context) => {
                return value + '%';    // Shows "45%", "25%", etc.
              }
            }
          }
        }}
      />
    </>
  );
}