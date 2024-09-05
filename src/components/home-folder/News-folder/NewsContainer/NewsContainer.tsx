
import { NewDataType } from "@/types/news"
import NewsCards from "../NewsCards"
import { AnimeType } from "@/types/anime"

export default async function NewsContainer({TopAnime}:{TopAnime:AnimeType}){
    
    return(
        <div className="flex flex-wrap  justify-between w-full h-full">
            {TopAnime?.data.map((data,index)=>(
                    <NewsCards key={index} TopAnime={data}/>
            ))}
        </div>
    )
}