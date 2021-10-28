import Link from 'next/link';
import React from 'react';

const SingleImageCard = ({name,img,id}) => {
    return (
      <div className="h-80 w-full rounded-md overflow-hidden relative">
        <img src={img} alt="" className="w-full h-full object-cover" />
        <div
          className="absolute top-0 left-0 w-full h-full pt-5 px-5"
          style={{ background: "rgba(0,0,0,0.4)" }}
        >
          <Link
            href={{
              pathname: "/property",
              query: { state: id },
            }}
          >
            <p className="text-white text-xl lg:text-2xl font-bold capitalize hover:underline cursor-pointer">
              {name}
            </p>
          </Link>
        </div>
      </div>
    );
}

export default SingleImageCard
