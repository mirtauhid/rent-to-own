import React,{useState} from "react";
import style from "./style.module.css"
import BuyerFAQ from "./BuyerFAQ"
import SellerFAQ from "./SellerFAQ";
import GeneralFAQ from "./GeneralFAQ";
import HomeLayout from "../../../Layouts/HomeLayout";

const SubFAQ = () => {
  const [tab, setTab] = useState("buyer");
  return (
    <HomeLayout>
      <div className="mt-10 md:mt-16 p-5 md:p-10" style={{background:"rgba(24, 106, 165, 0.1)"}}>
        <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center text-gray-500">
          Frequently asked questions
        </p>
      </div>
      <div className={`${style["FAQ-wrapper"]}`}>
        <div className={style["FAQ-tab"]}>
          <p
            className={`text-lg ml-5 cursor-pointer font-bold py-1 px-3 ${
              tab === "general" ? "border-b-4 border-primary" : ""
            }`}
            onClick={() => setTab("general")}
          >
            General
          </p>
          <p
            className={`text-lg ml-5 cursor-pointer font-bold py-1 px-3 ${
              tab === "buyer" ? "border-b-4 border-primary" : ""
            }`}
            onClick={() => setTab("buyer")}
          >
            Buyer
          </p>
          <p
            className={`text-lg ml-5 cursor-pointer font-bold py-1 px-3 ${
              tab === "seller" ? "border-b-4 border-primary" : ""
            }`}
            onClick={() => setTab("seller")}
          >
            Seller
          </p>
        </div>

        {tab === "buyer" ? (
          <BuyerFAQ />
        ) : tab === "seller" ? (
          <SellerFAQ />
        ) : (
          <GeneralFAQ />
        )}
      </div>
    </HomeLayout>
  );
};

export default SubFAQ;
