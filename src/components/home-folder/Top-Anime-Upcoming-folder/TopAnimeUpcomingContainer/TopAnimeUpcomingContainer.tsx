import { AnimeType } from "@/types/anime";
import Image from "next/image";


export default function TopAnimeUpcomingContainer({TopAnimeUpcoming}:{TopAnimeUpcoming:AnimeType}){
    return(
        <div className=" flex flex-col justify-center ">
            {TopAnimeUpcoming.data.map((data)=>(
                <Image key={data.mal_id} className="m-2" src={data.images.webp.image_url} alt="" width={200} height={200}/>
            ))
            }
        </div>
    )
}