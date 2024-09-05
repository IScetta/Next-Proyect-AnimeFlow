"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

export default function CarouselsMajor(){
  return (
    <div className="mx-36">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="">
          <div className="w-full h-[30vw] ">
          <Image
            className="flex justify-center items-center w-full h-full object-cover  object-top"
            alt="img"
            width={2000}
            height={2000}
            src={
              "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/01/The-New-Anime-Of-The-Winter-2022-Season-You-Should-Be-Watching-featured-image.jpg"
            }
          />
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          {" "}
          <div className="w-full h-[30vw]">
          <Image
            className="flex justify-center items-center w-full h-full object-cover object-top"
            alt="img"
            width={2000}
            height={2000}
            src={
              "https://sm.ign.com/ign_latam/feature/b/best-new-a/best-new-anime-to-watch-fall-season-2023_x6vn.jpg"
            }
          />
          </div>
        </SwiperSlide>
        <SwiperSlide><div className="w-full h-[30vw]">
          <Image
            className="flex justify-center items-center w-full h-full object-cover object-top"
            alt="img"
            width={2000}
            height={2000}
            src={
              "https://www.tokyoweekender.com/wp-content/uploads/2024/01/best-new-manga-to-read.jpg"
            }
          />
          </div></SwiperSlide>
          <SwiperSlide><div className="w-full h-[30vw]">
          <Image
            className="flex justify-center items-center w-full h-full object-cover object-top"
            alt="img"
            width={2000}
            height={2000}
            src={
              "https://imgix.ranker.com/list_img_v2/18802/3178802/original/3178802-u1?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720"
            }
          />
          </div></SwiperSlide>

      </Swiper>
    </div>
  );
};
