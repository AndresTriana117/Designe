import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { consulta } from "./services";
import styles from "./App.css";

import CustomMap from "./components/CustomMap";

function App() {
  const [location, setLocation] = useState({
    lat: 10.9877224,
    lng: -74.7885593,
    fecha: 2021,
    hora: 2000,
  });

  const [init, setInit] = useState(false);

  const [poly, setPoly] = useState([{ lat: 10.9877224, lng: -74.7885593 }]);

  useEffect(() => {
    if (location.hora === 2000) setInit((c) => !c);

    const interval = setInterval(async () => {
      const { lat, lng, fecha, hora } = await consulta(
        "http://ippublica:puerto/mensaje"
      );
      setLocation({
        lat,
        lng,
        fecha,
        hora,
      });

      !init ? setPoly([{ lat, lng }]) : setPoly((c) => [...c, { lat, lng }]);
    }, 500);
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
            Latitud:{location.lat} | Longitud:{location.lng} | Fecha:
            {location.fecha} | Hora:{location.hora} |
          </p>
        </Toolbar>
      </AppBar>
      <div className={styles.Container}>
        <CustomMap data={[location.lat, location.lng, 3]} poly={poly} />
      </div>
    </div>
  );
}

export default App;
