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
export const MarylandChartComponent = {
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

const MarylandDoughnutChart = () => {
  // Fetching Data from backend
  const [doughnutData, showDoughnutData] = useState([]);
  const [doughnutProject, showDoughnutProject] = useState([]);

  // Fetch Data
  useEffect(() => {
    axios.get("http://localhost:5000/datas").then((chartData) => {
      showDoughnutData(chartData.data);
    });
  }, []);

  // Fetch Data
  useEffect(() => {
    axios.get("http://localhost:5000/projects").then((chartData) => {
      showDoughnutProject(chartData.data);
    });
  }, []);

  // Pushing data values to the chart array
  // Maryland County Daily
  const marylandDaily = doughnutData
    .filter((maryland) => maryland.county === "Maryland")
    .map((maryland) => maryland.totalDatas)
    .reduce((maryland, marylandDaily) => (maryland += marylandDaily), null) +
    doughnutProject
      .filter((maryland) => maryland.county === "Maryland")
      .map((maryland) => maryland.totalDatas)
      .reduce((maryland, marylandDaily) => (maryland += marylandDaily), null)
    ;

  // Maryland County Weekly
  const marylandWeekly = doughnutData
    .filter((maryland) => maryland.county === "Maryland")
    .map((maryland) => maryland.totalDatas)
    .reduce((maryland, marylandWeekly) => (maryland += marylandWeekly), null) +
    doughnutProject
      .filter((maryland) => maryland.county === "Maryland")
      .map((maryland) => maryland.totalDatas)
      .reduce((maryland, marylandWeekly) => (maryland += marylandWeekly), null)
    ;

  // Maryland County Monthly
  const marylandMonthly = doughnutData
    .filter((maryland) => maryland.county === "Maryland")
    .map((maryland) => maryland.totalDatas)
    .reduce((maryland, marylandMonthly) => (maryland += marylandMonthly), null) +
    doughnutProject
      .filter((maryland) => maryland.county === "Maryland")
      .map((maryland) => maryland.totalDatas)
      .reduce((maryland, marylandMonthly) => (maryland += marylandMonthly), null)
    ;

  // Maryland County Yearly
  const marylandYearly = doughnutData
    .filter((maryland) => maryland.county === "Maryland")
    .map((maryland) => maryland.totalDatas)
    .reduce((maryland, marylandYearly) => (maryland += marylandYearly), null) +
    doughnutProject
      .filter((maryland) => maryland.county === "Maryland")
      .map((maryland) => maryland.totalDatas)
      .reduce((maryland, marylandYearly) => (maryland += marylandYearly), null)
    ;

  // Maryland County Males
  const marylandMales = doughnutData
    .filter((maryland) => maryland.county === "Maryland")
    .map((maryland) => maryland.totalMales)
    .reduce((maryland, marylandMales) => (maryland += marylandMales), null) +
    doughnutProject
      .filter((maryland) => maryland.county === "Maryland")
      .map((maryland) => maryland.totalMales)
      .reduce((maryland, marylandMales) => (maryland += marylandMales), null)
    ;

  // Maryland County Females
  const marylandFemales = doughnutData
    .filter((maryland) => maryland.county === "Maryland")
    .map((maryland) => maryland.totalFemales)
    .reduce((maryland, marylandFemales) => (maryland += marylandFemales), null) +
    doughnutProject
      .filter((maryland) => maryland.county === "Maryland")
      .map((maryland) => maryland.totalFemales)
      .reduce((maryland, marylandFemales) => (maryland += marylandFemales), null)
    ;
  // End of Maryland County


  MarylandChartComponent.datasets[0].data[0] = marylandDaily;

  MarylandChartComponent.datasets[0].data[1] = marylandWeekly;

  MarylandChartComponent.datasets[0].data[2] = marylandMonthly;

  MarylandChartComponent.datasets[0].data[3] = marylandYearly;

  MarylandChartComponent.datasets[0].data[4] = marylandMales;

  MarylandChartComponent.datasets[0].data[5] = marylandFemales;


  return (
    <React.Fragment>
      <Doughnut data={MarylandChartComponent} />
    </React.Fragment>
  );
};

export default MarylandDoughnutChart;
