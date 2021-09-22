import React from "react";
import Question from "./Question";

const data = [
  {
    question: "What is Rent-To-Own?",
    answer:
      "Rent-To-Own is an award-winning real estate system that helps homeowners sell successfully on their own, saving them thousands in the process.From listing till sold, our private sale, flat-fee approach places home sellers at the core of the process, with full support from an experienced team of experts.",
  },
  {
    question: "What is your philosophy?",
    answer:
      "We believe that the right system, tools and technologies can be used to simplify real estate, and that the person who belongs at the centre of the transaction is... you.",
  },
  {
    question: "Are you a franchise system?",
    answer:
      "Yes. We train and support a network of private sale experts that deliver our full-service offering within their exclusive licensed territories. Learn more about franchise opportunities&nbspor call 1-844-333-7017.",
  },
  {
    question: "Are you hiring?",
    answer:
      "Absolutely, we’re always looking to meet new people who believe real estate is broken and are passionate about fixing it. If you like to move fast, connect the dots, and not take yourself too seriously - you sound like our people. Check out our current opportunities.",
  },
  {
    question: "Are you looking for partners?",
    answer:
      "Yes, we’re always looking to hear new ideas, and build relationships with like-minded people and organizations. Fee free to reach out at",
  },
];

const GeneralFAQ = ({ tab }) => {
  return (
    <div className={`mt-10 w-full mb-10`}>
      {data.map(({ ...item }, index) => {
        return <Question {...item} key={index} />;
      })}
    </div>
  );
};

export default GeneralFAQ;
