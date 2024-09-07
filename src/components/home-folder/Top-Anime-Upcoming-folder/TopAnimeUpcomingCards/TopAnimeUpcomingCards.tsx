import { DataAnimeType } from "@/types/anime";
import Image from "next/image";


export default function TopAnimeUpcomingCards({DataAnime}:{DataAnime:DataAnimeType}){
    return(
        <div className="flex flex-row bg-black/40 h-full mt-4 mx-2 border-2 border-white/30">
            <Image alt="" className="w-[40%] m-1" src={DataAnime.images.webp.image_url} width={200} height={200}/>
            <div className="mb-2">
                <h3 className="text-blueWhite text-base font-semibold m-1">{DataAnime.title}</h3>
                <h4 className="text-white/40 text-xs ml-2 m-1">Type: {DataAnime.type}</h4>
                <h4 className="text-white/40 text-xs ml-2 m-1">From: {DataAnime.source}</h4>
                <h4 className="text-white/40 text-xs ml-2 m-1">members: {DataAnime.members}</h4>
            </div>
        </div>
    )
}