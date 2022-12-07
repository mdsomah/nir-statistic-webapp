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
export const RivercessChartComponent = {
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

const RivercessDoughnutChart = () => {
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
  // Rivercess County Daily
  const rivercessDaily = doughnutData
    .filter((rivercess) => rivercess.county === "Rivercess")
    .map((rivercess) => rivercess.totalDatas)
    .reduce((rivercess, rivercessDaily) => (rivercess += rivercessDaily), null) +
    doughnutProject
      .filter((rivercess) => rivercess.county === "Rivercess")
      .map((rivercess) => rivercess.totalDatas)
      .reduce((rivercess, rivercessDaily) => (rivercess += rivercessDaily), null)
    ;

  // Rivercess County Weekly
  const rivercessWeekly = doughnutData
    .filter((rivercess) => rivercess.county === "Rivercess")
    .map((rivercess) => rivercess.totalDatas)
    .reduce((rivercess, rivercessWeekly) => (rivercess += rivercessWeekly), null) +
    doughnutProject
      .filter((rivercess) => rivercess.county === "Rivercess")
      .map((rivercess) => rivercess.totalDatas)
      .reduce((rivercess, rivercessWeekly) => (rivercess += rivercessWeekly), null)
    ;

  // Rivercess County Monthly
  const rivercessMonthly = doughnutData
    .filter((rivercess) => rivercess.county === "Rivercess")
    .map((rivercess) => rivercess.totalDatas)
    .reduce((rivercess, rivercessMonthly) => (rivercess += rivercessMonthly), null) +
    doughnutProject
      .filter((rivercess) => rivercess.county === "Rivercess")
      .map((rivercess) => rivercess.totalDatas)
      .reduce((rivercess, rivercessMonthly) => (rivercess += rivercessMonthly), null)
    ;

  // Rivercess County Yearly
  const rivercessYearly = doughnutData
    .filter((rivercess) => rivercess.county === "Rivercess")
    .map((rivercess) => rivercess.totalDatas)
    .reduce((rivercess, rivercessYearly) => (rivercess += rivercessYearly), null) +
    doughnutProject
      .filter((rivercess) => rivercess.county === "Rivercess")
      .map((rivercess) => rivercess.totalDatas)
      .reduce((rivercess, rivercessYearly) => (rivercess += rivercessYearly), null);

  // Rivercess County Males
  const rivercessMales = doughnutData
    .filter((rivercess) => rivercess.county === "Rivercess")
    .map((rivercess) => rivercess.totalMales)
    .reduce((rivercess, rivercessMales) => (rivercess += rivercessMales), null) +
    doughnutProject
      .filter((rivercess) => rivercess.county === "Rivercess")
      .map((rivercess) => rivercess.totalMales)
      .reduce((rivercess, rivercessMales) => (rivercess += rivercessMales), null)
    ;

  // Rivercess County Females
  const rivercessFemales = doughnutData
    .filter((rivercess) => rivercess.county === "Rivercess")
    .map((rivercess) => rivercess.totalFemales)
    .reduce((rivercess, rivercessFemales) => (rivercess += rivercessFemales), null) +
    doughnutProject
      .filter((rivercess) => rivercess.county === "Rivercess")
      .map((rivercess) => rivercess.totalFemales)
      .reduce((rivercess, rivercessFemales) => (rivercess += rivercessFemales), null)
    ;
  // End of Rivercess County

  RivercessChartComponent.datasets[0].data[0] = rivercessDaily;

  RivercessChartComponent.datasets[0].data[1] = rivercessWeekly;

  RivercessChartComponent.datasets[0].data[2] = rivercessMonthly;

  RivercessChartComponent.datasets[0].data[3] = rivercessYearly;

  RivercessChartComponent.datasets[0].data[4] = rivercessMales;

  RivercessChartComponent.datasets[0].data[5] = rivercessFemales;


  return (
    <React.Fragment>
      <Doughnut data={RivercessChartComponent} />
    </React.Fragment>
  );
};

export default RivercessDoughnutChart;
