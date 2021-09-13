import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import style from "../style.module.css";

const Requirement = ({formik,setYesButtonClicked}) => {

  const handleSubmit = () =>{
    formik.handleSubmit();
    setYesButtonClicked(true);
  }

  return (
    <div>
      <p className="text-lg font-semibold mt-10">Pre-qualified requirements</p>
      <div className="flex mt-3 mb-3">
        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></div>
        <p>
          Down Payment - 5% of the purchase or $10,000 (whichever is greater)
        </p>
      </div>

      <div className="flex mb-3">
        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></div>
        <p>Annual Income - $50,000 or more (single or combined)</p>
      </div>

      <div className="flex mb-3">
        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></div>
        <p>
          Maximum Home Price - approximately 4x your annual income, up to a
          maximum of $500,000
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mt-5 mb-10">
        <div className="border-2 border-red-400">
          <AiOutlineClockCircle
            fill={"#ff4a4a"}
            className="text-3xl mx-auto mt-3"
          />
          <p className="text-sm text-center mt-3 font-semibold w-2/3 mx-auto">
            I DON'T MEET ONE OR MORE OF THE MINIMUM REQUIREMENTS
          </p>
          <div className="flex justify-center mt-3 mb-4 ">
            <button className="bg-red-500 text-white px-3 py-1 rounded-3xl uppercase">
              No I Don't
            </button>
          </div>
        </div>

        <div className="border-2 border-green-300">
          <FaCheckCircle fill={"#00dbb1"} className="text-3xl mx-auto mt-3" />
          <p className="text-sm text-center mt-3 font-semibold w-2/3 mx-auto">
            I MEET THE MINIMUM REQUIREMENTS TODAY AND I'M READY TO APPLY!
          </p>
          <div className="flex justify-center mt-3 mb-4">
            <button
              className="bg-primary text-white px-3 py-1 rounded-3xl uppercase"
              onClick={()=>handleSubmit()}
            >
              Yes I do
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirement;
