"use client";
import { getAnimeCharacters, getAnimeStaff } from "@/helpers/anime.helper";
import { AnimeCharacterType, AnimeTypeByIdFull } from "@/types/anime";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AnimeStaff({
  dataAnimeFull,
}: {
  dataAnimeFull: AnimeTypeByIdFull;
}) {
  const [animeStaff, setAnimeStaff] = useState<AnimeCharacterType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAnimeCharacters(dataAnimeFull.data.mal_id);
        setAnimeStaff(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [dataAnimeFull]);


  if(!animeStaff){
    return(
        <div className="flex text-white/50  my-52 text-2xl justify-center items-center">
            Loading...
        </div>
    )
  }

  return (
    <div className=" ">
      <div className="flex flex-col text-white m-2 mx-4 ">
        <h2 className="text-white border-b-2 border-blueWhite">Characters & Voice Actors</h2>
        <div className="flex flex-col m-2">
          {animeStaff?.data.map((data,index) => (
            <div key={index} className="flex flex-row border border-white/15 mb-2">
              <div>
                <h3 className="text-white my-2 mx-1 w-[200px]">{data.character.name}</h3>
                <Image
                  alt=""
                  className="m-2 rounded-sm"
                  src={data.character.images.jpg.image_url}
                  width={75}
                  height={100}
                />
              </div>
              <div className="flex flex-wrap justify-between">
                {data.voice_actors.map((actor) => (
                  <div key={actor.person.mal_id} className="border border-white/50 flex flex-row m-1 w-[200px] bg-black/30">
                    <Image
                      alt=""
                      className=" m-2 rounded-sm w-[75px] h-[100px]"
                      src={actor.person.images.jpg.image_url}
                      width={75}
                      height={100}
                    />
                    <div className="flex flex-col m-1">
                    <h1 className="text-blueWhite">{actor.person.name}</h1>
                    <h3 className="text-white/50 text-sm">{actor.language}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
