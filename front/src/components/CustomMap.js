import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
  },
}));

const center = [10.9877224, -74.788559, 3];
const icon = L.icon({
  iconUrl: "/images/marker-icon.png",
  iconAnchor: L.point(12, 40),
});

function CustomMap({ data, poly }) {
  const classes = useStyles();

  return (
    <MapContainer
      style={{ width: "100%", height: "100vh" }}
      center={Marker}
      zoom={13}
      className={classes.root}
    >
      <TileLayer
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={data} icon={icon}>
        <Popup>
          <h1>{"Coordenadas"}</h1>
          <p>Latitud:{data[0]}</p>
          <p>Longitud:{data[1]}</p>
        </Popup>
      </Marker>

      <Polyline positions={poly} />
    </MapContainer>
  );
}

export default CustomMap;
