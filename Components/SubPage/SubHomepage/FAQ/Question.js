import { useState } from "react";
import style from "./style.module.css";

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className={`border-t border-gray-300 px-5 pt-5`}>
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          <p className="text-lg md:text-xl text-gray-600 font-medium">{question}</p>
          <div className="mt-1">
            <div
              className={`w-4 h-1 transform translate-y-full ${
                showAnswer ? "rotate-0 bg-primary" : "rotate-90 bg-gray-300"
              }  transition duration-300 cursor-pointer`}
            ></div>
            <div
              className={`w-4 h-1 transform ${
                showAnswer ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }  bg-gray-300 transition duration-300 cursor-pointer`}
            ></div>
          </div>
        </div>

        <p
          className={` ${
            showAnswer
              ? `${style["FAQ-answer-Open"]}`
              : `${style["FAQ-answer-Close"]}`
          } mt-3 mb-2 text-xs md:text-sm`}
        >
          {answer}
        </p>
      </div>
    </>
  );
};

export default Question;
