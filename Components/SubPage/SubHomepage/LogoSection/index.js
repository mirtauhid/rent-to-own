import React from "react";
import { data } from "../../../../Assets/logoData";


const LogoSection = () => {
  return (
    <div className="mx-5 md:mx-20 lg:mx-28 mt-14">
      <div className="mx-auto mb-6 md:mb-12" style={{ width: "fit-content" }}>
        <div className="w-24 h-1 bg-primary mx-auto mb-3"></div>
        <p className="text-xl md:text-2xl lg:text-3xl font-bold">
          In Association With
        </p>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
        {data.map(({ img },index) => {
          return <Logo img={img} key={index}/>;
        })}
      </div>
    </div>
  );
};

const Logo = ({img}) => {
  return (
    <div className="h-9 flex md:justify-center">
      <img src={img} alt=""/>
    </div>
  );
};

export default LogoSection;
