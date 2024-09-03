import React from "react";
import Nav2 from "./Nav2";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const { BaseLayer, Overlay } = LayersControl;
const apiKey = import.meta.env.VITE_API_WEATHER_API_KEY;

export default function Temperature() {
  return (
    <>
      <Nav2 />

      <div className="Mapdiv">
        <MapContainer
          center={[31.279862, 37.1297454]}
          zoom={5}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false}
        >
          <LayersControl position="bottomright" style={{ zIndex: "3" }}>
            <BaseLayer checked name="StreetMap">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </BaseLayer>

            <Overlay name="Clouds">
              <TileLayer
                url={`https://tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid=${apiKey}`}
              />
            </Overlay>
            <Overlay name="Precipitation">
              <TileLayer
                url={`https://tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png?appid=${apiKey}`}
              />
            </Overlay>
            <Overlay name="Temperature">
              <TileLayer
                url={`https://tile.openweathermap.org/map/temp/{z}/{x}/{y}.png?appid=${apiKey}`}
              />
            </Overlay>
            <Overlay name="Wind">
              <TileLayer
                url={`https://tile.openweathermap.org/map/wind/{z}/{x}/{y}.png?appid=${apiKey}`}
              />
            </Overlay>
          </LayersControl>
        </MapContainer>
      </div>
    </>
  );
}
