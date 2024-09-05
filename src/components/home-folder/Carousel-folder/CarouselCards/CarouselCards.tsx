"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import Cards from "../Cards/Cards";
import { AnimeType, DataAnimeType } from "@/types/anime";

export default ({ dataAnimeSeason, cont }: { dataAnimeSeason: AnimeType | null, cont:number }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={cont}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {dataAnimeSeason?.data.map((data:DataAnimeType, index: number) => (
        <SwiperSlide key={index}>
          <Cards
            image={data.images.webp.image_url}
            mal_id={data.mal_id}
            title={data.title_english}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
