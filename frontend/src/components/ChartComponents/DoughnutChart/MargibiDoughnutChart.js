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
export const MargibiChartComponent = {
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

const MargibiDoughnutChart = () => {
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
  // Margibi County Daily
  const margibiDaily = doughnutData
    .filter((margibi) => margibi.county === "Margibi")
    .map((margibi) => margibi.totalDatas)
    .reduce((margibi, margibiDaily) => (margibi += margibiDaily), null) +
    doughnutProject
      .filter((margibi) => margibi.county === "Margibi")
      .map((margibi) => margibi.totalDatas)
      .reduce((margibi, margibiDaily) => (margibi += margibiDaily), null)
    ;

  // Margibi County Weekly
  const margibiWeekly = doughnutData
    .filter((margibi) => margibi.county === "Margibi")
    .map((margibi) => margibi.totalDatas)
    .reduce((margibi, margibiWeekly) => (margibi += margibiWeekly), null) +
    doughnutProject
      .filter((margibi) => margibi.county === "Margibi")
      .map((margibi) => margibi.totalDatas)
      .reduce((margibi, margibiWeekly) => (margibi += margibiWeekly), null)
    ;

  // Margibi County Monthly
  const margibiMonthly = doughnutData
    .filter((margibi) => margibi.county === "Margibi")
    .map((margibi) => margibi.totalDatas)
    .reduce((margibi, margibiMonthly) => (margibi += margibiMonthly), null) +
    doughnutProject
      .filter((margibi) => margibi.county === "Margibi")
      .map((margibi) => margibi.totalDatas)
      .reduce((margibi, margibiMonthly) => (margibi += margibiMonthly), null)
    ;

  // Margibi County Yearly
  const margibiYearly = doughnutData
    .filter((margibi) => margibi.county === "Margibi")
    .map((margibi) => margibi.totalDatas)
    .reduce((margibi, margibiYearly) => (margibi += margibiYearly), null) +
    doughnutProject
      .filter((margibi) => margibi.county === "Margibi")
      .map((margibi) => margibi.totalDatas)
      .reduce((margibi, margibiYearly) => (margibi += margibiYearly), null)
    ;

  // Margibi County Males
  const margibiMales = doughnutData
    .filter((margibi) => margibi.county === "Margibi")
    .map((margibi) => margibi.totalMales)
    .reduce((margibi, margibiMales) => (margibi += margibiMales), null) +
    doughnutProject
      .filter((margibi) => margibi.county === "Margibi")
      .map((margibi) => margibi.totalMales)
      .reduce((margibi, margibiMales) => (margibi += margibiMales), null)
    ;

  // Margibi County Females
  const margibiFemales = doughnutData
    .filter((margibi) => margibi.county === "Margibi")
    .map((margibi) => margibi.totalFemales)
    .reduce((margibi, margibiFemales) => (margibi += margibiFemales), null) +
    doughnutProject
      .filter((margibi) => margibi.county === "Margibi")
      .map((margibi) => margibi.totalFemales)
      .reduce((margibi, margibiFemales) => (margibi += margibiFemales), null)
    ;
  // End of Margibi County


  MargibiChartComponent.datasets[0].data[0] = margibiDaily;

  MargibiChartComponent.datasets[0].data[1] = margibiWeekly;

  MargibiChartComponent.datasets[0].data[2] = margibiMonthly;

  MargibiChartComponent.datasets[0].data[3] = margibiYearly;

  MargibiChartComponent.datasets[0].data[4] = margibiMales;

  MargibiChartComponent.datasets[0].data[5] = margibiFemales;


  return (
    <React.Fragment>
      <Doughnut data={MargibiChartComponent} />
    </React.Fragment>
  );
};

export default MargibiDoughnutChart;
