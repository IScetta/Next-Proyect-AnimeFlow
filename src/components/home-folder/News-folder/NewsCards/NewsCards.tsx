import { AnimeType, DataAnimeType } from "@/types/anime";
import Image from "next/image";

export default function NewsCards({ TopAnime }: { TopAnime:  DataAnimeType}) {
  return (
    <div className="w-[48%] border-2 hover:bg-black/50 border-white/30 mt-2 mr-1">
      <div className="flex flex-row">
        <Image
          className="p-1 w-[130px]"
          alt=""
          src={TopAnime.images.webp.image_url}
          width={200}
          height={200}
        />

        <div>
            <h2 className="text-blueWhite p-1 text-sm font-semibold">{TopAnime.title}</h2>
            <h3 className="text-white/80 p-1 text-xs">{TopAnime.synopsis.slice(0,120)}...</h3>
            <h3 className="text-white/30 p-1 text-xs flex flex-wrap">Genre:{
              TopAnime.genres.map((data, index)=>(
                <h3 key={data.mal_id} className=" text-blueWhite pl-1 text-xs ">{data.name}
                {TopAnime.genres.length-1 > index &&
                  <>,</>
                }
                </h3>
              ))
            }</h3>
            <div className="flex flex-row items-end ">
                <h3 className="text-blueWhite p-1 text-xs">Score: {TopAnime.score}</h3>
                <h3 className="text-white/30 p-1 text-xs">| ({TopAnime.episodes} episodes)</h3>
            </div>
        </div>
      </div>
    </div>
  );
}
