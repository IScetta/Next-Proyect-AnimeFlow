import axios from "axios";


const API_URL = "https://api.jikan.moe/v4/";


export const getSeasonNow = async () => {
  try {
    const data = await fetchDataWithRetry(`${API_URL}seasons/now`);
    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};


export const getTopAnime = async () => {
  try {
    const data = await fetchDataWithRetry(`${API_URL}top/anime`);
    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};



export const getSeasonUpcoming = async () => {
  try {
    const data = await fetchDataWithRetry(`${API_URL}seasons/upcoming?limit=5`);
    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

const fetchDataWithRetry = async (url: string, retries = 3, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 429 && i < retries - 1) {
        // Esperar un tiempo antes de reintentar
        const waitTime = delay * Math.pow(2, i); // backoff exponencial
        console.log(`Solicitud fallida con 429, reintentando en ${waitTime} ms...`);
        await new Promise((resolve) => setTimeout(resolve, waitTime));
      } else {
        // Si es otro error o se agotaron los reintentos, lanzar el error
        throw error;
      }
    }
  }
};


