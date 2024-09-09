"use client"

import CardsTrailer from "@/components/home-folder/Carousel-folder/CardsTrailer";
import CardTrailerPlayer from "@/components/home-folder/Carousel-folder/CardTrailerPlayer";
import { getAnimeFullById } from "@/helpers/anime.helper";
import { AnimeTypeByIdFull } from "@/types/anime";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

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
  },[])

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
        <div className=" border-r-2 border-white/15">
          <Image
            alt=""
            className="p-2"
            src={dataAnimeFull?.data.images.webp.large_image_url}
            width={350}
            height={250}
          />
          <h1 className="text-white">Titles</h1>
        </div>
      </div>

      <div className="w-full h-full ">
        <div className=" bg-black/30 p-2">
          <h1 className="text-blueWhite font-bold text-3xl pl-2 ">
            {dataAnimeFull?.data.title}
          </h1>
          <h2 className="text-white/30 font-semibold text-lg pl-2">
            {dataAnimeFull?.data.title_english}
          </h2>
        </div>
        <div className="flex flex-row border-y-2 border-white/15 mx-2 p-1">
        {subTitles.map((data) =>(
            <button key={data} onClick={()=>setSubTitleOptions(data)} className={`text-white text-sm px-2 border-2 border-grayDark ${subTitleOptions === data && "bg-blueWhite" }  hover:bg-blueWhite`}>{data}</button>
        ))}
        </div>


        <div className="flex flex-row text-white m-2 mx-4 ">

            <div className="flex flex-col mt-2">
            <div className=" flex flex-row border-2 border-white/15">

            <div className=" p-4 ">
                <h2 className="flex justify-center mb-1 px-2 bg-blueWhite">Score</h2>
                <h1 className="font-extrabold text-4xl">{dataAnimeFull.data.score}</h1>
                <h3 className="flex justify-center text-xs ">{dataAnimeFull.data.scored_by} users</h3>   
            </div>

                <div className="border-r-2 my-4 border-white/15"></div>

            <div className="flex flex-col w-full mx-2 justify-center">
                <div className="flex flex-row text-base m-2">
                    <h2 className="px-2 flex flex-row">Ranked:<div className="font-bold px-2">#{dataAnimeFull.data.rank}</div> </h2>
                    <h2 className="px-2 flex flex-row">Popularity:<div className="font-bold px-2">{dataAnimeFull.data.popularity}</div></h2>
                    <h2 className="px-2 flex flex-row">Members:<div className="font-bold px-2">{dataAnimeFull.data.members}</div></h2>
                </div>
                <div className="flex flex-row text-xs m-2 text-blueWhite items-end">
                    <h3 className="px-2 border-r-2 border-white/30">summer {dataAnimeFull.data.year}</h3>
                    <h3 className="px-2 border-r-2 border-white/30">{dataAnimeFull.data.type}</h3>
                    <h3 className="px-2">{dataAnimeFull.data.studios[0].name}</h3>
                </div>
            </div>


            </div>

                <div className="flex justify-start items-center border-2 border-white/15 mt-2 h-full">
                    <button className="px-4 py-1 my-2 bg-blueWhite mx-2 flex flex-row rounded-sm"><IoIosAddCircle className="m-1" /> Add to my List</button>
                    <button className="px-4 py-1 my-2 text-blueWhite mx-2 border border-blueWhite rounded-sm">Add to favorites</button>
                </div>

            </div>
                <button
                    className="h-full"
                    onClick={() => openModal(dataAnimeFull.data.trailer.url)}>
                    <CardsTrailer image_trailer={dataAnimeFull.data.trailer.images.medium_image_url} typeCard={false}/>
                </button>
        </div>
        <div className="flex flex-col p-4 m-4">
        <h2 className="text-white text-xl my-2">Synopsis</h2>
        <p className="text-white/50 text-sm border-y-2 py-1 border-white/15">{dataAnimeFull.data.synopsis}</p>
        </div>
      </div>

      <CardTrailerPlayer isOpen={isModalOpen} onClose={closeModal} url_trailer={modalTrailerUrl} />
    </div>
  );
}
