import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, InputBase } from "@mui/material";

const Nav = styled(AppBar)(() => ({
  backgroundColor: "#ADD7F6",
  color: "#22223B",
  borderRadius: "10px",
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
}));

const Logo = styled(Typography)(() => ({
  flexGrow: 0.5,
  fontWeight: "bold",
  fontSize: "25px",
  fontFamily: "Trebuchet MS",
  "@media (max-width: 600px)": {
    fontSize: "15px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "500px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "500px",
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
  borderRadius: "15px",
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

const Btn2 = styled(Button)(() => ({
  fontWeight: "bold",
  fontSize: "15px",
  fontFamily: "Trebuchet MS",
  "@media (max-width: 600px)": {
    fontSize: "10px",
  },
}));

export default function NavBar({ onCityChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm) {
      onCityChange(searchTerm);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Nav position="static">
      <Toolbar>
        <img
          src="climate-change.png"
          alt="icon"
          style={{
            height: "30px",
            width: "30px",
            padding: "10px",
          }}
        />
        <Logo variant="h6">Climate</Logo>
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

        <Box sx={{ flexGrow: 1 }}></Box>

        <Box sx={{ flexGrow: 0, display: "flex" }}>
          <Btn2 href="/" color="inherit">
            Dashboard
          </Btn2>
          <Btn2 href="/WeatherMap" color="inherit">
            Weather Map
          </Btn2>
        </Box>
      </Toolbar>
    </Nav>
  );
}
