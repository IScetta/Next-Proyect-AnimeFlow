import { getAnimeReviews } from "@/helpers/anime.helper";
import { AnimeReviewType, AnimeTypeByIdFull } from "@/types/anime";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";


export default function AnimeReviews({dataAnimeFull}:{dataAnimeFull:AnimeTypeByIdFull}){

    const [dataReviews, setDataReviews] = useState<AnimeReviewType | null>(null)

    useEffect(()=>{
        const fechData = async ()=>{
            try {
                const response:AnimeReviewType = await getAnimeReviews(dataAnimeFull.data.mal_id)
                setDataReviews(response)       
            } catch (error) {
                console.error(error)
            }
        }
        fechData()
    },[dataAnimeFull])


    if(!dataReviews){
        return(
            <div className="flex text-white/50  my-52 text-2xl justify-center items-center">
                Loading...
            </div>
        )
      }

    return (
        <div className="text-white flex flex-col mx-4">
            <h2 className="text-white border-b-2 border-blueWhite my-2 ">Reviews</h2>
            {dataReviews?.data.map((review)=>(
                <ReviewCard key={review.mal_id} review={review}/>
            ))

            }
        </div>
    )
}