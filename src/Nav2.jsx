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
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
}));
const Btn = styled(Button)(() => ({
  fontWeight: "bold",
  fontSize: "1.1vw",
  fontFamily: "Trebuchet MS",
}));
export default function NavBar2() {
  return (
    <Nav position="static">
      <Toolbar>
        <img
          src="climate-change.png"
          alt="icon"
          style={{ height: "2vw", width: "2vw", padding: "10px" }}
        />
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            fontSize: "1.5vw",
            fontFamily: "Trebuchet MS",
          }}
        >
          Climate
        </Typography>

        <Box sx={{ flexGrow: 0, display: "flex" }}>
          <Btn href="/" color="inherit">
            Dashboard
          </Btn>
          <Btn href="/WeatherMap" color="inherit">
            Weather Map
          </Btn>
        </Box>
      </Toolbar>
    </Nav>
  );
}
