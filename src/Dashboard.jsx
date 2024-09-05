import React, { useState } from "react";
import "./index.css";
import TemperatureData from "./TemperatureData";
import {
  Button,
  Grid,
  InputBase,
  Paper,
  styled,
  Typography,
  alpha,
} from "@mui/material";
import Nav from "./Nav";
import Wind from "./Wind";
import Pressure from "./Pressure";
import CurrTemperature from "./CurrTemperature";
import HourlyTemperature from "./HourlyTemperature";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "500px",
  [theme.breakpoints.up("sm")]: {
    width: "600px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "auto",
      height: "auto",
    },
  },
}));
const Btn = styled(Button)(() => ({
  borderRadius: "20px",
  border: "1 solid",
  color: "white",
  fontSize: "15px",
  fontFamily: "Trebuchet MS",

  backgroundColor: "#023e8a",
  boxShadow: " transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px",
  "@media (max-width: 600px)": {
    fontSize: "10px",
  },

  "&:hover": {
    boxshadow:
      "rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset",
    transform: "translateY(-2px)",
  },
  "&:focus": {
    boxshadow:
      "#D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset",
  },
  "&:active": {
    boxshadow: "#D6D6E7 0 3px 7px inset",
    transform: "translateY(2px)",
  },
}));

const Papers = styled(Paper)(({ theme }) => ({
  borderRadius: "15px",
  backgroundColor: "#ADD7F6",
  padding: "20px",
  color: "#22223B",
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  "&:hover": {
    transform: "scale(1.01)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "15px",
  },
}));

const Paperr = styled(Paper)(({ theme }) => ({
  borderRadius: "15px",
  backgroundColor: "#ADD7F6",
  padding: "20px",
  color: "#22223B",
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  height: "708px",
  overflowY: "auto",
  [theme.breakpoints.down("md")]: {
    height: "auto",
    maxHeight: "400px",
    padding: "15px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Trebuchet MS",
  fontSize: "25px",
  textAlign: "center",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "50px",
  },
  "@media (max-width: 600px)": {
    fontSize: "15px",
  },
}));

const Title2 = styled(Typography)(({ theme }) => ({
  fontFamily: "Trebuchet MS",
  fontSize: "25px",
  textAlign: "center",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "50px",
  },
  "@media (max-width: 600px)": {
    fontSize: "23px",
  },
}));

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Dashboard() {
  const [city, setCity] = useState("Amman");
  const [searchTerm, setSearchTerm] = useState("");

  const capitalizedCity = capitalizeFirstLetter(city);
  const handleSearch = () => {
    if (searchTerm) {
      setCity(searchTerm);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <Nav />
      <div className="searchdiv">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
          />
        </Search>

        <Btn onClick={handleSearch}>Search</Btn>
      </div>
      <Grid
        container
        spacing={4}
        paddingTop="10px"
        paddingRight="5px"
        paddingLeft="5px"
      >
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            <Grid item xs={6} sm={4}>
              <Papers>
                <Title variant="h5">Current Temperature</Title>
                <CurrTemperature city={capitalizedCity} />
              </Papers>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Papers>
                <Title variant="h5">Pressure</Title>
                <Pressure city={capitalizedCity} />
              </Papers>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Papers>
                <Title2 variant="h5">Wind</Title2>
                <Wind city={capitalizedCity} />
              </Papers>
            </Grid>
            <Grid item xs={12}>
              <Papers>
                <Title2 variant="h5">Temperature Data</Title2>
                <TemperatureData city={capitalizedCity} />
              </Papers>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paperr>
            <Title2 variant="h5">Weather in {capitalizedCity}</Title2>
            <HourlyTemperature city={capitalizedCity} />
          </Paperr>
        </Grid>
      </Grid>
    </>
  );
}
