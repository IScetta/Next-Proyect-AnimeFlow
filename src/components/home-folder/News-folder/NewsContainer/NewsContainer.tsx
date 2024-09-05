
import { NewDataType } from "@/types/news"
import NewsCards from "../NewsCards"

export default async function NewsContainer({NewData}:{NewData:NewDataType}){
    
    return(
        <div className="flex flex-wrap justify-between w-full h-auto">
            {NewData?.data.map((data,index)=>(
                <div key={index} >
                {index<8 &&
                    <NewsCards dataNews={data}/>
                }
                </div>
            ))}
        </div>
    )
}