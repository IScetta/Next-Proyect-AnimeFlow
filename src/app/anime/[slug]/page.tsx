"use client"

import AnimeColum from "@/components/anime-folder/AnimeColum";
import AnimeDetails from "@/components/anime-folder/AnimeDetails";
import AnimeEpisodes from "@/components/anime-folder/AnimeEpisodes";
import AnimePictures from "@/components/anime-folder/AnimePictures";
import AnimeReviews from "@/components/anime-folder/AnimeReviews";
import AnimeStaff from "@/components/anime-folder/AnimeStaff";
import AnimeStats from "@/components/anime-folder/AnimeStats";
import CardTrailerPlayer from "@/components/home-folder/Carousel-folder/CardTrailerPlayer";
import { getAnimeFullById } from "@/helpers/anime.helper";
import { AnimeTypeByIdFull } from "@/types/anime";
import Image from "next/image";
import { useEffect, useState } from "react";

const subTitles = ["Details" , "Characters & Staff", "Episodes", "Videos", "Stats", "Reviews", "Pictures"]

export default function Anime({ params }: { params: any }) {
  const { slug } = params;
  const [subTitleOptions, setSubTitleOptions] = useState<string>("Details")
  const [dataAnimeFull, setDataAnimeFull] = useState<AnimeTypeByIdFull | null>(null)
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
  
  useEffect(()=>{
      const fechData = async ()=>{
        try {
            const response: AnimeTypeByIdFull = await getAnimeFullById(slug);
            setDataAnimeFull(response)
        } catch (error) {
            console.error(error)
        }
    }
        fechData();
  },[slug])

  if(!dataAnimeFull){
    return(
        <div className="flex text-white/50 w-screen my-52 text-2xl justify-center items-center">
            Loading...
        </div>
    )
  }

  return (
    <div className="flex flex-row border-2 mt-1 mx-14 border-white/15">
      <div className="flex flex-col">
        <div className="">
          <Image
            alt=""
            className="p-2"
            src={dataAnimeFull?.data.images.webp.large_image_url}
            width={350}
            height={250}
          />
          
          <AnimeColum dataAnimeFull={dataAnimeFull}/>

        </div>
      </div>

      <div className="w-full h-full border-l-2 border-white/15">
        <div className=" bg-black/30 p-2">
          <h1 className="text-blueWhite font-bold text-3xl pl-2 ">
            {dataAnimeFull?.data.title}
          </h1>
          <h2 className="text-white/30 font-semibold text-lg pl-2">
            {dataAnimeFull?.data.title_english}
          </h2>
        </div>
        <div className="flex flex-row border-y-2  border-white/15 mx-2 p-1">
        {subTitles.map((data) =>(
            <button key={data} onClick={()=>setSubTitleOptions(data)} className={`text-white text-sm px-2 border-2 border-grayDark ${subTitleOptions === data && "bg-blueWhite" }  hover:bg-blueWhite`}>{data}</button>
        ))}
        </div>
        {subTitleOptions === subTitles[0] &&
          <AnimeDetails dataAnimeFull={dataAnimeFull} openModal={openModal}/> 
        }

        {subTitleOptions === subTitles[1] &&
          <AnimeStaff dataAnimeFull={dataAnimeFull}/>
        }

        {subTitleOptions === subTitles[2] &&
          <AnimeEpisodes dataAnimeFull={dataAnimeFull}/>
        }

        {subTitleOptions === subTitles[4] &&
          <AnimeStats dataAnimeFull={dataAnimeFull}/>
        }

        {subTitleOptions === subTitles[5] &&
          <AnimeReviews dataAnimeFull={dataAnimeFull}/>
        }

        {subTitleOptions === subTitles[6] &&
          <AnimePictures dataAnimeFull={dataAnimeFull}/>
        }

      </div>

      <CardTrailerPlayer isOpen={isModalOpen} onClose={closeModal} url_trailer={modalTrailerUrl} />
    </div>
  );
}
