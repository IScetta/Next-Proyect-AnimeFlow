import { AnimeType } from "@/types/anime";
import TopAnimeUpcomingCards from "../TopAnimeUpcomingCards";



export default function TopAnimeUpcomingContainer({TopAnimeUpcoming}:{TopAnimeUpcoming:AnimeType}){
    return(
        <div className=" flex flex-col justify-center pb-4 mx-1">
            {TopAnimeUpcoming.data.map((data)=>(
                <TopAnimeUpcomingCards DataAnime={data}/>
            ))
            }
        </div>
    )
}