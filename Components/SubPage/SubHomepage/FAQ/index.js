import React,{useState} from "react";
import style from "./style.module.css"
import BuyerFAQ from "./BuyerFAQ"
import SellerFAQ from "./SellerFAQ";

const FAQ = () => {
  const [tab, setTab] = useState("buyer");
  return (
    <div
      className={`${style["subHomepage-FAQ-wrapper"]}`}
    >
      <div className="w-24 h-1 bg-primary mb-3 mx-auto"></div>
      <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center capitalize">
        Frequently asked questions
      </p>
      <div className={style["subHomepage-FAQ-tab"]}>
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

      {tab === "buyer" ? <BuyerFAQ /> : <SellerFAQ />}
    </div>
  );
};

export default FAQ;
