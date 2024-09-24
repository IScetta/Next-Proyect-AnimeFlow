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


export const getAnimeFullById = async (id:number) => {
  try {
    const data = await fetchDataWithRetry(`${API_URL}anime/${id}/full`);
    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

export const getAnimeStaff = async (id:number) => {
  try {
    const data = await fetchDataWithRetry(`${API_URL}anime/${id}/staff`);
    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

export const getAnimeCharacters = async (id:number) => {
  try {
    const data = await fetchDataWithRetry(`${API_URL}anime/${id}/characters`);
    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};


export const getAnimeEpisodes = async (id:number, page:number) => {
  try {
    const data = await fetchDataWithRetry(`${API_URL}anime/${id}/episodes?&page=${page}`);
    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};


export const getAnimeStatistics = async (id:number) => {
  try {
    const data = await fetchDataWithRetry(`${API_URL}anime/${id}/statistics`);
    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};


export const getAnimePictures = async (id:number) => {
  try {
    const data = await fetchDataWithRetry(`${API_URL}anime/${id}/pictures`);
    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

export const getAnimeReviews = async (id:number) => {
  try {
    const data = await fetchDataWithRetry(`${API_URL}anime/${id}/reviews?preliminary=true`);
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


