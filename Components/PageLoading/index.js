import React from 'react';

const PageLoading = ({ type, size }) => {
  let widthHight = ` w-16 h-16 `;
  let borders = ` border-t-4 border-b-4 `;
  let calculateBorder = parseInt(size) < 12 ? 2 : 4;

  if (type === "custom" && size) {
    widthHight = ` w-${size} h-${size}`;
    let borders = ` border-t-${calculateBorder} border-b-${calculateBorder} `;
  } else if (type === "small") {
    widthHight = ` w-6 h-6 `;
    borders = ` border-t-2 border-b-2 `;
  } else if (type === 'medium') {
    widthHight = ` w-10 h-10 `;
    borders = ` border-t-2 border-b-2 `;
  }
  return (
    <span className="animate-spin flex justify-center items-center ">
      <span className={`rounded-full border-green-500 ${widthHight} ${borders}`}></span>
    </span>
  );
};

export default PageLoading;