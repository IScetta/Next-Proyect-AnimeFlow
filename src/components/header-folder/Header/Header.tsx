import Link from "next/link";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";

export default function Header() {
  return (
    <div>
      <div className=" bg-grayDark w-full h-20 flex flex-row justify-between items-center px-14 ">
        <Link href={"/"} className="flex flex-row">
          <h1 className="text-white text-3xl font-bold">Anime</h1>
          <h1 className="text-blueWhite text-3xl font-bold">Flow</h1>
        </Link>
        <div className="">
          <button className="bg-blueWhite text-white mr-4 px-6 py-1 border-2 border-blueWhite  rounded-lg hover:border-white">
            Login
          </button>
          <button className=" text-blueWhite ml-4 px-6 py-1 rounded-lg border-2 border-blueWhite hover:text-white">
            Sing Up
          </button>
        </div>
      </div>
      <div className="bg-grayDark flex flex-row  justify-between px-14">
        <div className=" w-full mr-24">
          <NavBar />
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
