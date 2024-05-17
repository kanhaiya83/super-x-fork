import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  TimeScale,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { isAfter, isSameDay, parse, subDays, subMonths } from "date-fns";
import "chartjs-adapter-date-fns";

ChartJS.register(
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins:{
    legend: {
      display: false,
    }
  },
  scales: {
    xAxes: {
      type: "time",
      time: {
        tooltipFormat: "dd T",
        unit: "day",
      },
      title: {
        display: true,
        text: "Date",
      },
    },
  },
};

const AdminUsageChart = ({ data }) => {
  const sortedLabels = Object.keys(data).sort((a, b) => {
    return (
      parse(a, "MM-dd-yyyy", new Date()).getTime() -
      parse(b, "MM-dd-yyyy", new Date()).getTime()
    );
  });
  const [currentLabels, setDates] = useState(sortedLabels);
  const handleFilterChange = (e) => {
    const val = e.target.value;
    if (val === "all") return setDates(sortedLabels);
    if (val.includes("m")) {
      const filterDate = subMonths(new Date(), parseInt(val.substr(0, 1)));
      const filterData = sortedLabels.filter((str) => {
        const date = parse(str, "MM-dd-yyyy", new Date());
        return isAfter(date, filterDate);
      });
      setDates(filterData);
    }
    if (val.includes("d")) {
      const filterDate = subDays(new Date(), parseInt(val.substr(0, 1)));
      const filterData = sortedLabels.filter((str) => {
        const date = parse(str, "MM-dd-yyyy", new Date());
        return isAfter(date, filterDate);
      });
      setDates(filterData);
    }
  };

  const chartData = {
    // labels: sortedLabels.map((str) => parse(str, "MM-dd-yyyy", new Date())),
    datasets: [
      {
        label: "Requests ",
        data: currentLabels.map((l) => ({
          x: parse(l, "MM-dd-yyyy", new Date()),
          y: data[l],
        })),
        backgroundColor: "rgb(114, 20, 255,0.3)",
        borderColor: "rgb(114, 20, 255)",
        borderRadius: 4,
      },
    ],
  };
  return (
    <div>
      <select
        onChange={handleFilterChange}
        className="bg-transparent border-2 border-slate-500 py-2 px-4 rounded-md"
      >
        {/* <option className="bg-slate-100 text-slate-700" value="1d">last Day</option> */}
        <option className="bg-slate-100 text-slate-700" value="7d">
          last Week
        </option>
        <option className="bg-slate-100 text-slate-700" value="1m">
          Last Month
        </option>
        <option className="bg-slate-100 text-slate-700" value="3m">
          Last Three Months
        </option>
        <option className="bg-slate-100 text-slate-700" value="all" selected>
          All time
        </option>
      </select>
      <Line options={options} data={chartData} />
    </div>
  );
};

export default AdminUsageChart;
