import { useState,useEffect } from "react";
import HomeLayout from "../../../Layouts/HomeLayout";
import style from "./style.module.css";
import Profile from "./Profile";
import Account from "./Account";
import PreQualification from "./PreQualification";
import Link from "next/link"
import { useRouter } from "next/router";

const SubSettings = () => {
  const router = useRouter();
  const [tab, setTab] = useState(router.query.name);
  
  console.log(router.query.name);
  return (
    <HomeLayout>
      <div
        className={`${style["settings-wrapper"]} ${
          tab === "account" ? style["seetings-wrapper-for-account"] : null
        }`}
      >
        <p className="text-3xl text-gray-700 font-extrabold ml-5">Settings</p>

        <div className={style["settings-tab"]}>
          <Link href="/settings?name=profile">
            <a
              className={`text-lg ml-5 cursor-pointer font-bold ${
                tab === "profile" ? "border-b-4 border-primary pb-1" : null
              }`}
            >
              Profile
            </a>
          </Link>

          <Link href="/settings?name=account">
            <a
              className={`text-lg ml-5 cursor-pointer font-bold ${
                tab === "account" ? "border-b-4 border-primary pb-1" : null
              }`}
            >
              Account
            </a>
          </Link>

          <Link href="/settings?name=prequalification">
            <a
              className={`text-lg ml-5 cursor-pointer font-bold ${
                tab === "account" ? "border-b-4 border-primary pb-1" : null
              }`}
            >
              Pre-Qualification
            </a>
          </Link>
        </div>

        {router.query.name === "profile" ? (
          <Profile tab={tab} />
        ) : router.query.name === "account" ? (
          <Account tab={tab} />
        ) : (
          <PreQualification tab={tab} />
        )}
      </div>
    </HomeLayout>
  );
};

const Tab = ({ href, isSelected, title }) => (
  <Link href={href}>
    <a
      style={{
        padding: 5,
        margin: 5,
        backgroundColor: isSelected ? "blue" : "transparent",
      }}
    >
      {title}
    </a>
  </Link>
);

export default SubSettings;
