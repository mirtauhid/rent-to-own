import React from 'react'
import BuyersWinCard from './BuyersWinCard'

const data = [
  {
    img: "/images/Homepage/search.svg",
    content:
      " Effortlessly search thousands of real-time availability of rent-to-own properties filtering by location, property type, number of bedrooms, and more",
  },
  {
    img: "/images/Homepage/house-rental.svg",
    content:
      " A streamlined application process to easily apply to live rent-to-own programs in your desired area",
  },
  {
    img: "/images/Homepage/contract.svg",
    content:
      "Standardized rent-to-own agreements and comprehensive a network of professionals",
  },
  {
    img: "/images/Homepage/price.svg",
    content:
      "A proven model helping Canadian’s achieve home-ownership as early as possible and ‘lock-in’ at today’s prices before they escalate out of reach",
  },
];

const HowBuyersWin = () => {
    return (
      <div className="mx-5 md:mx-20 lg:mx-28 mt-14">
        <div className="mb-6 md:mb-12" style={{ width: "fit-content" }}>
          <div className="w-24 h-1 bg-primary mb-3"></div>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            How Home Buyers Win
          </p>
          <p className="text-gray-500 text-xs md:text-base">
            With Rent-to-Own Realty, individuals looking to buy their homes
            have access to
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-5">
            {
                data.map(({...item},index)=>{
                    return <BuyersWinCard {...item} key={index}/>;
                })
            }
        </div>
      </div>
    );
}

export default HowBuyersWin
