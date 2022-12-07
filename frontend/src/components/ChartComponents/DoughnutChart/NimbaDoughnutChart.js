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
export const NimbaChartComponent = {
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

const NimbaDoughnutChart = () => {
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
    axios.get("http://localhost:5000/datas").then((chartData) => {
      showDoughnutProject(chartData.data);
    });
  }, []);

  // Pushing data values to the chart array
  // Nimba County Daily
  const nimbaDaily = doughnutData
    .filter((nimba) => nimba.county === "Nimba")
    .map((nimba) => nimba.totalDatas)
    .reduce((nimba, nimbaDaily) => (nimba += nimbaDaily), null) +
    doughnutProject
      .filter((nimba) => nimba.county === "Nimba")
      .map((nimba) => nimba.totalDatas)
      .reduce((nimba, nimbaDaily) => (nimba += nimbaDaily), null)
    ;

  // Nimba County Weekly
  const nimbaWeekly = doughnutData
    .filter((nimba) => nimba.county === "Nimba")
    .map((nimba) => nimba.totalDatas)
    .reduce((nimba, nimbaWeekly) => (nimba += nimbaWeekly), null) +
    doughnutProject
      .filter((nimba) => nimba.county === "Nimba")
      .map((nimba) => nimba.totalDatas)
      .reduce((nimba, nimbaWeekly) => (nimba += nimbaWeekly), null)
    ;

  // Nimba County Monthly
  const nimbaMonthly = doughnutData
    .filter((nimba) => nimba.county === "Nimba")
    .map((nimba) => nimba.totalDatas)
    .reduce((nimba, nimbaMonthly) => (nimba += nimbaMonthly), null) +
    doughnutProject
      .filter((nimba) => nimba.county === "Nimba")
      .map((nimba) => nimba.totalDatas)
      .reduce((nimba, nimbaMonthly) => (nimba += nimbaMonthly), null)
    ;

  // Nimba County Yearly
  const nimbaYearly = doughnutData
    .filter((nimba) => nimba.county === "Nimba")
    .map((nimba) => nimba.totalDatas)
    .reduce((nimba, nimbaYearly) => (nimba += nimbaYearly), null) +
    doughnutProject
      .filter((nimba) => nimba.county === "Nimba")
      .map((nimba) => nimba.totalDatas)
      .reduce((nimba, nimbaYearly) => (nimba += nimbaYearly), null)
    ;

  // Nimba County Males
  const nimbaMales = doughnutData
    .filter((nimba) => nimba.county === "Nimba")
    .map((nimba) => nimba.totalMales)
    .reduce((nimba, nimbaMales) => (nimba += nimbaMales), null) +
    doughnutProject
      .filter((nimba) => nimba.county === "Nimba")
      .map((nimba) => nimba.totalMales)
      .reduce((nimba, nimbaMales) => (nimba += nimbaMales), null)
    ;

  // Nimba County Females
  const nimbaFemales = doughnutData
    .filter((nimba) => nimba.county === "Nimba")
    .map((nimba) => nimba.totalFemales)
    .reduce((nimba, nimbaFemales) => (nimba += nimbaFemales), null) +
    doughnutProject
      .filter((nimba) => nimba.county === "Nimba")
      .map((nimba) => nimba.totalFemales)
      .reduce((nimba, nimbaFemales) => (nimba += nimbaFemales), null)
    ;
  // End of Nimba County

  NimbaChartComponent.datasets[0].data[0] = nimbaDaily;

  NimbaChartComponent.datasets[0].data[1] = nimbaWeekly;

  NimbaChartComponent.datasets[0].data[2] = nimbaMonthly;

  NimbaChartComponent.datasets[0].data[3] = nimbaYearly;

  NimbaChartComponent.datasets[0].data[4] = nimbaMales;

  NimbaChartComponent.datasets[0].data[5] = nimbaFemales;


  return (
    <React.Fragment>
      <Doughnut data={NimbaChartComponent} />
    </React.Fragment>
  );
};

export default NimbaDoughnutChart;
