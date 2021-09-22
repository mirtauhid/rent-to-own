import React from "react";
import Link from 'next/link';

const ImageCard = ({name,img}) => {
  return (
    <div className="relative h-full w-full rounded-md overflow-hidden">
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover"
      />

      <div
        className="absolute top-0 left-0 w-full h-full pt-5 px-5"
        style={{ background: "rgba(0,0,0,0.4)" }}
      >
        <Link 
            href={{
              pathname: "/property",
              query: { state: name },
            }}
          >
            <p className="text-white text-2xl font-bold uppercase hover:underline cursor-pointer">{name}</p>
          </Link>
      </div>
    </div>
  );
};

export default ImageCard;
