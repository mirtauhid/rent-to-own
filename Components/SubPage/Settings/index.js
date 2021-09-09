import React from "react";
import HomeLayout from "../../../Layouts/HomeLayout";
import Tabs, { TabPane } from "rc-tabs";
import style from "./style.module.css"

const index = () => {
  return (
    <HomeLayout>
      <div className="flex gap-5 border-b-2">
          <p className="border-b-4 border-green-300">Profile</p>
          <p>Account</p>
      </div>
    </HomeLayout>
  );
};

export default index;
