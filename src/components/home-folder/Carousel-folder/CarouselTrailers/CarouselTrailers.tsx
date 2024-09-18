"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { AnimeType, DataAnimeType } from "@/types/anime";
import CardsTrailer from "../CardsTrailer";
import { useState } from "react";
import CardTrailerPlayer from "../CardTrailerPlayer";

export default function CarouselTrailers({
  dataAnimeTrailer,
  cont
}: {
  dataAnimeTrailer: AnimeType | null;
  cont: number;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTrailerUrl, setModalTrailerUrl] = useState<string | null>(null);

  const openModal = (url: string) => {
    setModalTrailerUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTrailerUrl(null);
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        slidesPerView={cont}
        spaceBetween={0}
        breakpoints={{
          0:{
            slidesPerView:1
          },
          480:{
            slidesPerView:2
          },
          768:{
            slidesPerView:3
          },
          1280:{
            slidesPerView:3
          },
          1560:{
            slidesPerView:3
          },
        }}
        navigation
      >
        {dataAnimeTrailer?.data.map((data: DataAnimeType) => (
            <div key={data.mal_id}>
                {data.trailer.images.medium_image_url && (
                    <SwiperSlide >
                  <button
                    className=""
                    onClick={() => openModal(data.trailer.url)}>
                    <CardsTrailer
                      image_trailer={data.trailer.images.medium_image_url}
                      typeCard={true}
                      
                    />
                  </button>
              </SwiperSlide>
                )}
            </div>
        ))}
      </Swiper>
      <CardTrailerPlayer isOpen={isModalOpen} onClose={closeModal} url_trailer={modalTrailerUrl} />
    </div>
  );
}

