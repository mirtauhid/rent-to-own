import React from 'react';


const SellersWinCard = ({logo,content}) => {
    return (
      <div>
        <div className="h-10 w-10">
          <img src={logo} className="h-full w-full"/>
        </div>

        <p className="font-bold mt-4 text-sm">{content}</p>
      </div>
    );
}

export default SellersWinCard
