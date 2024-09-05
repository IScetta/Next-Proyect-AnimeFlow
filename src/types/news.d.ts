export interface Pagination {
    last_visible_page: number;
    has_next_page: boolean;
  }
  
 export interface ImageFormats {
    image_url: string;
  }
  
 export interface Images {
    jpg: ImageFormats;
  }
  
  export interface DataNews {
    mal_id: number;
    url: string;
    title: string;
    date: string;
    author_username: string;
    author_url: string;
    forum_url: string;
    images: Images;
    comments: number;
    excerpt: string;
  }
  
  export interface NewDataType {
    pagination: Pagination;
    data: DataNews[];
  }
  