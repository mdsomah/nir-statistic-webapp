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
export const GrandKruChartComponent = {
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

const GrandKruDoughnutChart = () => {
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
  // Grand Kru County Daily
  const kruDaily = doughnutData
    .filter((kru) => kru.county === "Grand Kru")
    .map((kru) => kru.totalDatas)
    .reduce((kru, kruDaily) => (kru += kruDaily), null) +
    doughnutProject
      .filter((kru) => kru.county === "Grand Kru")
      .map((kru) => kru.totalDatas)
      .reduce((kru, kruDaily) => (kru += kruDaily), null)
    ;

  // Grand Kru County Weekly
  const kruWeekly = doughnutData
    .filter((kru) => kru.county === "Grand Kru")
    .map((kru) => kru.totalDatas)
    .reduce((kru, kruWeekly) => (kru += kruWeekly), null) +
    doughnutProject
      .filter((kru) => kru.county === "Grand Kru")
      .map((kru) => kru.totalDatas)
      .reduce((kru, kruWeekly) => (kru += kruWeekly), null)
    ;

  // Grand Kru County Monthly
  const kruMonthly = doughnutData
    .filter((kru) => kru.county === "Grand Kru")
    .map((kru) => kru.totalDatas)
    .reduce((kru, kruMonthly) => (kru += kruMonthly), null) +
    doughnutProject
      .filter((kru) => kru.county === "Grand Kru")
      .map((kru) => kru.totalDatas)
      .reduce((kru, kruMonthly) => (kru += kruMonthly), null)
    ;

  // Grand Kru County Yearly
  const kruYearly = doughnutData
    .filter((kru) => kru.county === "Grand Kru")
    .map((kru) => kru.totalDatas)
    .reduce((kru, kruYearly) => (kru += kruYearly), null) +
    doughnutProject
      .filter((kru) => kru.county === "Grand Kru")
      .map((kru) => kru.totalDatas)
      .reduce((kru, kruYearly) => (kru += kruYearly), null)
    ;

  // Grand Kru County Males
  const kruMales = doughnutData
    .filter((kru) => kru.county === "Grand Kru")
    .map((kru) => kru.totalMales)
    .reduce((kru, kruMales) => (kru += kruMales), null) +
    doughnutProject
      .filter((kru) => kru.county === "Grand Kru")
      .map((kru) => kru.totalMales)
      .reduce((kru, kruMales) => (kru += kruMales), null)
    ;

  // Grand Kru County Females
  const kruFemales = doughnutData
    .filter((kru) => kru.county === "Grand Kru")
    .map((kru) => kru.totalFemales)
    .reduce((kru, kruFemales) => (kru += kruFemales), null) +
    doughnutProject
      .filter((kru) => kru.county === "Grand Kru")
      .map((kru) => kru.totalFemales)
      .reduce((kru, kruFemales) => (kru += kruFemales), null)
    ;
  // End of Grand Kru County


  GrandKruChartComponent.datasets[0].data[0] = kruDaily;

  GrandKruChartComponent.datasets[0].data[1] = kruWeekly;

  GrandKruChartComponent.datasets[0].data[2] = kruMonthly;

  GrandKruChartComponent.datasets[0].data[3] = kruYearly;

  GrandKruChartComponent.datasets[0].data[4] = kruMales;

  GrandKruChartComponent.datasets[0].data[5] = kruFemales;

  console.log(GrandKruChartComponent);


  return (
    <React.Fragment>
      <Doughnut data={GrandKruChartComponent} />
    </React.Fragment>
  );
};

export default GrandKruDoughnutChart;
