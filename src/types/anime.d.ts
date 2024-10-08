// Tipo para las imágenes en formato JPG y WebP
interface ImageFormats {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface ImageFormatsWebP extends ImageFormats {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

// Tipo para las imágenes
interface Images {
  jpg: ImageFormats;
  webp: ImageFormatsWebP;
}

// Tipo para el tráiler
interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: {
    image_url: string;
    small_image_url: string;
    medium_image_url: string;
    large_image_url: string;
    maximum_image_url: string;
  };
}

// Tipo para los títulos del anime
interface Title {
  type: string;
  title: string;
}

// Tipo para el periodo de emisión
interface AiredProp {
  day: number;
  month: number;
  year: number;
}

interface Aired {
  from: string;
  to: string;
  prop: {
    from: AiredProp;
    to: AiredProp;
  };
  string: string;
}

// Tipo para la información de transmisión
interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

// Tipo para los productores, licenciantes y estudios
interface Entity {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

// Tipo para los géneros, temas y demografías
interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

// Tipo para un objeto de anime en la respuesta
export interface DataAnimeType {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Entity[];
  licensors: Entity[];
  studios: Entity[];
  genres: Genre[];
  explicit_genres: Genre[];
  themes: Genre[];
  demographics: Genre[];
}

// Tipo para la paginación
interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

// Tipo principal para la respuesta completa del API
export interface AnimeType {
  pagination?: Pagination;
  data: DataAnimeType[];
}

export interface AnimeTypeByIdFull {
  data: DataAnimeType;
}

type AnimeStaffType = {
  data: {
    person: {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
        };
      };
      name: string;
    };
    positions: string[];
  }[];
};

type AnimeCharacterType = {
  data: {
    character: {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
          small_image_url: string;
        };
        webp: {
          image_url: string;
          small_image_url: string;
        };
      };
      name: string;
    };
    role: string;
    voice_actors: {
      person: {
        mal_id: number;
        url: string;
        images: {
          jpg: {
            image_url: string;
          };
        };
        name: string;
      };
      language: string;
    }[];
  }[];
};

type AnimeEpisodiesType = {
  data: {
    mal_id: number;
    url: string;
    title: string;
    score: string;
    title_japanese: string;
    title_romanji: string;
    duration: number;
    aired: string;
    filler: boolean;
    recap: boolean;
    forum_url: string;
  }[];
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
  };
};


export interface AnimeStatisticsType {
  data: {
    watching: number;
    completed: number;
    on_hold: number;
    dropped: number;
    plan_to_watch: number;
    total: number;
    scores: {
      score: number;
      votes: number;
      percentage: number;
    }[];
  };
}


export interface AnimeReviewDataType{
  user: {
    username: string;
    url: string;
    images: {
      jpg: {
        image_url: string;
      };
      webp: {
        image_url: string;
      };
    };
  };
  mal_id: number;
  url: string;
  type: string;
  reactions: {
    overall: number;
    nice: number;
    love_it: number;
    funny: number;
    confusing: number;
    informative: number;
    well_written: number;
    creative: number;
  };
  date: string;
  review: string;
  score: number;
  tags: string[];
  is_spoiler: boolean;
  is_preliminary: boolean;
  episodes_watched: number;
}

export interface AnimeReviewType {
  data: {
    user: {
      username: string;
      url: string;
      images: {
        jpg: {
          image_url: string;
        };
        webp: {
          image_url: string;
        };
      };
    };
    mal_id: number;
    url: string;
    type: string;
    reactions: {
      overall: number;
      nice: number;
      love_it: number;
      funny: number;
      confusing: number;
      informative: number;
      well_written: number;
      creative: number;
    };
    date: string;
    review: string;
    score: number;
    tags: string[];
    is_spoiler: boolean;
    is_preliminary: boolean;
    episodes_watched: number;
  }[];
  pagination?: {
    last_visible_page: number;
    has_next_page: boolean;
  };
}

type AnimePicturesType = {
    data: {
      jpg: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
      webp: {
        image_url: string;
        small_image_url: string;
        large_image_url: string;
      };
    }[];
  };


