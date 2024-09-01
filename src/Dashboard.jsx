import React, { useState } from "react";
import "./index.css";
import TemperatureData from "./TemperatureData";
import { Grid, Paper, styled, Typography } from "@mui/material";
import Nav from "./Nav";
import Wind from "./Wind";
import Pressure from "./Pressure";
import CurrTemperature from "./CurrTemperature";
import HourlyTemperature from "./HourlyTemperature";

const Papers = styled(Paper)(() => ({
  borderRadius: "15px",
  backgroundColor: "#ADD7F6",
  padding: "20px",
  color: "#22223B",

  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  "&:hover": {
    transform: "scale(1.01)",
  },
}));

const Paperr = styled(Paper)(() => ({
  borderRadius: "15px",
  backgroundColor: "#ADD7F6",
  padding: "20px",
  color: "#22223B",

  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  height: "708px",
  overflowY: "auto",
}));

const Title = styled(Typography)(() => ({
  fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  fontSize: "1.5vw",
}));

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Dashboard() {
  const [city, setCity] = useState("Amman");

  const capitalizedCity = capitalizeFirstLetter(city);

  return (
    <>
      <Nav onCityChange={setCity} />
      <Grid
        container
        spacing={4}
        paddingTop="20px"
        paddingRight="5px"
        paddingLeft="5px"
      >
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            <Grid item xs={4} sm={4} md={4}>
              <Papers>
                <Title
                  variant="h5"
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                  Current Temperature
                </Title>
                <CurrTemperature city={capitalizedCity} />
              </Papers>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Papers>
                <Title
                  variant="h5"
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                  Pressure
                </Title>
                <Pressure city={capitalizedCity} />
              </Papers>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Papers>
                <Title
                  variant="h5"
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                  Wind
                </Title>
                <Wind city={capitalizedCity} />
              </Papers>
            </Grid>
            <Grid item xs={12}>
              <Papers>
                <Title
                  variant="h5"
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                  Temperature Data
                </Title>
                <TemperatureData city={capitalizedCity} />
              </Papers>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} md={4}>
          <Paperr>
            <Title
              variant="h5"
              sx={{ textAlign: "center", fontWeight: "bold" }}
            >
              Weather in {capitalizedCity}
            </Title>
            <HourlyTemperature city={capitalizedCity} />
          </Paperr>
        </Grid>
      </Grid>
    </>
  );
}
