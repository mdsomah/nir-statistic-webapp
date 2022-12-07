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
export const SinoeChartComponent = {
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

const SinoeDoughnutChart = () => {
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
  // Sinoe County Daily
  const sinoeDaily = doughnutData
    .filter((sinoe) => sinoe.county === "Sinoe")
    .map((sinoe) => sinoe.totalDatas)
    .reduce((sinoe, sinoeDaily) => (sinoe += sinoeDaily), null) +
    doughnutProject
      .filter((sinoe) => sinoe.county === "Sinoe")
      .map((sinoe) => sinoe.totalDatas)
      .reduce((sinoe, sinoeDaily) => (sinoe += sinoeDaily), null)
    ;

  // Sinoe County Weekly
  const sinoeWeekly = doughnutData
    .filter((sinoe) => sinoe.county === "Sinoe")
    .map((sinoe) => sinoe.totalDatas)
    .reduce((sinoe, sinoeWeekly) => (sinoe += sinoeWeekly), null) +
    doughnutProject
      .filter((sinoe) => sinoe.county === "Sinoe")
      .map((sinoe) => sinoe.totalDatas)
      .reduce((sinoe, sinoeWeekly) => (sinoe += sinoeWeekly), null)
    ;

  // Sinoe County Monthly
  const sinoeMonthly = doughnutData
    .filter((sinoe) => sinoe.county === "Sinoe")
    .map((sinoe) => sinoe.totalDatas)
    .reduce((sinoe, sinoeMonthly) => (sinoe += sinoeMonthly), null) +
    doughnutProject
      .filter((sinoe) => sinoe.county === "Sinoe")
      .map((sinoe) => sinoe.totalDatas)
      .reduce((sinoe, sinoeMonthly) => (sinoe += sinoeMonthly), null)
    ;

  // Sinoe County Yearly
  const sinoeYearly = doughnutData
    .filter((sinoe) => sinoe.county === "Sinoe")
    .map((sinoe) => sinoe.totalDatas)
    .reduce((sinoe, sinoeYearly) => (sinoe += sinoeYearly), null) +
    doughnutProject
      .filter((sinoe) => sinoe.county === "Sinoe")
      .map((sinoe) => sinoe.totalDatas)
      .reduce((sinoe, sinoeYearly) => (sinoe += sinoeYearly), null)
    ;

  // Sinoe County Males
  const sinoeMales = doughnutData
    .filter((sinoe) => sinoe.county === "Sinoe")
    .map((sinoe) => sinoe.totalMales)
    .reduce((sinoe, sinoeMales) => (sinoe += sinoeMales), null) +
    doughnutProject
      .filter((sinoe) => sinoe.county === "Sinoe")
      .map((sinoe) => sinoe.totalMales)
      .reduce((sinoe, sinoeMales) => (sinoe += sinoeMales), null)
    ;

  // Sinoe County Females
  const sinoeFemales = doughnutData
    .filter((sinoe) => sinoe.county === "Sinoe")
    .map((sinoe) => sinoe.totalFemales)
    .reduce((sinoe, sinoeFemales) => (sinoe += sinoeFemales), null) +
    doughnutProject
      .filter((sinoe) => sinoe.county === "Sinoe")
      .map((sinoe) => sinoe.totalFemales)
      .reduce((sinoe, sinoeFemales) => (sinoe += sinoeFemales), null)
    ;
  // End of Sinoe County


  SinoeChartComponent.datasets[0].data[0] = sinoeDaily;

  SinoeChartComponent.datasets[0].data[1] = sinoeWeekly;

  SinoeChartComponent.datasets[0].data[2] = sinoeMonthly;

  SinoeChartComponent.datasets[0].data[3] = sinoeYearly;

  SinoeChartComponent.datasets[0].data[4] = sinoeMales;

  SinoeChartComponent.datasets[0].data[5] = sinoeFemales;


  return (
    <React.Fragment>
      <Doughnut data={SinoeChartComponent} />
    </React.Fragment>
  );
};

export default SinoeDoughnutChart;
