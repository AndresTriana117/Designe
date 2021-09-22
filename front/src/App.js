import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useState, useEffect } from "react";
import { consulta } from "./services";
import styles from "./App.css";

import CustomMap from "./components/CustomMap";

function App() {
  const [location, setLocation] = useState({
    lat: 10.9877224,
    lng: -74.7885593,
    fecha: 2021,
    hora: 2021,
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      const { lat, lng, fecha, hora } = await consulta(
        "http://localhots:4000/mensaje"
      );
      setLocation({
        lat,
        lng,
        fecha,
        hora,
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [location]);

  return (
    <div className={styles.Container}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Localización | GPSSMSTRCK |
          </Typography>
          <p>
            Latitud:{location.lat} | Longitud:{location.lng} | Fecha:{location.fecha} | Hora:{location.hora} |
          </p>
        </Toolbar>
      </AppBar>
      <div className={styles.Container}>
        <CustomMap data={[location.lat, location.lng, 3]} />
      </div>
    </div>
  );
}

export default App;
