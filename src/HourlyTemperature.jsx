import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { Button, ButtonGroup, styled } from "@mui/material";
import {
  WbSunny,
  Cloud,
  CloudOff,
  InvertColors,
  Grain,
  Thunderstorm,
} from "@mui/icons-material";

const Btn = styled(Button)((theme) => ({
  width: "auto",
  height: "3vw",
  fontSize: "1vw",
  fontWeight: "bold",
  fontFamily: "Trebuchet MS",
  background: "linear-gradient(to top, inherit)",
  color: "#22223B",
  borderRadius: "15px",
  borderBottom: "#023e8a",
  borderStyle: "solid",
  outline: "none",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",

  "&:hover": {
    transform: "translateY(-2px)",
  },
  "&:focus": {
    backgroundColor: "#023e8a",
    color: "white",
    border: "0",
  },
}));

const ListItem = styled("li")(() => ({
  display: "flex",
  alignItems: "center",
  padding: "10px 20px",
  borderBottom: "1px solid #ddd",
}));

const IconContainer = styled("div")(() => ({
  marginRight: "10px",
}));

export default function TodayTemperature({ city }) {
  const [weatherData, setWeatherData] = useState([]);
  const [selectedRange, setSelectedRange] = useState("today");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = import.meta.env.VITE_API_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        const response = await axios.get(url);
        setWeatherData(response.data.list);
      } catch (err) {
        setError("City not found. Please try another city.");
        setWeatherData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const filterWeatherData = () => {
    const today = dayjs().format("YYYY-MM-DD");
    const tomorrow = dayjs().add(1, "day").format("YYYY-MM-DD");
    const futureDays = dayjs().add(10, "day").format("YYYY-MM-DD");

    switch (selectedRange) {
      case "today":
        return weatherData.filter(
          (forecast) => dayjs(forecast.dt_txt).format("YYYY-MM-DD") === today
        );
      case "tomorrow":
        return weatherData.filter(
          (forecast) => dayjs(forecast.dt_txt).format("YYYY-MM-DD") === tomorrow
        );
      case "next10days":
        return weatherData.filter(
          (forecast) =>
            dayjs(forecast.dt_txt).isAfter(today) &&
            dayjs(forecast.dt_txt).isBefore(futureDays)
        );
      default:
        return [];
    }
  };

  const displayedWeather = filterWeatherData();

  const getIcon = (description) => {
    const iconProps = { sx: { fontSize: "4vw", color: "#000" } };
    switch (true) {
      case /clear/i.test(description):
        return (
          <WbSunny {...iconProps} sx={{ ...iconProps.sx, color: "#ff6700" }} />
        );
      case /cloud/i.test(description):
        return (
          <Cloud {...iconProps} sx={{ ...iconProps.sx, color: "#B0C4DE" }} />
        );
      case /rain/i.test(description):
        return (
          <InvertColors
            {...iconProps}
            sx={{ ...iconProps.sx, color: "#00BFFF" }}
          />
        );
      case /snow/i.test(description):
        return (
          <Grain {...iconProps} sx={{ ...iconProps.sx, color: "#ADD8E6" }} />
        );
      case /thunderstorm/i.test(description):
        return (
          <Thunderstorm
            {...iconProps}
            sx={{ ...iconProps.sx, color: "#FFD700" }}
          />
        );
      case /mist/i.test(description):
        return (
          <CloudOff {...iconProps} sx={{ ...iconProps.sx, color: "#D3D3D3" }} />
        );
      default:
        return <Cloud {...iconProps} />;
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ textAlign: "center" }}>
        <ButtonGroup>
          <Btn
            onClick={() => setSelectedRange("today")}
            color={selectedRange === "today" ? "#F2E9E4" : "#7400b8"}
          >
            Today
          </Btn>
          <Btn
            onClick={() => setSelectedRange("tomorrow")}
            color={selectedRange === "tomorrow" ? "#F2E9E4" : "#F2E9E4"}
          >
            Tomorrow
          </Btn>
          <Btn
            onClick={() => setSelectedRange("next10days")}
            color={selectedRange === "next10days" ? "#F2E9E4" : "#F2E9E4"}
          >
            Next 10 Days
          </Btn>
        </ButtonGroup>
      </div>
      <div>
        {error ? (
          <p>{error}</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {displayedWeather.map((hour, index) => (
              <ListItem key={index}>
                <IconContainer>
                  {getIcon(hour.weather[0].description)}
                </IconContainer>
                <div>
                  <strong style={{ fontSize: "1.5vw" }}>
                    {dayjs(hour.dt_txt).format("HH:mm")}
                  </strong>
                  <br />
                  <span style={{ fontSize: "1.2vw" }}>
                    {hour.weather[0].description}
                  </span>
                  <br />
                  <span style={{ fontSize: "1.2vw" }}>
                    Temp: {hour.main.temp}°C
                  </span>
                </div>
              </ListItem>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
