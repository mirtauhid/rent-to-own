import React from "react";
import ImageCard from "./ImageCard";

const MultipleImageCard = ({data}) => {
  return (
    <div className="w-full h-80 grid grid-cols-2 grid-rows-2 gap-3">
        {
            data.map(({name,description,id},index)=>{
                return (
                  <ImageCard
                    name={name}
                    img={JSON.parse(description).url}
                    key={index}
                    id={id}
                  />
                );
            })
        }
    </div>
  );
};

export default MultipleImageCard;
