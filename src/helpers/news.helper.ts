import axios from "axios";


const API_URL = "https://api.jikan.moe/v4/";

export const getAnimeNews = async () => {
  try {
    const res = await axios.get(`${API_URL}anime/1/news`);
    if (res.status !== 200) {
      console.log("Error al traer las categorias");
    } else {
      return res.data;
    }
  } catch (error: any) {
    console.error(error)
  }
};

export const getMangaNews = async () => {
  try {
    const res = await axios.get(`${API_URL}manga/1/news`);
    if (res.status !== 200) {
      console.log("Error al traer las categorias");
    } else {
      return res.data;
    }
  } catch (error: any) {
    console.error(error)
  }
};