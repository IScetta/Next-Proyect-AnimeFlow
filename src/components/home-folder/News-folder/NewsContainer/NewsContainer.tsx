
import { NewDataType } from "@/types/news"
import NewsCards from "../NewsCards"

export default async function NewsContainer({NewData}:{NewData:NewDataType | null }){
    
    return(
        <div className="flex flex-wrap justify-around w-full h-auto">
            {NewData?.data.map((data,index)=>(
                <>
                {index<8 &&
                    <NewsCards dataNews={data}/>
                }
                </>
            ))}
        </div>
    )
}