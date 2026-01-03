import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Pie } from "react-chartjs-2"

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
                "#FF6384",  // Stocks - Pink
                "#36A2EB",  // Bonds - Blue
                "#FFCE56",  // Real Estate - Yellow
                "#4BC0C0",  // Crypto - Teal
                "#9966FF"   // Cash - Purple
              ],
              borderColor: "#fff",
              borderWidth: 2
            },
          ]
        }}
        options={{
          plugins: {
            legend: {
              position: 'left',
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
            }
          }
        }}
      />
    </>
  );
}