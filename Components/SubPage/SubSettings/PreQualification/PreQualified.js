import React from 'react'
import { Field, ErrorMessage } from "formik";
import {BiDollar} from "react-icons/bi";

const PreQualified = () => {
    return (
      <div className="">
        <p className="text-lg font-bold mb-5 text-yellow-500">
          If you meet the above mentioned requirements please fill up the form
          and upload required documents.
        </p>

        <p className="font-bold mb-1 mt-5">
          What is the annual income of the applicant?{" "}
          <span className="text-red-500">*</span>
        </p>
        <div className="flex border-2 rounded-md p-2 mt-2">
          <BiDollar
            fill={"gray"}
            className="mt-1 mr-1 text-lg"
            style={{ marginTop: "3px" }}
          />
          <Field
            type="text"
            placeholder="Annual Income of Applicant"
            className="focus:outline-none w-fulltext-gray-600 mb-1 flex-grow"
            name="applicantIncome"
          />
        </div>
        <ErrorMessage
          name="applicantIncome"
          component="div"
          className="text-red-500"
        />

        <p className="font-bold mb-1 mt-5">
          What is the annual income of the co-applicant? (If available)
        </p>

        <div className="flex border-2 rounded-md p-2 mt-2">
          <BiDollar
            fill={"gray"}
            className="mt-1 mr-1 text-lg"
            style={{ marginTop: "3px" }}
          />
          <Field
            type="text"
            placeholder="Annual Income of Co-Applicant"
            className="focus:outline-none w-fulltext-gray-600 mb-1 flex-grow"
            name="coApplicantIncome"
          />
        </div>
        <ErrorMessage
          name="coApplicantIncome"
          component="div"
          className="text-red-500"
        />

        <p className="font-bold mb-1 mt-5">
          How much money do you have for downpayment?{" "}
          <span className="text-red-500">*</span>
        </p>
        <div className="flex border-2 rounded-md p-2 mt-2">
          <BiDollar
            fill={"gray"}
            className="mt-1 mr-1 text-lg"
            style={{ marginTop: "3px" }}
          />
          <Field
            type="text"
            placeholder="Available Downpayment"
            className="focus:outline-none w-fulltext-gray-600 mb-1 flex-grow"
            name="downpayment"
          />
        </div>
        <ErrorMessage
          name="downpayment"
          component="div"
          className="text-red-500"
        />
      </div>
    );
}

export default PreQualified
