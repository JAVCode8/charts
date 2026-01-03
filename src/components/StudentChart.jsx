import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Radar } from "react-chartjs-2"

defaults.plugins.title.display = true;
defaults.plugins.title.font.size = 20;
defaults.plugins.title.align = "center";
defaults.plugins.title.color = "black";

export function StudentChart() {

  const studentScores = {
    students: ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'],
    math: [85, 78, 92, 88, 75, 90],
    science: [90, 82, 88, 85, 80, 87],
    english: [88, 85, 78, 92, 88, 83],
    history: [82, 90, 85, 80, 92, 88]
  };

  return (
    <>
      <Radar
        data={{
          labels: studentScores.students,
          datasets: [
            {
              label: "Math",
              data: studentScores.math,
              backgroundColor: "rgba(138, 43, 226, 0.2)",
              borderColor: "rgb(138, 43, 226)",
            },
            {
              label: "Science",
              data: studentScores.science,
              backgroundColor: "rgba(60, 179, 113, 0.2)",
              borderColor: "rgb(60, 179, 113)",
            },
            {
              label: "English",
              data: studentScores.english,
              backgroundColor: "rgba(210, 88, 237, 0.2)",
              borderColor: "rgb(204, 114, 165)",
            },
            {
              label: "History",
              data: studentScores.history,
              backgroundColor: "rgba(84, 227, 191, 0.2)",
              borderColor: "rgb(108, 240, 207)",
            }
          ]
        }}
        options={{
          plugins: {
            title: {
              text : "Student Scores"
            },
          }
        }}  
      />
    </>
  );
}