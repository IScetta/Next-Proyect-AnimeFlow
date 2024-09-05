// Tipo para las imágenes en distintos tamaños
interface ImageSizes {
    image_url: string;
    small_image_url: string;
    medium_image_url: string;
    large_image_url: string;
    maximum_image_url: string;
  }
  
  // Tipo para las imágenes en formato JPG
  interface JpgImage {
    image_url: string;
  }
  
  // Tipo para el tráiler de promoción
  interface Trailer {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: ImageSizes;
  }
  
  // Tipo para la información de un episodio
  interface Episode {
    mal_id: number;
    url: string;
    title: string;
    episode: string;
    images: {
      jpg: JpgImage;
    };
  }
  
  // Tipo para un video musical
  interface MusicVideo {
    title: string;
    video: {
      youtube_id: string;
      url: string;
      embed_url: string;
      images: ImageSizes;
    };
    meta: {
      title: string;
      author: string;
    };
  }
  
  // Tipo para una promoción
  interface Promo {
    title: string;
    trailer: Trailer;
  }
  
  // Tipo principal para la respuesta de datos
  interface DataVideo {
    promo: Promo[];
    episodes: Episode[];
    music_videos: MusicVideo[];
  }
  
  // Tipo principal para la respuesta completa del API
  interface DataVideoAnime {
    data: DataVideo;
  }
  