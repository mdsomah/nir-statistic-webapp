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
export const MontserradoChartComponent = {
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

const MontserradoDoughtnutChart = () => {
  // Fetching Data from backend
  const [doughtnutData, showDoughtnutData] = useState([]);
  const [doughtnutProject, showDoughtnutProject] = useState([]);

  // Fetch Data
  useEffect(() => {
    axios.get("http://localhost:5000/datas").then((chartData) => {
      showDoughtnutData(chartData.data);
    });
  }, []);

  // Fetch Project
  useEffect(() => {
    axios.get("http://localhost:5000/projects").then((chartData) => {
      showDoughtnutProject(chartData.data);
    });
  }, []);

  // Pushing data values to the chart array
  // Montserrado County Daily
  const montserradoDaily = doughtnutData
    .filter((montserrado) => montserrado.county === "Montserrado")
    .map((montserrado) => montserrado.totalDatas)
    .reduce((montserrado, montserradoDaily) => (montserrado += montserradoDaily), null) +
    doughtnutProject
      .filter((montserrado) => montserrado.county === "Montserrado")
      .map((montserrado) => montserrado.totalDatas)
      .reduce((montserrado, montserradoDaily) => (montserrado += montserradoDaily), null)
    ;

  // Montserrado County Weekly
  const montserradoWeekly = doughtnutData
    .filter((montserrado) => montserrado.county === "Montserrado")
    .map((montserrado) => montserrado.totalDatas)
    .reduce((montserrado, montserradoWeekly) => (montserrado += montserradoWeekly), null) +
    doughtnutProject
      .filter((montserrado) => montserrado.county === "Montserrado")
      .map((montserrado) => montserrado.totalDatas)
      .reduce((montserrado, montserradoWeekly) => (montserrado += montserradoWeekly), null)
    ;

  // Montserrado County Monthly
  const montserradoMonthly = doughtnutData
    .filter((montserrado) => montserrado.county === "Montserrado")
    .map((montserrado) => montserrado.totalDatas)
    .reduce((montserrado, montserradoMonthly) => (montserrado += montserradoMonthly), null) +
    doughtnutProject
      .filter((montserrado) => montserrado.county === "Montserrado")
      .map((montserrado) => montserrado.totalDatas)
      .reduce((montserrado, montserradoMonthly) => (montserrado += montserradoMonthly), null)
    ;

  // Montserrado County Yearly
  const montserradoYearly = doughtnutData
    .filter((montserrado) => montserrado.county === "Montserrado")
    .map((montserrado) => montserrado.totalDatas)
    .reduce((montserrado, montserradoYearly) => (montserrado += montserradoYearly), null) +
    doughtnutProject
      .filter((montserrado) => montserrado.county === "Montserrado")
      .map((montserrado) => montserrado.totalDatas)
      .reduce((montserrado, montserradoYearly) => (montserrado += montserradoYearly), null)
    ;

  // Montserrado County Males
  const montserradoMales = doughtnutData
    .filter((montserrado) => montserrado.county === "Montserrado")
    .map((montserrado) => montserrado.totalMales)
    .reduce((montserrado, montserradoMales) => (montserrado += montserradoMales), null) +
    doughtnutProject
      .filter((montserrado) => montserrado.county === "Montserrado")
      .map((montserrado) => montserrado.totalMales)
      .reduce((montserrado, montserradoMales) => (montserrado += montserradoMales), null)
    ;

  // Montserrado County Females
  const montserradoFemales = doughtnutData
    .filter((montserrado) => montserrado.county === "Montserrado")
    .map((montserrado) => montserrado.totalFemales)
    .reduce((montserrado, montserradoFemales) => (montserrado += montserradoFemales), null) +
    doughtnutProject
      .filter((montserrado) => montserrado.county === "Montserrado")
      .map((montserrado) => montserrado.totalFemales)
      .reduce((montserrado, montserradoFemales) => (montserrado += montserradoFemales), null)
    ;
  // End of Bomi County

  MontserradoChartComponent.datasets[0].data[0] = montserradoDaily;

  MontserradoChartComponent.datasets[0].data[1] = montserradoWeekly;

  MontserradoChartComponent.datasets[0].data[2] = montserradoMonthly;

  MontserradoChartComponent.datasets[0].data[3] = montserradoYearly;

  MontserradoChartComponent.datasets[0].data[4] = montserradoMales;

  MontserradoChartComponent.datasets[0].data[5] = montserradoFemales;

  console.log(MontserradoChartComponent);

  return (
    <React.Fragment>
      <Doughnut data={MontserradoChartComponent} />
    </React.Fragment>
  );
};

export default MontserradoDoughtnutChart;
