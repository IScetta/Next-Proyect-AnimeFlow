
import { DataNews } from "@/types/news";
import Image from "next/image";


export default function NewsCards({DataNews}:{DataNews:DataNews}){
    return(
        <div className="flex flex-row bg-black/40 h-full mt-4 mx-2 border-2 border-white/30 ">
            <Image alt="" className="w-[40%] m-1" src={DataNews.images.jpg.image_url} width={200} height={200}/>
            <div className="mb-2">
                <h3 className="text-blueWhite text-base font-semibold m-1 hover:underline hover:underline-offset-auto">{DataNews.title}</h3>
                <h4 className="text-white/40 text-xs ml-2 m-1 ">{DataNews.excerpt.slice(0,50)}...</h4>
                <h4 className="text-white/40 text-xs ml-2 m-1 flex flex-row">From: <div className="text-blueWhite ml-1">{DataNews.author_username}</div></h4>
            </div>
        </div>
    )
}