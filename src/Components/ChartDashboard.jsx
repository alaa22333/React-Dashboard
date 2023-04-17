import {
  Chart as ChartJs,
  BarElement,PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,LineElement,ArcElement, LineController,
  BarController, Filler,
  Legend} from "chart.js";
import { Bar, Line ,Pie ,Doughnut} from "react-chartjs-2";
import React from "react";
import { dataBar, optionsBar, barChartData } from "../utilis/dashboardData";

ChartJs.register(BarElement, CategoryScale,LineElement, LinearScale, Tooltip, Legend,PointElement,ArcElement, LineController, Filler,
  BarController);

const ChartDashboard = () => {
  return (
    <div className="flex w-full mt-14  flex-wrap lg:ml-72">
    </div>
  );
};

export default ChartDashboard;
