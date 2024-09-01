import React from "react";
import Nav2 from "./Nav2";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  Grid,
  Paper,
  FormControl,
  FormControlLabel,
  Checkbox,
  Typography,
  styled,
} from "@mui/material";

const apiKey = import.meta.env.VITE_API_WEATHER_API_KEY;

const Paperr = styled(Paper)(() => ({
  borderRadius: "15px",
  backgroundColor: "#bbd0ffae",
  padding: "20px",
  color: "#22223B",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
}));

export default function Temperature() {
  const [layers, setLayers] = React.useState({
    clouds: true,
    precipitation: false,
    temperature: false,
    wind: false,
  });

  const handleLayerChange = (event) => {
    setLayers({ ...layers, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <Nav2 />
      <div style={{ position: "relative", height: "40vw" }}>
        <Paper style={{ height: "100%" }}>
          <MapContainer
            center={[31.279862, 37.1297454]}
            zoom={5}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {layers.clouds && (
              <TileLayer
                url={`https://tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid=${apiKey}`}
              />
            )}
            {layers.precipitation && (
              <TileLayer
                url={`https://tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png?appid=${apiKey}`}
              />
            )}
            {layers.temperature && (
              <TileLayer
                url={`https://tile.openweathermap.org/map/temp/{z}/{x}/{y}.png?appid=${apiKey}`}
              />
            )}
            {layers.wind && (
              <TileLayer
                url={`https://tile.openweathermap.org/map/wind/{z}/{x}/{y}.png?appid=${apiKey}`}
              />
            )}
          </MapContainer>
          <Grid
            container
            style={{
              position: "absolute",
              top: "1vw",
              right: "3vw",
              zIndex: 500,
              width: "10vw",
            }}
          >
            <Grid item>
              <Paperr>
                <Typography variant="h6" sx={{ fontFamily: "Trebuchet MS" }}>
                  Layers
                </Typography>
                <FormControl component="fieldset">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={layers.clouds}
                        onChange={handleLayerChange}
                        name="clouds"
                      />
                    }
                    label="Clouds"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={layers.precipitation}
                        onChange={handleLayerChange}
                        name="precipitation"
                      />
                    }
                    label="Precipitation"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={layers.temperature}
                        onChange={handleLayerChange}
                        name="temperature"
                      />
                    }
                    label="Temperature"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={layers.wind}
                        onChange={handleLayerChange}
                        name="wind"
                      />
                    }
                    label="Wind"
                  />
                </FormControl>
              </Paperr>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
}
