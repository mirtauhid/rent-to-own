import React from "react";

const Requirement = () => {

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
    </div>
  );
};

export default Requirement;
