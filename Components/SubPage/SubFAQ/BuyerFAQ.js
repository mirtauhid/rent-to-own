import React from "react";
import Question from "./Question";

const data = [
  {
    question: "How can I visit a home I like?",
    answer:
      'From any listing profile, click or tap the "Message seller" button and follow the simple steps. Alternatively, our support team can help you arrange a showing at 1-855-742-4539',
  },
  {
    question: "How much can I afford?",
    answer:
      "Ultimately, that depends on a few important aspects of your lifestyle including income, down payment, and credit score. Talk to a mortgage expert today.",
  },
  {
    question: "Can you help secure a mortgage?",
    answer:
      "Yes, our mortgage partners will help get the banks competing for your business. Learn more by visiting our mortgage solutions page.",
  },
  {
    question: "How do I make an offer?",
    answer:
      'From any listing profile, click or tap the "Make an offer" button and follow the simple steps. Alternatively, you can communicate directly with the seller by telephone or email or through your respective lawyers. If you require assistance making an offer, please call 1-888-469-7570.',
  },
  {
    question: "Are buyer’s agents welcome?",
    answer:
      "Yes, however, your agent will likely want to contact the seller to agree on any buyer-side commission payable on the transaction. Also, where available, buyer’s agents can take advantage of our lock-box service to show properties to their buyers without the seller needing to be home.",
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
