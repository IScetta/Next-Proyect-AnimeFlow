import Image from "next/image"

export default function Cards({
  image,
  title,
  mal_id,
}: {
  image: string;
  title: string;
  mal_id: number;
}) {
  return (
    <div className="flex justify-center items-end pt-2 p-1 border-t-4 border-blueWhite hover:scale-105 ">
        <Image className="  object-cover " src={image} alt="" width={400} height={400}/>
        <div className="absolute m-1 z-10 inset-0 bg-gradient-to-t from-black/60 to-transparent hover:to-black/80"></div>
        <h1 className="text-white absolute z-20 m-2 text-sm text-center">{title}</h1>
    </div>
  );
}
