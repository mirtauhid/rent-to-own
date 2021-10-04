import React from "react";
import RentToOwnCard from "./RentToOwnCard";

const data = [
  {
    title: "I'm a Home Seller",
    imgSrc: "/images/Homepage/sell.svg",
    content:
      "List your property and find a fitting candidate to purchase it from you over a 6 – 36 month rent-to-own period. With Rent-to-Own Realty’s thorough underwriting, you know that each applicant has been pre-qualified and is a viable applicant. Ultimately, you decide which individual you want to rent to but we provide you access to hundreds of potential applicants as well as all the modern documentation necessary to underwrite any rent-to-own agreement.",
    btnText: "List Home",
  },

  {
    title: "I'm a Home Buyer",
    imgSrc: "/images/Homepage/sold-Icons.svg",
    content:
      "With Rent-to-Own Realty, individuals can get access to properties allowing you to become a homeowner today! Our powerful tools can help you find, apply, and even enter into a purchase agreement in a few simple steps. Why wait? Become a homeowner today!",
    btnText: "Search Homes",
  },
];

const RentToOwnWin = () => {
  return (
    <div className="mx-5 md:mx-20 lg:mx-28 mt-12 md:mt-24">
      <div className="mx-auto md:mb-10" style={{ width: "fit-content" }}>
        <div className="w-24 h-1 bg-primary mx-auto mb-3"></div>
        <p className="text-xl md:text-2xl lg:text-3xl font-bold capitalize">Rent-to-Own for the Win Win</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-2 md:gap-5">
        {data.map(({ ...item },index) => {
          return <RentToOwnCard {...item} key={index}/>;
        })}
      </div>
    </div>
  );
};

export default RentToOwnWin;
