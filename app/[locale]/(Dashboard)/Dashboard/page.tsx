"use client";
import { useTranslations } from "next-intl";
import {
  Bar,
  Doughnut,
  Pie,
  Line,
  Bubble,
  PolarArea,
  Scatter,
  Radar,
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,
);
const AdminDashboard = () => {
  const t = useTranslations("adminStatistics");
  const usersData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Users",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const productsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Products Sold",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
      },
    ],
  };
  const ordersData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Orders",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">{t("title")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <Bar data={usersData} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <Doughnut data={productsData} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <Pie data={ordersData} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <Line data={ordersData} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <Bubble data={ordersData} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <PolarArea data={ordersData} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <Scatter data={ordersData} />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <Radar data={ordersData} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
