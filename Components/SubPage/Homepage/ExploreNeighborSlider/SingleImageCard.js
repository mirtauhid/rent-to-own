import React from 'react'

const SingleImageCard = ({name}) => {
    return (
      <div className="h-80 w-full rounded-md overflow-hidden relative">
        <img
          src="/images/Homepage/Background.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className="absolute top-0 left-0 w-full h-full pt-5 px-5"
          style={{ background: "rgba(0,0,0,0.4)" }}
        >
          <p className="text-white text-2xl font-bold uppercase">{name}</p>
        </div>
      </div>
    );
}

export default SingleImageCard
