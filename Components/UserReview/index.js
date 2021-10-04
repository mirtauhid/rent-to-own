import React from "react";
import Review from "./Review";
import Marquee from "react-fast-marquee";

const data = [
  {
    review:
      "We're glad we found Rent to Own Realty! We thought about selling our house the traditional way but after looking at all the numbers and the process, we were able to get about $40,000 more in our pocket. Highly recommend taking a look at this company.",
    name: "- Mike P. | Saskatoon, SK",
  },
  {
    review:
      "We are new to Canada and could not do the large down payment required to get a mortgage right away so we decided to go the rent to own route. Easy program and we love our new home, thank you.",
    name: "- Stuart A. | Edmonton, AB",
  },
  {
    review:
      "I wish more people knew about rent to own options. We sold our home through this company and Perry was great in providing all the details. No pressure or hassles, just great information and a simple program.",
    name: "- Rob V. | Orangeville, ON",
  },
  {
    review:
      "I got a call from RTOR about my house that I listed for sale. I never really knew the details about rent to own before but after understanding everything, this was a no brainer for me. They match you up with a buyer, save you a bunch of money, and guide you the whole way.",
    name: "- Tyler B. | Winnipeg, MB",
  },
  {
    review:
      "Rent to own is not confusing with this company. Straight forward program, they make expectations clear for both sellers/buyers, and great customer support along the way.",
    name: "- Dax C. | Kelowna, BC",
  },
];

const UserReview = () => {

  return (
    <div className="mt-20">
      <Marquee speed={"80"} gradient={false} pauseOnHover={true}>
        
          {data.map(({ ...item }, index) => (
            <Review {...item} key={index} />
          ))}
        
      </Marquee>
    </div>
  );
};

export default UserReview;
