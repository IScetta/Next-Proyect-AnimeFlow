import { AnimeType, DataAnimeType } from "@/types/anime";
import Image from "next/image";
import Link from "next/link";

export default function TopAnimeCards({ TopAnime }: { TopAnime:  DataAnimeType}) {
  return (
    <div className="w-[48%] border-2 hover:bg-black/50 border-white/30 mt-2 mr-1">
      <div className="flex flex-row w-full h-full">
        <Link href={`/anime/${TopAnime.mal_id}`} className="p-1 w-[40%]">
        <Image
          className="w-full h-full"
          alt=""
          src={TopAnime.images.webp.image_url}
          width={200}
          height={200}
        />
        </Link>

        <div className="mb-2 w-[60%]">
            <Link href={`/anime/${TopAnime.mal_id}`} className="text-blueWhite p-1 flex justify-center text-sm font-semibold hover:underline hover:underline-offset-4">{TopAnime.title}</Link>
            <h3 className="text-white/80 p-1 text-xs">{TopAnime.synopsis.slice(0,120)}...</h3>
            <div className="text-white/30 p-1 text-xs flex flex-wrap">Genre:{
              TopAnime.genres.map((data, index)=>(
                <h3 key={data.mal_id} className=" text-blueWhite pl-1 ">{data.name}
                {TopAnime.genres.length-1 > index &&
                  <>,</>
                }
                </h3>
              ))
            }</div>
            <div className="flex flex-row items-end ">
                <h3 className="text-blueWhite p-1 text-xs">Score: {TopAnime.score}</h3>
                <h3 className="text-white/30 p-1 text-xs">| ({TopAnime.episodes} episodes)</h3>
            </div>
        </div>
      </div>
    </div>
  );
}
