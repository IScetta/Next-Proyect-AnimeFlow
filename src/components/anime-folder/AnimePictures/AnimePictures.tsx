"use client"
import { getAnimePictures } from "@/helpers/anime.helper";
import { AnimePicturesType, AnimeTypeByIdFull } from "@/types/anime";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function AnimePictures({dataAnimeFull}:{dataAnimeFull:AnimeTypeByIdFull}){

    const [dataPictures, setDataPictures] = useState<AnimePicturesType | null>(null)

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response:AnimePicturesType = await getAnimePictures(dataAnimeFull.data.mal_id)
                setDataPictures(response)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    },[dataAnimeFull])

    if(!dataPictures){
        return(
            <div className="flex text-white/50  my-52 text-2xl justify-center items-center">
                Loading...
            </div>
        )
      }

    return(
        <div className="m-2">
            <h2 className="text-white border-b-2 border-blueWhite my-2 ">Reviews</h2>
            <div className="flex flex-wrap gap-8 justify-around m-2">
                {dataPictures?.data.map((picture,index)=>(
                    <Image key={index} className="" alt="" src={picture.jpg.image_url} width={200} height={300} />
                ))}
            </div>
        </div>
    )
}