"use client";

import SearchBar from "../SearchBar";

export default function NavBarDropdown({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string[];
}) {
  return (
      <div className="relative inline-block group">
        <button className="inline-flex justify-center w-full  py-2 font-semibold text-white bg-grayDark   focus:outline-none">
          {title}
        </button>

        <div className="absolute  z-10  origin-top-right border-t-4 border-l-4 border-blueWhite bg-grayDark shadow-lg hidden group-hover:block">
          {subTitle.map((subtitles, index) => (
            <div key={index} className=" ">
              <button className="block m-4 p-2 px-4 text-sm text-white hover:shadow-xl  hover:bg-blueWhite w-full text-left">
                {subtitles}
              </button>
            </div>
          ))}
        </div>
      </div>
  );
}
