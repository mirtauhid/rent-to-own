import React from "react";
import Question from "./Question";

const data = [
  {
    question: "I'm interested in buying a home I see on your website, what are the next steps?",
    answer:
      "Simply click \"Apply\" next to the listing. Check that you meet the minimum requirements and complete the online form. Then we'll discuss further over the phone in detail about the program, the numbers, and if it's a right fit for you. Then, if you decide to put in a formal offer on the home, a deposit is required (fully refundable if your offer isn't accepted by the seller) and we'll present the offer to the home seller. Ultimately the home seller will decide on which offer they accept (if they receive multiple offers).",
  },
  {
    question: "How do I view a home I like?",
    answer:
      "Once you’re Pre-Approved by RTOR, you’ll be given a maximum purchase price you can go up to. Then you’ll be able to contact the seller directly to set up an appointment to view the home.",
  },
  {
    question: "How much can I be Pre-Approved for?",
    answer:
      "Your maximum home purchase price depends on factors such as down payment, income/employment, credit scenario, etc. We’ll help determine the best fit for you.",
  },
  {
    question: "Do I apply for a mortgage now or later?",
    answer:
      'During your “rental” term, you’re not applying for a mortgage, you’re simply renting. When you’re exiting the program, you apply for a mortgage to purchase the home. You’re free to choose your own lender or mortgage broker, and we can also recommend some if needed.',
  },
  {
    question: "How do I know this program will be successful for me?",
    answer:
      "Whether you're a home seller or buyer, the success of the program comes down to both parties being committed and abiding by the terms of the Rent to Own Agreement. There are clear rules/regulations that both parties agree to upfront. We’re confident we have the tools and resources to help achieve your real estate goals and our company has over a 90% success rate.",
  },
  {
    question: "I have my own Real Estate Agent I'd like to work with, is that possible and how does that work?",
    answer:
      "RTOR is simply a marketplace connecting home sellers and buyers through our tested and proven rent to own program. We give both parties the tools and best practices needed to succeed. Normally, rent to own programs are successful without the need for a Real Estate Agent. However, we are open to discussing working with your Real Estate Agent on a case-by-case basis. Please contact us for more details.",
  },
];

const BuyerFAQ = ({ tab }) => {
  return (
    <div
      className={`mt-10 w-full mb-10`}
    >
      {data.map(({...item},index) => {
        return <Question {...item} key={index}/>;
      })}
    </div>
  );
};

export default BuyerFAQ;
