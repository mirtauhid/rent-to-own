import React from "react";
import { data } from "../../../../Assets/logoData";

const LogoSection = () => {
  return (
    <div className="mx-5 md:mx-20 lg:mx-28 mt-14">
      <div className="mx-auto mb-10" style={{ width: "fit-content" }}>
        <div className="w-24 h-1 bg-primary mx-auto mb-3"></div>
        <p className="text-3xl font-bold">In Association With</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {data.map(({img}) => {
          return <Logo img={img}/>;
        })}
      </div>
    </div>
  );
};

const Logo = ({img}) => {
  return (
    <div className="h-14 flex md:justify-center">
      <img src={img} alt="" className="h-full"/>
    </div>
  );
};

export default LogoSection;
