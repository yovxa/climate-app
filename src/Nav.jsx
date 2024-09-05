import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

const Nav = styled(AppBar)(() => ({
  backgroundColor: "#ADD7F6",
  color: "#22223B",
  borderRadius: "10px",
  zindex: "2",
  position: "relative",
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
}));
const Logo = styled(Typography)(() => ({
  flexGrow: 1,
  fontWeight: "bold",
  fontSize: "20px",
  fontFamily: "Trebuchet MS",
  "@media (max-width: 600px)": {
    fontSize: "10px",
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

export default function NavBar2() {
  return (
    <Nav>
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
        <Logo variant="h6">CLIMATE TRACKER</Logo>

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
