"use client";
import { AnimeReviewDataType } from "@/types/anime";
import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaChevronDown, FaChevronUp, FaRegStar, FaStar } from "react-icons/fa6";
import { MdAddReaction } from "react-icons/md";

export default function ReviewCard({
  review,
}: {
  review: AnimeReviewDataType;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="flex flex-row m-1 text-white border border-white/15">
        <div className="w-[80px] mr-2">
          <Image
            className="w-[75px] border border-white/15  p-1 m-1 "
            src={review.user.images.jpg.image_url}
            alt=""
            width={200}
            height={200}
          />
        </div>

        <div className="w-fit">
            <div className="flex flex-row justify-between mx-2 my-1">
                <h1 className="text-blueWhite text-sm m-1">{review.user.username}</h1>
                <h1 className="text-white/50 text-xs m-1">{format(new Date(review.date), "dd MMM, yyyy")}</h1>
            </div>
          <div className="flex flex-row">
            {review.tags.map((tags,index) => (
              <div key={index} className="flex justify-center items-center mx-1">
                {tags === "Recommended" && (
                  <h1 className="flex flex-row py-1 px-2 justify-center items-center bg-white/10 text-xs rounded-sm text-blueWhite">
                    <FaStar className="m-1 ml-0 text-xs" />
                    {tags}
                  </h1>
                )}
                {tags === "Not Recommended" && (
                  <h1 className="flex flex-row py-1 px-2 justify-center items-center bg-white/10 text-xs rounded-sm text-red-400">
                    <FaRegStar className="m-1 ml-0" />
                    {tags}
                  </h1>
                )}
                {tags === "Mixed Feelings" && (
                  <h1 className="flex flex-row py-1 px-2 justify-center items-center bg-white/10 text-xs rounded-sm text-white/70">
                    <FaStarHalfAlt className="m-1 ml-0" />
                    {tags}
                  </h1>
                )}
                {tags === "Preliminary" && (
                  <h1 className=" text-white/40 text-xs py-1 px-2">{tags}</h1>
                )}

                {tags !== "Preliminary" &&
                tags !== "Not Recommended" &&
                tags !== "Recommended" &&
                tags !== "Mixed Feelings" ? (
                  <h1 className=" text-white/40 bg-white/10 text-xs py-1 px-2">
                    {tags}
                  </h1>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
          {isOpen ? (
            <p
              className="text-xs m-2"
              dangerouslySetInnerHTML={{
                __html: review.review.replace(/\n/g, "<br />"),
              }}
            />
          ) : (
            <p
              className="text-xs m-2"
              dangerouslySetInnerHTML={{
                __html:
                  review.review.replace(/\n/g, "<br />").slice(0, 1000) + "...",
              }}
            />
          )}

          <div className="flex flex-row justify-start items-center m-2">
            <button
                className="flex flex-row justify-center m-2 items-center text-white/50 text-xs bg-white/10 p-1 px-2 rounded-sm"
                
              >
                <MdAddReaction className="mr-1 text-yellow-400" />{review.reactions.overall}
              </button>
            {isOpen ? (
              <button
                className="flex flex-row justify-center m-2 items-center text-white/50 text-xs bg-white/10 p-1 px-2 rounded-sm"
                onClick={() => setIsOpen(!isOpen)}
              >
                Read more <FaChevronUp className="ml-1 text-blueWhite" />
              </button>
            ) : (
              <button
                className="flex flex-row justify-center m-2 items-center text-white/50 text-xs bg-white/10 p-1 px-2 rounded-sm"
                onClick={() => setIsOpen(!isOpen)}
              >
                Read more <FaChevronDown className="ml-1 text-blueWhite" />
              </button>
            )}
            <button
                className="flex flex-row justify-center m-2 items-center text-white/50 text-xs bg-white/10 p-1 px-2 rounded-sm"
                
              >
                <FaArrowUpRightFromSquare className="mr-1 text-green-400" />Open
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
