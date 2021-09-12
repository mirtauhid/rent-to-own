import { useState } from "react";
import HomeLayout from "../../../Layouts/HomeLayout";
import style from "./style.module.css";
import Profile from "./Profile";
import Account from "./Account";


const index = () => {
  const [tab, setTab] = useState("profile");
  return (
    <HomeLayout>
      <div className={style["settings-wrapper"]}>
        <p className="text-3xl text-gray-700 font-extrabold ml-5">
          Profile Settings
        </p>

        <div className={style["settings-tab"]}>
          <p
            className="text-lg ml-5 cursor-pointer font-bold"
            onClick={() => setTab("profile")}
          >
            Profile
          </p>
          <p
            className="text-lg ml-3 cursor-pointer font-bold"
            onClick={() => setTab("account")}
          >
            Account
          </p>
        </div>

        <div className={`${style["settings-tab-underline"]}`}>
          <div
            className={`${style["settings-tab-active-underline"]} transform ${
              tab === "profile" ? "translate-x-0" : "translate-x-full"
            } transition duration-500`}
          ></div>
        </div>

        <Account tab={tab} />
        <Profile tab={tab} />
      </div>
    </HomeLayout>
  );
};

export default index;
