import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import {
  // Doughnut,
  // Line,
  Bar,
  // Pie,
  // Bubble,
  // PolarArea,
  // Radar,
  // Scatter,
} from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

// Start of Bar Chart Setting
// const labels = Utils.months({ count: 7 });
export const BarChartComponent = {
  labels: [
    "Bomi",
    "Bong",
    "Gbarpolu",
    "Grand Bassa",
    "Grand Cape Mount",
    "Grand Gedeh",
    "Grand Kru",
    "Lofa",
    "Margibi",
    "Maryland",
    "Montserrado",
    "Nimba",
    "River Gee",
    "Rivercess",
    "Sinoe",
  ],
  datasets: [
    {
      label: "Enrollment Activities",
      data: [65, 59, 80, 81, 56, 55, 40, 80, 90, 100, 45, 58, 79, 57, 48],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
        "rgba(201, 203, 207, 0.2)",
        "rgba(201, 203, 207, 0.2)",
        "rgba(201, 203, 207, 0.2)",
        "rgba(201, 203, 207, 0.2)",
        "rgba(201, 203, 207, 0.2)",
        "rgba(201, 203, 207, 0.2)",
        "rgba(201, 203, 207, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
        "rgb(201, 203, 207)",
        "rgb(201, 203, 207)",
        "rgb(201, 203, 207)",
        "rgb(201, 203, 207)",
        "rgb(201, 203, 207)",
        "rgb(201, 203, 207)",
        "rgb(201, 203, 207)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

const BarChart = () => {
  return (
    <React.Fragment>
      <Bar data={BarChartComponent} />
    </React.Fragment>
  );
};

export default BarChart;

// End of Bar Chart Setting
