import CardsTrailer from "@/components/home-folder/Carousel-folder/CardsTrailer";
import { AnimeTypeByIdFull } from "@/types/anime";
import { IoIosAddCircle } from "react-icons/io";

export default function AnimeDetails({
  dataAnimeFull,
  openModal,
}: {
  dataAnimeFull: AnimeTypeByIdFull;
  openModal: (id: string) => void;
}) {
  return (
    <div>
      <div className="flex flex-row text-white m-2 mx-4 ">
        <div className="flex flex-col mt-2">
          <div className=" flex flex-row border-2 border-white/15">
            <div className=" p-4 ">
              <h2 className="flex justify-center mb-1 px-2 bg-blueWhite">
                Score
              </h2>
              <h1 className="font-extrabold text-4xl">
                {dataAnimeFull.data.score}
              </h1>
              <h3 className="flex justify-center text-xs ">
                {dataAnimeFull.data.scored_by} users
              </h3>
            </div>

            <div className="border-r-2 my-4 border-white/15"></div>

            <div className="flex flex-col w-full mx-2 justify-center">
              <div className="flex flex-row text-base m-2">
                <h2 className="px-2 flex flex-row">
                  Ranked:
                  <div className="font-bold px-2">
                    #{dataAnimeFull.data.rank}
                  </div>{" "}
                </h2>
                <h2 className="px-2 flex flex-row">
                  Popularity:
                  <div className="font-bold px-2">
                    {dataAnimeFull.data.popularity}
                  </div>
                </h2>
                <h2 className="px-2 flex flex-row">
                  Members:
                  <div className="font-bold px-2">
                    {dataAnimeFull.data.members}
                  </div>
                </h2>
              </div>
              <div className="flex flex-row text-xs m-2 text-blueWhite items-end">
                <h3 className="px-2 border-r-2 border-white/30">
                  summer {dataAnimeFull.data.year}
                </h3>
                <h3 className="px-2 border-r-2 border-white/30">
                  {dataAnimeFull.data.type}
                </h3>
                <h3 className="px-2">{dataAnimeFull.data.studios[0].name}</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-center border-2 border-white/15 mt-2 h-full">
            <button className="px-4 py-1 my-2 bg-blueWhite mx-2 flex flex-row rounded-sm border border-blueWhite hover:border-white">
              <IoIosAddCircle className="m-1" /> Add to my List
            </button>
            <button className="px-4 py-1 my-2 text-blueWhite mx-2 border border-blueWhite rounded-sm hover:text-white">
              Add to favorites
            </button>
          </div>
        </div>
        <button
          className="h-full"
          onClick={() => openModal(dataAnimeFull.data.trailer.url)}
        >
          <CardsTrailer
            image_trailer={dataAnimeFull.data.trailer.images.medium_image_url}
            typeCard={false}
          />
        </button>
      </div>
      <div className="flex flex-col p-4 m-4">
        <h2 className="text-white text-xl my-2">Synopsis</h2>

        <p
          className="text-white/50 text-sm border-t-2 py-1 border-white/15"
          dangerouslySetInnerHTML={{
            __html: dataAnimeFull.data.synopsis.replace(/\n/g, "<br />"),
          }}
        />
      </div>

      {dataAnimeFull.data.background && (
        <div className="flex flex-col p-4 m-4">
          <h2 className="text-white text-xl my-2">Backgraund</h2>

          <p
            className="text-white/50 text-sm border-t-2 py-1 border-white/15"
            dangerouslySetInnerHTML={{
              __html: dataAnimeFull.data.background.replace(/\n/g, "<br />"),
            }}
          />
        </div>
      )}
    </div>
  );
}
