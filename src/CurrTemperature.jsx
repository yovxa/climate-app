import React, { useState, useEffect } from "react";
import axios from "axios";
import { WbSunny } from "@mui/icons-material";
import { styled } from "@mui/material";

const apiKey = import.meta.env.VITE_API_WEATHER_API_KEY;

const Sun = styled(WbSunny)(() => ({
  fontSize: "50px",
  color: "#ff6700",
  "@media (max-width: 600px)": {
    fontSize: "30px",
  },
}));

export default function CurrTemperature({ city }) {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      setError(null);

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
        setTemperature(response.data.main.temp);
      } catch (error) {
        setError("City not found. Please try another city.");
        setTemperature(null);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="div" style={{ padding: "20px" }}>
      <Sun />
      {temperature !== null && <p className="p">{temperature} °C</p>}
    </div>
  );
}
