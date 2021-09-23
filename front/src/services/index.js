import axios from "axios";

export const consulta = async (url) => {
  let num_latitud = 10.9877224;
  let num_longitud = -74.7885593;
  let fecha = 2021;
  let hora = 2000

  try {
    const res = await axios.get(url);
    num_latitud = res.data.response.latitude;
    num_longitud = res.data.response.longitude;
    fecha = res.data.response.fecha;
    hora = res.data.response.hora;
  } catch (error) {
    console.log(error);
  }

  return {
    lat: num_latitud,
    lng: num_longitud,
    fecha,
    hora,
  };
};
