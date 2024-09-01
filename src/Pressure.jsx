import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const apiKey = import.meta.env.VITE_API_WEATHER_API_KEY;

export default function PressureGauge({ city }) {
  const [currentPressure, setCurrentPressure] = useState(null);
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

        const latestPressure = response.data.list[0].main.pressure;
        setCurrentPressure(latestPressure);
        setError(null);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("City not found. Please try another city.");
        } else {
          setError("City not found. Please try another city.");
        }
        setCurrentPressure(null);
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <div
      style={{
        width: "10.3vw",
        height: "10.3vw",
        paddingTop: "22px",
        marginLeft: "3.5vw",
      }}
    >
      {error ? (
        <p>{error}</p>
      ) : currentPressure !== null ? (
        <CircularProgressbar
          value={currentPressure}
          minValue={950}
          maxValue={1050}
          text={`${currentPressure} hPa`}
          styles={buildStyles({
            textSize: "16px",
            pathColor: "#023e8a",
            textColor: "Black",
            trailColor: "#caf0f8",
          })}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
