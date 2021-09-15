import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Map, TileLayer, Marker , Popup} from "react-leaflet";
import axios from 'axios';
import { useState } from "react";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
  },
}));



function CustomMap() {

  const [Location, setLocation] = useState({
    data:[10.9877224, -74.788559,3]
  })

  const  consulta = async () => {
    var url = 'http://186.115.79.242:51000/mensaje';  // IPpublica:Puerto/mensaje
    axios.get(url)
      .then(function (response) {
      var latitud= response.data.mes.split(";")[0]
      var num_latitud=latitud.split(":")[1]
      var longitud=response.data.mes.split(";")[1]
      var num_longitud=longitud.split(":")[1]
      setLocation({data:[num_latitud,num_longitud]})
  
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  setInterval(consulta, 5000);

  
  const classes = useStyles();

  return (
    <Map center={Location.data} zoom={13} className={classes.root}>
      <TileLayer
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={Location.data}>
      <Popup>
            <h1>{"Coordenadas"}</h1>
            <p>latitud:{Location.data[0]},longitud:{Location.data[1]} </p>
          </Popup>
      </Marker>
    </Map>
  );

}



export default CustomMap;