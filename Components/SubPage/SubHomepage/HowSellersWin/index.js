import React from 'react'
import SellersWinCard from './SellersWinCard'

const data = [
  {
    logo: "/images/Homepage/communities.svg",
    content:
      "Access to a community of hundreds of thoroughly pre-qualified rent-to-own applicants that are eager to become homeowners",
  },
  {
    logo: "/images/Homepage/Page-1.svg",
    content:
      " An opportunity to save upwards of $30k in realtor costs, continue to pay down your mortgage throughout the rent-to-own term, in addition to receive ancillary rental income",
  },
  {
    logo: "/images/Homepage/rental.svg",
    content:
      "Aside from the karma points of selling to deserving Canadians, Rent-to-Own Realty unlocks the most lucrative approach to selling your home",
  },
  {
    logo: "/images/Homepage/rental (1).svg",
    content:
      "A fully turnkey program with top-tier clients with the expectation that nothing more than depositing your pre-dated cheques should be required for these predefined & fully contractual programs",
  },
];

const HowSellersWin = () => {
    return (
      <div className="mx-5 md:mx-20 lg:mx-28 mt-14">
        <div className="mb-6 md:mb-12" style={{ width: "fit-content" }}>
          <div className="w-24 h-1 bg-primary mb-3"></div>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            How Home Sellers Win
          </p>
          <p className="text-gray-500 text-xs md:text-base">
            With Rent-to-Own Realty, individuals looking to sell their homes
            have access to
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-5">
            {
                data.map(({...item},index)=>{
                    return <SellersWinCard {...item} key={index}/>;
                })
            }
        </div>
      </div>
    );
}

export default HowSellersWin
