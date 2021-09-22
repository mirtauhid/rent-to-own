import React from 'react'

const RentToOwnCard = ({title,imgSrc,content,btnText}) => {
    return (
      <div className="p-5 shadow-lg">
        <p className="text-lg md:text-2xl font-bold text-gray-500 text-center">
          {title}
        </p>
        <div className="w-16 h-16 mx-auto mt-3 mb-3">
          <img src={imgSrc} alt="" />
        </div>

        <p className="text-center text-sm md:text-base text-gray-500 h-56 xs:h-48">
          {content}
        </p>
        <div className="flex justify-center">
          <button className="border-primary border text-primary py-2 px-5 rounded-md mt-10">
            {btnText}
          </button>
        </div>
      </div>
    );
}

export default RentToOwnCard
