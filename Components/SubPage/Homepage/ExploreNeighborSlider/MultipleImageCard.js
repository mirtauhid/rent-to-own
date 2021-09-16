import React from "react";

const MultipleImageCard = ({data}) => {
  return (
    <div className="w-full h-80 grid grid-cols-2 gap-3">
        {
            data.map(({name})=>{
                return (
                  <div className="relative h-full w-full rounded-md overflow-hidden">
                    <img
                      src="/images/Homepage/Background.webp"
                      alt=""
                      className="w-full h-full object-cover"
                    />

                    <div
                      className="absolute top-0 left-0 w-full h-full pt-5 px-5"
                      style={{ background: "rgba(0,0,0,0.4)" }}
                    >
                      <p className="text-white text-2xl font-bold uppercase">
                        {name}
                      </p>
                    </div>
                  </div>
                );
            })
        }
    </div>
  );
};

export default MultipleImageCard;
