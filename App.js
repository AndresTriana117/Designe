import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import React from 'react';
import styles from "./App.css"
import axios from 'axios';
import { useState } from "react";


// components
import CustomMap from "./components/CustomMap";



function App () {

  //const [Location, setLocation] = useState({
  //  data:[10.9877224, -74.788559,3]
  //})

  const [longitud, setlongitud] = useState({
    data1:[-74.788559,3]
  })

  const [latitud, setlatitud] = useState({
    data2:[Math.round(10.9877224, -4)]
  })

  const [fecha, setfecha] = useState({
    data3:[2021]
  })

  const  consulta = async () => {
    var url = 'http://186.115.79.242:51000/mensaje';  // IPpublica:Puerto/mensaje
    axios.get(url)
      .then(function (response) {
      var latitud= response.data.mes.split(";")[0]
      var num_latitud=latitud.split(":")[1]
      var longitud=response.data.mes.split(";")[1]
      var num_longitud=longitud.split(":")[1]
      var fecha=response.data.mes.split(";")[2]
      //setLocation({data:[num_latitud,num_longitud]})
      
      setlatitud({data2:[num_latitud]})
      setlongitud({data1:[num_longitud]})
      setfecha({data3:[fecha]})
      
  
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  
  setInterval(consulta, 5000);
  
  return (
    <div className={styles.Container}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit"> 
            Localización | GPSSMSTRCK | 
          </Typography>
          <p>
            Latitud:{latitud.data2} | Longitud:{longitud.data1} | {fecha.data3} 
          </p>
        </Toolbar>
      </AppBar>
        <div className={styles.Container}>
          <CustomMap />
        </div>
    </div>
  );
};

export default App;