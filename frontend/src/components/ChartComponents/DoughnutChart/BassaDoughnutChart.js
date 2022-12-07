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
import { Doughnut } from "react-chartjs-2";

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
export const BassaChartComponent = {
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

const BassaDoughnutChart = () => {
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
  // Bassa County Daily
  const bassaDaily = doughnutData
    .filter((bassa) => bassa.county === "Grand Bassa")
    .map((bassa) => bassa.totalDatas)
    .reduce((bassa, bassaDaily) => (bassa += bassaDaily), null) +
    doughnutProject
      .filter((bassa) => bassa.county === "Grand Bassa")
      .map((bassa) => bassa.totalDatas)
      .reduce((bassa, bassaDaily) => (bassa += bassaDaily), null)
    ;

  // Bassa County Weekly
  const bassaWeekly = doughnutData
    .filter((bassa) => bassa.county === "Grand Bassa")
    .map((bassa) => bassa.totalDatas)
    .reduce((bassa, bassaWeekly) => (bassa += bassaWeekly), null) +
    doughnutProject
      .filter((bassa) => bassa.county === "Grand Bassa")
      .map((bassa) => bassa.totalDatas)
      .reduce((bassa, bassaWeekly) => (bassa += bassaWeekly), null)
    ;

  // Bassa County Monthly
  const bassaMonthly = doughnutData
    .filter((bassa) => bassa.county === "Grand Bassa")
    .map((bassa) => bassa.totalDatas)
    .reduce((bassa, bassaMonthly) => (bassa += bassaMonthly), null) +
    doughnutProject
      .filter((bassa) => bassa.county === "Grand Bassa")
      .map((bassa) => bassa.totalDatas)
      .reduce((bassa, bassaMonthly) => (bassa += bassaMonthly), null)
    ;

  // Bassa County Yearly
  const bassaYearly = doughnutData
    .filter((bassa) => bassa.county === "Grand Bassa")
    .map((bassa) => bassa.totalDatas)
    .reduce((bassa, bassaYearly) => (bassa += bassaYearly), null) +
    doughnutProject
      .filter((bassa) => bassa.county === "Grand Bassa")
      .map((bassa) => bassa.totalDatas)
      .reduce((bassa, bassaYearly) => (bassa += bassaYearly), null)
    ;

  // Bassa County Males
  const bassaMales = doughnutData
    .filter((bassa) => bassa.county === "Grand Bassa")
    .map((bassa) => bassa.totalMales)
    .reduce((bassa, bassaMales) => (bassa += bassaMales), null) +
    doughnutProject
      .filter((bassa) => bassa.county === "Grand Bassa")
      .map((bassa) => bassa.totalMales)
      .reduce((bassa, bassaMales) => (bassa += bassaMales), null)
    ;

  // Bassa County Females
  const bassaFemales = doughnutData
    .filter((bassa) => bassa.county === "Grand Bassa")
    .map((bassa) => bassa.totalFemales)
    .reduce((bassa, bassaFemales) => (bassa += bassaFemales), null) +
    doughnutProject
      .filter((bassa) => bassa.county === "Grand Bassa")
      .map((bassa) => bassa.totalFemales)
      .reduce((bassa, bassaFemales) => (bassa += bassaFemales), null)
    ;
  // End of Bassa County


  BassaChartComponent.datasets[0].data[0] = bassaDaily;

  BassaChartComponent.datasets[0].data[1] = bassaWeekly;

  BassaChartComponent.datasets[0].data[2] = bassaMonthly;

  BassaChartComponent.datasets[0].data[3] = bassaYearly;

  BassaChartComponent.datasets[0].data[4] = bassaMales;

  BassaChartComponent.datasets[0].data[5] = bassaFemales;


  return (
    <React.Fragment>
      <Doughnut data={BassaChartComponent} />
    </React.Fragment>
  );
};

export default BassaDoughnutChart;
