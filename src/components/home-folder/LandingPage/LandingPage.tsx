
import CarouselCards from "../Carousel-folder/CarouselCards";
import CarouselsMajor from "../Carousel-folder/CarouselsMajor";
import { getSeasonNow, getSeasonUpcoming, getTopAnime } from "@/helpers/anime.helper";
import CarouselTrailers from "../Carousel-folder/CarouselTrailers";
import NewsContainer from "../News-folder/NewsContainer";
import { NewDataType } from "@/types/news";
import { getAnimeNews } from "@/helpers/news.helper";
import { AnimeType } from "@/types/anime";

export default async function LandingPage() {

        const dataAnimeSeasonNow: AnimeType = await getSeasonNow();
        const dataTrailer: AnimeType = await getTopAnime();
        const NewsAnime: NewDataType = await getAnimeNews();
        const AnimeUpcoming: AnimeType = await getSeasonUpcoming();


  if (AnimeUpcoming === null || dataAnimeSeasonNow === null || dataTrailer === null || NewsAnime === null) {
    return <div className="text-white">Loading...</div> 
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
            <CarouselTrailers dataAnimeTrailer={dataTrailer} cont={3} />
          </div>

          <div className="mt-20">
            <h1 className="text-white mt-2 font-bold h-full border-b-4 border-blueWhite">
              Anime & Manga News
            </h1>
            <NewsContainer NewData={NewsAnime} />
          </div>
        </div>

        <div className="  border-blueWhite mt-2 ml-2 border-x-2 w-[25%]">
          <div className="bg-grayDark w-full flex justify-center">
            <h1 className="text-white  p-2 font-bold h-full border-y-4 border-blueWhite">
              Top Upcoming Anime
            </h1>

          </div>

        </div>
      </div>
    </div>
  );
}
