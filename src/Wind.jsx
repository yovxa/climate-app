import React, { useEffect, useState } from "react";
import axios from "axios";
import { Gauge, gaugeClasses } from "@mui/x-charts";

export default function WindChart({ city }) {
  const [windSpeed, setWindSpeed] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_WEATHER_API_KEY;

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: city,
              appid: apiKey,
              units: "metric",
            },
          }
        );
        const wind = response.data.wind.speed;
        setWindSpeed(wind);
        setError(null);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("City not found. Please try another city.");
        } else {
          setError("Failed to fetch weather data. Please try again later.");
        }
        setWindSpeed(null);
      }
    }

    fetchWeather();
  }, [city, apiKey]);

  return (
    <>
      <div className="div">
        {error ? (
          <p>{error}</p>
        ) : windSpeed !== null ? (
          <Gauge
            width={170}
            height={170}
            value={windSpeed}
            startAngle={-90}
            endAngle={90}
            sx={() => ({
              fontSize: "20px",
              fontWeight: "bold",
              [`& .${gaugeClasses.valueArc}`]: {
                fill: "#023e8a",
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: "#caf0f8",
              },
            })}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}