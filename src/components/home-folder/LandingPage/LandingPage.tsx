
import CarouselCards from "../Carousel-folder/CarouselCards";
import CarouselsMajor from "../Carousel-folder/CarouselsMajor";
import { getSeasonNow, getSeasonUpcoming, getTopAnime } from "@/helpers/anime.helper";
import CarouselTrailers from "../Carousel-folder/CarouselTrailers";
import { NewDataType } from "@/types/news";
import { getAnimeNews } from "@/helpers/news.helper";
import { AnimeType } from "@/types/anime";
import TopAnimeContainer from "../Top-Anime-folder/TopAnimeContainer";
import TopAnimeUpcomingContainer from "../Top-Anime-Upcoming-folder/TopAnimeUpcomingContainer";
import { getTopManga } from "@/helpers/manga.helper";
import NewsContainer from "../News-folder/NewsContainer";

export default async function LandingPage() {

        const dataAnimeSeasonNow: AnimeType = await getSeasonNow();
        const dataAnimeTop: AnimeType = await getTopAnime();
        const dataNews: NewDataType = await getAnimeNews();
        const AnimeUpcoming: AnimeType = await  getSeasonUpcoming();
        const dataTopManga:AnimeType = await getTopManga()


  if (dataAnimeSeasonNow === null || dataAnimeTop === null || dataNews === null || AnimeUpcoming === null) {
    return <div className="flex text-white text-3xl justify-center items-center">Loading...</div> 
  }

  return (
    <div>
      <div className="mt-4">
        <CarouselsMajor />
      </div>

      <div className="flex flex-row mx-14 mt-2">
        <div className="w-[70%]">
          <div>
            <h1 className="text-white mt-2 font-bold">Summer 2024 Anime</h1>
            <CarouselCards dataApiList={dataAnimeSeasonNow} type="anime" cont={4} />
          </div>

          <div className="mt-20">
            <h1 className="text-white mt-2 font-bold">Most Popular Anime Trailers</h1>
            <CarouselTrailers dataAnimeTrailer={dataAnimeTop} cont={3} />
          </div>

          <div className="mt-20">
            <h1 className="text-white mt-2 font-bold">Top Manga</h1>
            <CarouselCards dataApiList={dataTopManga} type="manga" cont={4} />
          </div>

          <div className="mt-20">
            <h1 className="text-white mt-2 font-bold h-full border-b-4 border-blueWhite">
              Top Anime
            </h1>
            <TopAnimeContainer TopAnime={dataAnimeTop} />
            <div className="flex justify-center items-center w-full">
              <div className=" flex justify-center items-center p-1 px-8 mt-4 w-fit  text-white border-2 hover:bg-blueWhite border-blueWhite ">More</div>
            </div>
          </div>


        </div>


        <div className="  border-blueWhite ml-2 border-x-2 w-[30%] ">

          <div className=" w-full flex flex-col justify-center items-center mt-2">
            <h1 className="text-white p-2 font-bold h-full border-y-4 border-blueWhite">
              News Manga & Anime
            </h1>
            <NewsContainer DataNews={dataNews}/>
          </div>

          <div className=" w-full flex flex-col justify-center items-center mt-72">
            <h1 className="text-white p-2 font-bold h-full border-y-4 border-blueWhite">
              Top Upcoming Anime
            </h1>
            <TopAnimeUpcomingContainer TopAnimeUpcoming={AnimeUpcoming}/>
          </div>



        </div>
      </div>
    </div>
  );
}
