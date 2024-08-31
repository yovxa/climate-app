import React, { useState } from "react";
import Charts from "./chart";
import { Grid, Paper, styled, Typography } from "@mui/material";
import Nav from "./Nav";
import WindChart from "./WindChart";
import Pressure from "./Pressure";
import CurrTemperature from "./CurrTemperature";
import TodayTemperature from "./TodayTemperature";

const Papers = styled(Paper)(() => ({
  borderRadius: "15px",
  backgroundColor: "#8da9c4",
  padding: "20px",
  boxShadow: "#00171f 0px 3px 8px",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const Paperr = styled(Paper)(() => ({
  borderRadius: "15px",
  backgroundColor: "#8da9c4",
  padding: "20px",
  boxShadow: "#00171f 0px 3px 8px",
  height: "708px",
  overflowY: "auto",
  scrollbarColor:"#1b4965 #8da9c4",
  scrollbarWidth:"thin"
}));

const Title = styled(Typography)(() => ({
  fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
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
      <Grid container spacing={4} padding="20px">
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
                <WindChart city={capitalizedCity} />
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
                <Charts city={capitalizedCity} />
              </Papers>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paperr>
            <Title
              variant="h5"
              sx={{ textAlign: "center", fontWeight: "bold" }}
            >
              Today's Weather in {capitalizedCity}
            </Title>
            <TodayTemperature city={capitalizedCity} />
          </Paperr>
        </Grid>
      </Grid>
    </>
  );
}
