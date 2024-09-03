import React, { useEffect, useState } from "react";
import axios from "axios";
import { Gauge, gaugeClasses } from "@mui/x-charts";
import { styled } from "@mui/material";

const WindSpeed = styled(Gauge)(() => ({
  fontSize: "30px",
  fontWeight: "bold",
  height: "175px",
  width: "200px",
  [`& .${gaugeClasses.valueArc}`]: {
    fill: "#023e8a",
  },
  [`& .${gaugeClasses.referenceArc}`]: {
    fill: "#caf0f8",
  },
}));

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
          setError("City not found. Please try another city.");
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
          <WindSpeed value={windSpeed} startAngle={-90} endAngle={90} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
