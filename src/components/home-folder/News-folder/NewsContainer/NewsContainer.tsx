import { AnimeType } from "@/types/anime";
import { NewDataType } from "@/types/news";
import NewsCards from "../NewsCards";

export default function NewsContainer({DataNews}:{DataNews:NewDataType}){
    return(
        <div className=" flex flex-col justify-center pb-4 mx-1">
            {DataNews.data.slice(0,5).map((data)=>(
                <NewsCards DataNews={data}/>
            ))
            }
        </div>
    )
}