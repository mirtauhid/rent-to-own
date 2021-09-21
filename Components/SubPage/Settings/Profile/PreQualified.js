import React from 'react'
import PreQualifiedQuestion from './PreQualifiedQuestion';

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
      </div>
    );
}

export default PreQualified
