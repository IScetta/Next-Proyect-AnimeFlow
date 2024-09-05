import { DataNews } from "@/types/news";
import Image from "next/image";

export default function NewsCards({ dataNews }: { dataNews: DataNews }) {
  return (
    <div className="w-[48%] border-2 border-white/30 mt-2 mr-1">
      <div className="flex flex-row">
        <Image
          className="p-1 w-[130px]"
          alt=""
          src={dataNews.images.jpg.image_url}
          width={200}
          height={200}
        />

        <div>
            <h2 className="text-blueWhite p-1 text-sm font-semibold">{dataNews.title}</h2>
            <h3 className="text-white/80 p-1 text-xs">{dataNews.excerpt}</h3>
            <div className="flex flex-row items-end ">
                <h3 className="text-white/30 p-1 text-xs">by</h3>
                <h3 className="text-blueWhite p-1 text-xs">{dataNews.author_username}</h3>
                <h3 className="text-white/30 p-1 text-xs">| ({dataNews.comments} comments)</h3>
            </div>
        </div>
      </div>
    </div>
  );
}
