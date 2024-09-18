"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar, Autoplay, FreeMode } from "swiper/modules";
import Cards from "../Cards/Cards";
import { AnimeType, DataAnimeType } from "@/types/anime";

export default function CarouselCards({ dataApiList, cont, type }: { dataApiList: AnimeType | null, cont:number, type:string }){
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={cont}
      navigation
      breakpoints={{
        0:{
          slidesPerView:cont-2
        },
        480:{
          slidesPerView:cont-1
        },
        768:{
          slidesPerView:cont+1
        },
        1536:{
          slidesPerView:cont+2
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {dataApiList?.data.map((data:DataAnimeType) => (
        <SwiperSlide key={data.mal_id}>
          <Cards
            image={data.images.webp.image_url}
            mal_id={data.mal_id}
            title={data.title}
            type={type}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
