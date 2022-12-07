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
export const CapeMountChartComponent = {
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

const CapeMountDoughnutChart = () => {
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
  // Cape Mount County Daily
  const capeMountDaily = doughnutData
    .filter((capeMount) => capeMount.county === "Grand Cape Mount")
    .map((capeMount) => capeMount.totalDatas)
    .reduce((capeMount, capeMountDaily) => (capeMount += capeMountDaily), null) +
    doughnutProject
      .filter((capeMount) => capeMount.county === "Grand Cape Mount")
      .map((capeMount) => capeMount.totalDatas)
      .reduce((capeMount, capeMountDaily) => (capeMount += capeMountDaily), null)
    ;

  // Cape Mount County Weekly
  const capeMountWeekly = doughnutData
    .filter((capeMount) => capeMount.county === "Grand Cape Mount")
    .map((capeMount) => capeMount.totalDatas)
    .reduce((capeMount, capeMountWeekly) => (capeMount += capeMountWeekly), null) +
    doughnutProject
      .filter((capeMount) => capeMount.county === "Grand Cape Mount")
      .map((capeMount) => capeMount.totalDatas)
      .reduce((capeMount, capeMountWeekly) => (capeMount += capeMountWeekly), null)
    ;

  // Cape Mount County Monthly
  const capeMountMonthly = doughnutData
    .filter((capeMount) => capeMount.county === "Grand Cape Mount")
    .map((capeMount) => capeMount.totalDatas)
    .reduce((capeMount, capeMountMonthly) => (capeMount += capeMountMonthly), null) +
    doughnutProject
      .filter((capeMount) => capeMount.county === "Grand Cape Mount")
      .map((capeMount) => capeMount.totalDatas)
      .reduce((capeMount, capeMountMonthly) => (capeMount += capeMountMonthly), null)
    ;

  // Cape Mount County Yearly
  const capeMountYearly = doughnutData
    .filter((capeMount) => capeMount.county === "Grand Cape Mount")
    .map((capeMount) => capeMount.totalDatas)
    .reduce((capeMount, capeMountYearly) => (capeMount += capeMountYearly), null) +
    doughnutProject
      .filter((capeMount) => capeMount.county === "Grand Cape Mount")
      .map((capeMount) => capeMount.totalDatas)
      .reduce((capeMount, capeMountYearly) => (capeMount += capeMountYearly), null)
    ;

  // Cape Mount County Males
  const capeMountMales = doughnutData
    .filter((capeMount) => capeMount.county === "Grand Cape Mount")
    .map((capeMount) => capeMount.totalMales)
    .reduce((capeMount, capeMountMales) => (capeMount += capeMountMales), null) +
    doughnutProject
      .filter((capeMount) => capeMount.county === "Grand Cape Mount")
      .map((capeMount) => capeMount.totalMales)
      .reduce((capeMount, capeMountMales) => (capeMount += capeMountMales), null)
    ;

  // Cape Mount County Females
  const capeMountFemales = doughnutData
    .filter((capeMount) => capeMount.county === "Grand Cape Mount")
    .map((capeMount) => capeMount.totalFemales)
    .reduce((capeMount, capeMountFemales) => (capeMount += capeMountFemales), null) +
    doughnutProject
      .filter((capeMount) => capeMount.county === "Grand Cape Mount")
      .map((capeMount) => capeMount.totalFemales)
      .reduce((capeMount, capeMountFemales) => (capeMount += capeMountFemales), null)
    ;
  // End of Cape Mount County


  CapeMountChartComponent.datasets[0].data[0] = capeMountDaily;

  CapeMountChartComponent.datasets[0].data[1] = capeMountWeekly;

  CapeMountChartComponent.datasets[0].data[2] = capeMountMonthly;

  CapeMountChartComponent.datasets[0].data[3] = capeMountYearly;

  CapeMountChartComponent.datasets[0].data[4] = capeMountMales;

  CapeMountChartComponent.datasets[0].data[5] = capeMountFemales;

  return (
    <React.Fragment>
      <Doughnut data={CapeMountChartComponent} />
    </React.Fragment>
  );
};

export default CapeMountDoughnutChart;
