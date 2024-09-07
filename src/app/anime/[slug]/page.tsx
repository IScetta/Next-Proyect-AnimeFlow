import { getAnimeFullById } from "@/helpers/anime.helper"
import { AnimeTypeByIdFull } from "@/types/anime"
import Image from "next/image"

export default async function Anime ({params}:{params:any}){
    const { slug } = params
    const dataAnimeFull:AnimeTypeByIdFull= await getAnimeFullById(slug)

    return (
        <div>
            <Image alt="" src={dataAnimeFull.data.images.webp.image_url} width={200} height={200}/>
        </div>
    )
}