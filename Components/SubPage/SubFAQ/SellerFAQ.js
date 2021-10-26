import React from 'react';
import Question from './Question';

const data = [
  {
    question: "How difficult or time-consuming is this going to be?",
    answer: "RTOR’s goal is to give you the tools and knowledge to sell your home via a rent-to-own program in a simple and transparent manner. RTOR will connect you with qualified prospects who are interested in buying your home, give you access to our tools and legal documents, and set the stage for you to complete your home sale journey via a rent-to-own program that is designed to maximize your profit. Ultimately you will see things through to the finish line, but we will be here to guide you and answer any questions along the way.",
  },
  {
    question: "Are you a real estate brokerage?",
    answer:
      "No. We’re Canada’s only rent-to-own marketplace designed to connect home buyers and sellers utilizing a rent-to-own program to help achieve their home ownership/selling goals.",
  },
  {
    question: "Is rent-to-own right for me?",
    answer:
      "There are many reasons why rent-to-own may be the right solution for you as a home seller. Some of the those include: selling your home for a larger net profit margin versus traditional sale methods, some aspects of your property may be less desirable to traditional buyers, current market conditions may pose some challenges in getting a sale, and savings of thousands of dollars in commissions.",
  },
  {
    question: "What are your fees and do I have to pay up front?",
    answer:
      "RTOR charges sellers a listing fee of $499, which we refund 100% if we don’t find you a buyer within 90 days. If we do find you a buyer, RTOR’s 3% fee is simply taken from the buyer’s deposit. Sellers don’t pay this up front.",
  },
  {
    question: "What’s the difference between selling in a traditional way and selling through RTOR?",
    answer:
      "Selling your home via rent-to-own can maximize your profits, alleviate selling challenges due to property aspects or market conditions, and avoid paying costly commissions. Traditional sale methods often don’t address or impact these important matters.",
  },
  {
    question: "Am I on my own? Do I have to take the calls?",
    answer:
      "All general inquiries about RTOR, how the rent-to-own program works, and Pre-Approving/finding buyers is handled by RTOR. All showings/home visits are arranged and conducted by the seller and buyer amongst themselves at a mutually convenient time. You know your house best, now it’s time to show to show your Pre-Approved buyer around! Our experienced and knowledgeable team operates 7 days a week and can help answer any questions you may have along the way.",
  },
  {
    question: "Someone contacted me directly to rent-to-own my house....now what?",
    answer:
      "You’ll want to make sure the buyer meets the minimum criteria and is Pre- Approved by RTOR. Before any showings or commitments, simply have the buyer contact us to get qualified. Then we’ll present you with their application, and you will conduct your own showing if desired. If both parties want to officially enter into a rent-to-own agreement, RTOR will coordinate accordingly.",
  },
  {
    question: "I’m interested in selling my home through your rent to own marketplace, how do I know the buyer is qualified?",
    answer:
      "Every buyer is vetted by our Team and must meet the minimum criteria in order to qualify for your specific property. This includes income/employment verification, confirmation of deposit/down payment funds, ID verification, a credit check, and additional due diligence to ensure we are aligning only the best qualified buyers with you.",
  },
  {
    question: "My house is currently listed for sale with a Realtor, can I switch?",
    answer:
      "Normally, if your home is already listed for sale with a Realtor, you will have an obligation to that agreement/contract for a certain period of time. However, if that is expiring at some point or if you decide to take your home off MLS, speak with us to see when and if it makes sense for you to sell your home via a rent-to-own program.",
  },
];


const SellerFAQ = ({tab}) => {
    return (
      <div className={`mt-10 w-full mb-10`}>
        {data.map(({...item},index) => {
          return <Question {...item} key={index}/>;
        })}
      </div>
    );
}

export default SellerFAQ
