import axios from "axios";


const API_URL = "https://api.jikan.moe/v4/";

export const getSeasonNow = async () => {
  try {
    const res = await axios.get(`${API_URL}seasons/now`);
    if (res.status !== 200) {
      console.log("Error al traer las categorias");
    } else {
      return res.data;
    }
  } catch (error: any) {
    console.error(error)
  }
};

export const getTopAnime = async () => {
  try {
    const res = await axios.get(`${API_URL}top/anime`);
    if (res.status !== 200) {
      console.log("Error al traer las categorias");
    } else {
      return res.data;
    }
  } catch (error: any) {
    console.error(error)
  }
};

export const getSeasonUpcoming = async () => {
  try {
    const res = await axios.get(`${API_URL}seasons/upcoming?limit=5`);
    if (res.status !== 200) {
      console.log("Error al traer las categorias");
    } else {
      return res.data;
    }
  } catch (error: any) {
    console.error(error)
  }
};
