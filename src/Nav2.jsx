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

export default function NavBar2() {
  return (
    <Nav position="static">
      <Toolbar>
        <img
          src="climate-change.png"
          alt="icon"
          style={{ height: "30px", width: "30px", padding: "10px" }}
        />
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          Climate
        </Typography>

        <Box sx={{ flexGrow: 0, display: "flex" }}>
          <Button href="/" color="inherit" sx={{ fontWeight: "bold" }}>
            Dashboard
          </Button>
          <Button
            href="/WeatherMap"
            color="inherit"
            sx={{ fontWeight: "bold" }}
          >
            Weather Map
          </Button>
        </Box>
      </Toolbar>
    </Nav>
  );
}
