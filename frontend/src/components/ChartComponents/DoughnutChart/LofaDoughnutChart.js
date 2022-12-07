import React, { useEffect, useState } from "react";
import axios from "axios";
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
  Doughnut,
  // Line,
  // Bar,
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

// Start Doughnut Chart Setting
export const LofaChartComponent = {
  labels: [
    "Daily",
    "Weekly",
    "Monthly",
    "Yearly",
    "Total Males",
    "Total Females",
  ],
  datasets: [
    {
      label: "# of Enrollment Per County",
      data: [],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 100, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 80, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// End of Doughnut Chart Setting

const LofaDoughnutChart = () => {
  // Fetching Data from backend
  const [doughnutData, showDoughnutData] = useState([]);
  const [doughnutProject, showDoughnutProject] = useState([]);

  // Fetch Data
  useEffect(() => {
    axios.get("http://localhost:5000/datas").then((chartData) => {
      showDoughnutData(chartData.data);
    });
  }, []);


  // Fetch Project
  useEffect(() => {
    axios.get("http://localhost:5000/projects").then((chartData) => {
      showDoughnutProject(chartData.data);
    });
  }, []);

  // Pushing data values to the chart array
  // Lofa County Daily
  const lofaDaily = doughnutData
    .filter((lofa) => lofa.county === "Lofa")
    .map((lofa) => lofa.totalDatas)
    .reduce((lofa, lofaDaily) => (lofa += lofaDaily), null) +
    doughnutProject
      .filter((lofa) => lofa.county === "Lofa")
      .map((lofa) => lofa.totalDatas)
      .reduce((lofa, lofaDaily) => (lofa += lofaDaily), null)
    ;

  // Lofa County Weekly
  const lofaWeekly = doughnutData
    .filter((lofa) => lofa.county === "Lofa")
    .map((lofa) => lofa.totalDatas)
    .reduce((lofa, lofaWeekly) => (lofa += lofaWeekly), null) +
    doughnutProject
      .filter((lofa) => lofa.county === "Lofa")
      .map((lofa) => lofa.totalDatas)
      .reduce((lofa, lofaWeekly) => (lofa += lofaWeekly), null)
    ;

  // Lofa County Monthly
  const lofaMonthly = doughnutData
    .filter((lofa) => lofa.county === "Lofa")
    .map((lofa) => lofa.totalDatas)
    .reduce((lofa, lofaMonthly) => (lofa += lofaMonthly), null) +
    doughnutProject
      .filter((lofa) => lofa.county === "Lofa")
      .map((lofa) => lofa.totalDatas)
      .reduce((lofa, lofaMonthly) => (lofa += lofaMonthly), null)
    ;

  // Lofa County Yearly
  const lofaYearly = doughnutData
    .filter((lofa) => lofa.county === "Lofa")
    .map((lofa) => lofa.totalDatas)
    .reduce((lofa, lofaYearly) => (lofa += lofaYearly), null) +
    doughnutProject
      .filter((lofa) => lofa.county === "Lofa")
      .map((lofa) => lofa.totalDatas)
      .reduce((lofa, lofaYearly) => (lofa += lofaYearly), null)
    ;

  // Lofa County Males
  const lofaMales = doughnutData
    .filter((lofa) => lofa.county === "Lofa")
    .map((lofa) => lofa.totalMales)
    .reduce((lofa, lofaMales) => (lofa += lofaMales), null) +
    doughnutProject
      .filter((lofa) => lofa.county === "Lofa")
      .map((lofa) => lofa.totalMales)
      .reduce((lofa, lofaMales) => (lofa += lofaMales), null)
    ;

  // Lofa County Females
  const lofaFemales = doughnutData
    .filter((lofa) => lofa.county === "Lofa")
    .map((lofa) => lofa.totalFemales)
    .reduce((lofa, lofaFemales) => (lofa += lofaFemales), null) +
    doughnutProject
      .filter((lofa) => lofa.county === "Lofa")
      .map((lofa) => lofa.totalFemales)
      .reduce((lofa, lofaFemales) => (lofa += lofaFemales), null)
    ;
  // End of Lofa County


  LofaChartComponent.datasets[0].data[0] = lofaDaily;

  LofaChartComponent.datasets[0].data[1] = lofaWeekly;

  LofaChartComponent.datasets[0].data[2] = lofaMonthly;

  LofaChartComponent.datasets[0].data[3] = lofaYearly;

  LofaChartComponent.datasets[0].data[4] = lofaMales;

  LofaChartComponent.datasets[0].data[5] = lofaFemales;


  return (
    <React.Fragment>
      <Doughnut data={LofaChartComponent} />
    </React.Fragment>
  );
};

export default LofaDoughnutChart;
