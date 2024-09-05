import Image from "next/image";
import { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

export default function CardsTrailer({
  image_trailer,
  mal_id,
  title,
}: {
  image_trailer: string;
  mal_id: number;
  title: string;
}) {

  return (
    <div  className="flex justify-center items-center pt-2 p-1 border-t-4 border-blueWhite hover:scale-105  ">
        <Image className="" src={image_trailer} alt="" width={400} height={250}/>
        <div className="absolute m-1 z-10 inset-0 bg-gradient-to-t from-black/60 to-transparent hover:to-black/80"></div>
        <FaRegCirclePlay className=" text-white absolute z-20 m-2 text-6xl text-center" />  
    </div>
  );
}