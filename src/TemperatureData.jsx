import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const apiKey = import.meta.env.VITE_API_WEATHER_API_KEY;

export default function WeatherChart({ city }) {
  const [data, setData] = useState({ day: [], night: [], labels: [] });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast`,
          {
            params: {
              q: city,
              units: "metric",
              appid: apiKey,
            },
          }
        );

        const dayTemperatures = {};
        const nightTemperatures = {};
        const labels = [];

        response.data.list.forEach((item) => {
          const date = moment.unix(item.dt).format("YYYY-MM-DD");
          const hour = moment.unix(item.dt).hour();
          const temp = item.main.temp;

          if (!labels.includes(date)) {
            labels.push(date);
          }

          if (hour >= 6 && hour < 18) {
            dayTemperatures[date] = temp;
          } else {
            nightTemperatures[date] = temp;
          }
        });

        const uniqueDates = labels;
        const dayTemps = uniqueDates.map(
          (date) => dayTemperatures[date] || null
        );
        const nightTemps = uniqueDates.map(
          (date) => nightTemperatures[date] || null
        );

        setData({ day: dayTemps, night: nightTemps, labels: uniqueDates });
        setError(null);
      } catch (error) {
        setError("City not found. Please try another city.");
      }
    };

    fetchWeatherData();
  }, [city]);

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Day Temperature",
        data: data.day,
        fill: false,
        borderColor: "#e85d04",
        tension: 0.1,
      },
      {
        label: "Night Temperature",
        data: data.night,
        fill: false,
        borderColor: "#0582ca",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <Line
          data={chartData}
          width="5vw"
          height="2vw"
          options={{
            scales: {
              x: {
                type: "category",
                title: {
                  display: true,
                  text: "Date",
                },
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Temperature (°C)",
                },
              },
            },
          }}
        />
      )}
    </div>
  );
}
