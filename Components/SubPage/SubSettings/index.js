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
  
  console.log(router.query.name);
  return (
    <HomeLayout>
      <div className={`${style["settings-wrapper"]}`}>
        <p className="text-3xl text-gray-700 font-extrabold ml-5">Settings</p>

        <div className={style["settings-tab"]}>
          <Link href="/settings?name=profile">
            <a
              className={`text-lg ml-5 cursor-pointer font-bold ${
                router.query.name === "profile"
                  ? "border-b-4 border-primary pb-1"
                  : null
              }`}
            >
              Profile
            </a>
          </Link>

          <Link href="/settings?name=account">
            <a
              className={`text-lg ml-5 cursor-pointer font-bold ${
                router.query.name === "account"
                  ? "border-b-4 border-primary pb-1"
                  : null
              }`}
            >
              Account
            </a>
          </Link>

          <Link href="/settings?name=prequalification">
            <a
              className={`text-lg ml-5 cursor-pointer font-bold ${
                router.query.name === "prequalification"
                  ? "border-b-4 border-primary pb-1"
                  : null
              }`}
            >
              Pre-Qualification
            </a>
          </Link>
        </div>

        {router.query.name === "profile" ? (
          <Profile />
        ) : router.query.name === "account" ? (
          <Account />
        ) : (
          <PreQualification />
        )}
      </div>
    </HomeLayout>
  );
};

export default SubSettings;
