
import { AnimeType } from "@/types/anime"
import TopAnimeCards from "../TopAnimeCards"

export default async function TopAnimeContainer({TopAnime}:{TopAnime:AnimeType}){
    return(
        <div className="flex flex-wrap  justify-between w-full h-full">
            {TopAnime?.data.slice(0,14).map((data,index)=>(
                    <TopAnimeCards key={index} TopAnime={data}/>
            ))}
        </div>
    )
}