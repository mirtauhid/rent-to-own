import { useState } from "react";
import HomeLayout from "../../../Layouts/HomeLayout";
import style from "./style.module.css";
import Profile from "./Profile";
import Account from "./Account";
import PreQualification from "./PreQualification";

const SubSettings = () => {
  const [tab, setTab] = useState("preQualified");
  return (
    <HomeLayout>
      <div
        className={`${style["settings-wrapper"]} ${
          tab === "account" ? style["seetings-wrapper-for-account"] : null
        }`}
      >
        <p className="text-3xl text-gray-700 font-extrabold ml-5">
          Settings
        </p>

        <div className={style["settings-tab"]}>
          <p
            className={`text-lg ml-5 cursor-pointer font-bold ${
              tab === "profile" ? "border-b-4 border-primary pb-1" : null
            }`}
            onClick={() => setTab("profile")}
          >
            Profile
          </p>
          <p
            className={`text-lg ml-5 cursor-pointer font-bold ${
              tab === "account" ? "border-b-4 border-primary pb-1" : null
            }`}
            onClick={() => setTab("account")}
          >
            Account
          </p>
          <p
            className={`text-lg ml-5 cursor-pointer font-bold ${
              tab === "preQualification"
                ? "border-b-4 border-primary pb-1"
                : null
            }`}
            onClick={() => setTab("preQualification")}
          >
            Pre-Qualification
          </p>
        </div>

        {tab === "profile" ? (
          <Profile tab={tab} />
        ) : tab === "account" ? (
          <Account tab={tab} />
        ) : (
          <PreQualification tab={tab} />
        )}
      </div>
    </HomeLayout>
  );
};

export default SubSettings;
