import { getAnimeEpisodes } from "@/helpers/anime.helper";
import { AnimeEpisodiesType, AnimeTypeByIdFull } from "@/types/anime";
import { format } from "date-fns";
import { useEffect, useState } from "react";

export default function AnimeEpisodes({
  dataAnimeFull,
}: {
  dataAnimeFull: AnimeTypeByIdFull;
}) {
  const [animeEpisodies, setAnimeEpisodies] =
    useState<AnimeEpisodiesType | null>(null);

  const [pagination, setPagination] = useState<number>(1);
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const fechData = async () => {
      try {
        const response = await getAnimeEpisodes(
          dataAnimeFull.data.mal_id,
          pagination
        );
        const cont = [];
        for (
          let i: number = 0;
          i < response.pagination.last_visible_page;
          i++
        ) {
          cont.push(i + 1);
        }
        setPages(cont);
        setAnimeEpisodies(response);
      } catch (error) {
        console.log(error);
      }
    };
    fechData();
  }, [dataAnimeFull, pagination]);

  console.log(pages);

  if (!animeEpisodies) {
    return (
      <div className="flex text-white/50  my-52 text-2xl justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col text-white m-2 mx-4 ">
      <h2 className="text-white border-b-2 border-blueWhite mb-2">Episodes</h2>

      <div className={`flex flex-row  justify-center items-center `}>
        <button
          onClick={() => setPagination(pagination - 1)}
          disabled={pagination === 1}
          className={`flex justify-center items-center px-1 mx-1 my-2 hover:text-blueWhite hover:border-b-2 hover:border-blueWhite`}
        >
          {`<`}
        </button>

        {pages.map((page) => (
          <button
            onClick={() => setPagination(page)}
            className={`flex justify-center items-center px-1 mx-1 my-2 hover:border-b-2 hover:border-blueWhite ${
              pagination === page && "text-blueWhite border-b-2 border-blueWhite"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setPagination(pagination + 1)}
          disabled={pagination === animeEpisodies.pagination.last_visible_page}
          className={`flex justify-center items-center px-1 mx-1 my-2 hover:text-blueWhite hover:border-b-2 hover:border-blueWhite`}
        >
          {`>`}
        </button>
      </div>

      <div>
        <div className="flex flex-row bg-black/30  border border-white/30">
          <h1 className="text-white  border-r border-white/30 flex justify-center items-center w-10">
            {" "}
          </h1>
          <h1 className="text-white text-sm p-2 flex justify-center border-x border-white/30 w-[55%]">
            Episode Title
          </h1>
          <h1 className="text-white text-sm p-2 flex justify-center border-x border-white/30 w-[15%]">
            Aired
          </h1>
          <h1 className="text-white text-sm p-2 flex justify-center border-x border-white/30 w-[15%]">
            Poll{" "}
          </h1>
          <h1 className="text-white text-sm p-2 flex justify-center border-x border-white/30 w-[15%]">
            Replies{" "}
          </h1>
        </div>
        {animeEpisodies?.data.map((episode) => (
          <div className="flex flex-row border border-white/30">
            <h1 className="text-white  border-r border-white/30 flex justify-center items-center w-10">
              {episode.mal_id}
            </h1>
            <div className="flex flex-col p-2 justify-start border-x  items-center border-white/30 w-[55%]">
              <h1 className="text-blueWhite text-sm ">{episode.title} </h1>
              {episode.title_romanji && (
                <h1 className="text-white/50 text-sm flex justify-start">
                  {" "}
                  {episode.title_romanji}{" "}
                </h1>
              )}
            </div>
            <h1 className="text-white text-xs p-2 flex justify-center items-center border-x border-white/30 w-[15%]">
              {format(new Date(episode.aired), "dd MMM, yyyy")}
            </h1>
            <h1 className="text-blueWhite  p-2 flex flex-col justify-center items-center border-x border-white/30 w-[15%]">
              Vote{" "}
              <div className="text-white text-xs mt-1 flex justify-center">
                Average: {episode.score}
              </div>
            </h1>
            <h1 className="text-white text-sm p-2 flex justify-center items-center border-x border-white/30 w-[15%]">
              Replies{" "}
            </h1>
          </div>
        ))}
      </div>

      <div className={`flex flex-row  justify-center items-center `}>
        <button
          onClick={() => setPagination(pagination - 1)}
          disabled={pagination === 1}
          className={`flex justify-center items-center px-1 mx-1 my-2 hover:text-blueWhite hover:border-b-2 hover:border-blueWhite`}
        >
          {`<`}
        </button>

        {pages.map((page) => (
          <button
            onClick={() => setPagination(page)}
            className={`flex justify-center items-center px-1 mx-1 my-2 hover:border-b-2 hover:border-blueWhite ${
              pagination === page && "text-blueWhite border-b-2 border-blueWhite"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setPagination(pagination + 1)}
          disabled={pagination === animeEpisodies.pagination.last_visible_page}
          className={`flex justify-center items-center px-1 mx-1 my-2 hover:text-blueWhite hover:border-b-2 hover:border-blueWhite`}
        >
          {`>`}
        </button>
      </div>
    </div>
  );
}
