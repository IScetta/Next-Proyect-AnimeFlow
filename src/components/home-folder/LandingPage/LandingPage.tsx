
import CarouselCards from "../Carousel-folder/CarouselCards";
import CarouselsMajor from "../Carousel-folder/CarouselsMajor";
import { getSeasonNow, getSeasonUpcoming, getTopAnime } from "@/helpers/anime.helper";
import CarouselTrailers from "../Carousel-folder/CarouselTrailers";
import { NewDataType } from "@/types/news";
import { getAnimeNews } from "@/helpers/news.helper";
import { AnimeType } from "@/types/anime";
import TopAnimeContainer from "../Top-Anime-folder/TopAnimeContainer";
import TopAnimeUpcomingCards from "../Top-Anime-Upcoming-folder/TopAnimeUpcomingCards";
import TopAnimeUpcomingContainer from "../Top-Anime-Upcoming-folder/TopAnimeUpcomingContainer";

export default async function LandingPage() {

        const dataAnimeSeasonNow: AnimeType = await getSeasonNow();
        const dataAnimeTop: AnimeType = await getTopAnime();
        const NewsAnime: NewDataType = await getAnimeNews();
        const AnimeUpcoming: AnimeType = await  getSeasonUpcoming();


  if (dataAnimeSeasonNow === null || dataAnimeTop === null || NewsAnime === null || AnimeUpcoming === null) {
    return <div className="flex text-white text-3xl justify-center items-center">Loading...</div> 
  }

  return (
    <div>
      <div className="mt-4">
        <CarouselsMajor />
      </div>

      <div className="flex flex-row mx-36 mt-2">
        <div className="w-[75%]">
          <div>
            <h1 className="text-white mt-2 font-bold">Summer 2024 Anime</h1>
            <CarouselCards dataAnimeSeason={dataAnimeSeasonNow} cont={4} />
          </div>

          <div className="mt-20">
            <h1 className="text-white mt-2 font-bold">Most Popular Anime Trailers</h1>
            <CarouselTrailers dataAnimeTrailer={dataAnimeTop} cont={3} />
          </div>

          <div className="mt-20">
            <h1 className="text-white mt-2 font-bold h-full border-b-4 border-blueWhite">
              Top Anime
            </h1>
            <TopAnimeContainer TopAnime={dataAnimeTop} />
            <div className=" flex justify-center items-center p-2 mt-4 w-[75%] text-white border-2 hover:bg-blueWhite border-blueWhite ">More</div>
          </div>
        </div>

        <div className="  border-blueWhite mt-2 ml-2 border-x-2 w-[25%]">
          <div className="bg-grayDark w-full flex flex-col justify-center items-center">
            <h1 className="text-white  p-2 font-bold h-full border-y-4 border-blueWhite">
              Top Upcoming Anime
            </h1>
            <TopAnimeUpcomingContainer TopAnimeUpcoming={AnimeUpcoming}/>
          </div>

        </div>
      </div>
    </div>
  );
}
