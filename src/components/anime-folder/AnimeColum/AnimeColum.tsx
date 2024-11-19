import { AnimeTypeByIdFull } from "@/types/anime";

export default function AnimeColum({
  dataAnimeFull,
}: {
  dataAnimeFull: AnimeTypeByIdFull;
}) {
  return (
    <div>
      <div className="text-xs m-2 w-[250px]">
        <h1 className="text-white text-sm font-bold border-b-2 border-white/15 mb-1 p-1 ">
          Alternative Titles
        </h1>
        {dataAnimeFull.data.title_english && (
          <h1 className="flex flex-row text-white font-semibold mb-2">
            English:{" "}
            <div className="mx-1 font-normal">
              {dataAnimeFull.data?.title_english}
            </div>
          </h1>
        )}

        {dataAnimeFull.data.title_japanese && (
          <h1 className="flex flex-row text-white font-semibold mb-2">
            Japanese:{" "}
            <div className="mx-1 font-normal ">
              {dataAnimeFull.data?.title_japanese}
            </div>
          </h1>
        )}

        {dataAnimeFull.data.title_synonyms[0] && (
          <h1 className="flex flex-row text-white font-semibold mb-2">
            Synonyms:{" "}
            <div className=" mx-1 font-normal flex flex-wrap">
              {dataAnimeFull.data.title_synonyms.map((data, index) => (
                <h3 key={data} className=" text-white pl-1 ">
                  {data}
                  {dataAnimeFull.data.title_synonyms.length - 1 > index && (
                    <>,</>
                  )}
                </h3>
              ))}
            </div>
          </h1>
        )}
      </div>

      <div className="text-xs m-2 mt-20">
        <h1 className="text-white text-sm font-bold border-b-2 border-white/15 mb-1 p-1 ">
          Information
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Type:{" "}
          <div className="mx-1 font-normal text-blueWhite">
            {dataAnimeFull.data.type}
          </div>
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Episodes:{" "}
          <div className="mx-1 font-normal">{dataAnimeFull.data.episodes}</div>
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Status:{" "}
          <div className="mx-1 font-normal ">{dataAnimeFull.data.status}</div>
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Aired:{" "}
          <div className="mx-1 font-normal ">
            {dataAnimeFull.data.aired.from}
          </div>
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Premiered:{" "}
          <div className="mx-1 font-normal text-blueWhite">
            {dataAnimeFull.data.season}
          </div>
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Broadcast:{" "}
          <div className="mx-1 font-normal ">
            {dataAnimeFull.data.broadcast.time}
          </div>
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Producers:{" "}
          <div className="mx-1 font-normal text-blueWhite">
            {dataAnimeFull.data.producers[0]?.name}
          </div>
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Licensors:{" "}
          <div className="mx-1 font-normal text-blueWhite">
            {dataAnimeFull.data.licensors[0]?.name}
          </div>
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Studios:{" "}
          <div className="mx-1 font-normal text-blueWhite">
            {dataAnimeFull.data.studios[0]?.name}
          </div>
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Source:{" "}
          <div className="mx-1 font-normal ">{dataAnimeFull.data.source}</div>
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Genre:{" "}
          <div className=" mx-1 font-normal text-blueWhite flex flex-wrap">
            {dataAnimeFull.data.genres.map((data, index) => (
              <h3 key={data.mal_id} className=" text-blueWhite pl-1 ">
                {data.name}
                {dataAnimeFull.data.genres.length - 1 > index && <>,</>}
              </h3>
            ))}
          </div>
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Themes:{" "}
          <div className="mx-1 font-normal text-blueWhite">
            {dataAnimeFull.data.themes[0]?.name}
          </div>
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Duration:{" "}
          <div className="mx-1 font-normal ">{dataAnimeFull.data.duration}</div>
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Rating:{" "}
          <div className="mx-1 font-normal ">{dataAnimeFull.data.rating}</div>
        </h1>
      </div>

      <div className="text-xs m-2 mt-20">
        <h1 className="text-white text-sm font-bold border-b-2 border-white/15 mb-1 p-1 ">
          Statistics
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Score:{" "}
          <div className="mx-1 font-normal">{dataAnimeFull.data.score}</div>
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Ranked:{" "}
          <div className="mx-1 font-normal ">{dataAnimeFull.data.rank}</div>
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Popularity:{" "}
          <div className="mx-1 font-normal ">
            {dataAnimeFull.data.popularity}
          </div>
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Members:{" "}
          <div className="mx-1 font-normal ">{dataAnimeFull.data.members}</div>
        </h1>
        <h1 className="flex flex-row text-white font-semibold mb-2">
          Favorites:{" "}
          <div className="mx-1 font-normal ">
            {dataAnimeFull.data.favorites}
          </div>
        </h1>
      </div>
    </div>
  );
}
