import React from 'react'

const SellersWinCard = ({img,content}) => {
    return (
      <div>
        <div className="h-10 w-10">
          <img src={img} alt="" className="w-full h-full"/>
        </div>

        <p className="font-bold mt-4 text-sm">{content}</p>
      </div>
    );
}

export default SellersWinCard
