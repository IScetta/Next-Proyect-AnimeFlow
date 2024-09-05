import { FaSearch } from "react-icons/fa";



export default function SearchBar(){
    return(
        <div className="flex flex-row ">
            <input placeholder=" Anime, manga or more" className="appearance-none focus:outline-none bg-grayDark my-2 p-1 border-2 border-blueWhite rounded-y-md rounded-l-md text-white w-[250px]" type="text" />
            <FaSearch className="flex justify-center text-4xl items-center my-2 p-1 bg-blueWhite rounded-r-md" />
        </div>
    )
}