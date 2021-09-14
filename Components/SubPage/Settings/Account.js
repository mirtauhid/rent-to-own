import React from "react";

const Account = ({ tab }) => {
  return (
    <div
      className={`border-2 mt-10 w-full absolute transition duration-300 ${
        tab === "account"
          ? "transform translate-x-0"
          : "transform translate-x-full"
      }`}
    >
      hello from Account
    </div>
  );
};

export default Account;
