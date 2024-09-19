import { AnimeStatisticsType, AnimeTypeByIdFull } from "@/types/anime";
import GraficStats from "./GraficStats";
import { useEffect, useState } from "react";
import { getAnimeStatistics } from "@/helpers/anime.helper";


export default function AnimeStats({dataAnimeFull}:{dataAnimeFull:AnimeTypeByIdFull}){

    const [dataScore, setDataScore] = useState<string[] >([])
    const [dataVotes, setDataVotes] = useState<number[] >([])
    const [dataStats, setDataStats] = useState<AnimeStatisticsType | null>(null)

    useEffect(()=>{
        const fechData = async ()=>{
            try {
                const response:AnimeStatisticsType = await getAnimeStatistics(dataAnimeFull.data.mal_id)
                const score = []
                const votes = []
                for (let i = 0; i < response.data.scores.length; i++) {
                    score.push(`score ${response.data.scores[i].score}`)
                    votes.push(response.data.scores[i].votes)
                }
                setDataScore(score.reverse())
                setDataVotes(votes.reverse())
                setDataStats(response)       
            } catch (error) {
                console.error(error)
            }
        }
        fechData()
    },[dataAnimeFull])

    if(!dataStats){
        return(
            <div className="flex text-white/50 w-screen my-52 text-2xl justify-center items-center">
                Loading...
            </div>
        )
      }

    return (
        <div className=" text-white m-4 p-2">
            <h2 className="text-white border-b-2 border-blueWhite mb-2">Score Stats</h2>
            <GraficStats labels={dataScore} dataPoints={dataVotes}/>
            <h2 className="text-white border-b-2 mt-2 border-blueWhite mb-2">Summary Stats</h2>
            <div className="text-sm ml-2 text-white/50">
                <h2 className="mb-2 ">Watching: {dataStats.data.watching.toLocaleString()}</h2>
                <h2 className="mb-2 ">Completed: {dataStats.data.completed.toLocaleString()}</h2>
                <h2 className="mb-2 ">On-Hold: {dataStats.data.on_hold.toLocaleString()}</h2>
                <h2 className="mb-2 ">Dropped: {dataStats.data.dropped.toLocaleString()}</h2>
                <h2 className="mb-2 ">Plan to Watch: {dataStats.data.plan_to_watch.toLocaleString()}</h2>
                <h2 className="mb-2 ">Total: {dataStats.data.total.toLocaleString()}</h2>
            </div>
        </div>
    )
}