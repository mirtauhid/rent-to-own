import React from 'react'
import PreQualifiedQuestion from './PreQualifiedQuestion';
import { Field, ErrorMessage } from "formik";

const PreQualified = () => {
    return (
      <div className="border-2 mt-10 px-5 pt-5 rounded-lg">
        <PreQualifiedQuestion
          question="What is the combined income of all applicants (Total)"
          name="combinedIncome"
        />
        <PreQualifiedQuestion
          question="How much money do you have available now for a down payment?"
          name="availableMoney"
        />
        <PreQualifiedQuestion
          question="What's your monthly payment budget to own your home?"
          name="monthlyPayment"
        />
        <PreQualifiedQuestion
          question="What's the price range for the home you're looking to purchase?"
          name="priceRange"
        />
        <p className="font-bold mb-1">
          What city are you looking to purchase your home?{" "}
          <span className="text-red-500">*</span>
        </p>
        <Field
          type="text"
          placeholder="XYZ"
          className="border-2 focus:outline-none p-2 w-full rounded-md text-gray-600 mb-5"
          name="searchingCity"
        />
        <ErrorMessage
          name="searchingCity"
          component="div"
          className="text-red-500"
        />
      </div>
    );
}

export default PreQualified
