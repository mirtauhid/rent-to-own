import React, { useState } from 'react';
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {FaUserCircle} from "react-icons/fa";
import SignUpModal from "../../../Components/Modal/SignUpModal"
import SignInModal from "../../../Components/Modal/SignInModal";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const [showNav,setShowNav] = useState(false);
  const [showSignUpModal,setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  return (
    <header className={"shadow-md"}>
      <div className="container mx-auto py-7">
        <div className="grid grid-cols-1 smd:grid-cols-2">
          <div>
            <div
              className={
                "h-10 flex justify-center smd:justify-start mb-5 smd:mb-0"
              }
            >
              <Link href={"/"}>
                <a className={"h-full cursor-pointer"}>
                  <img src="/images/logo.png" alt="logo" className={"h-full"} />
                </a>
              </Link>
            </div>
          </div>
          <div
            className={
              "flex justify-center items-center smd:justify-end relative"
            }
          >
            <ul className="flex items-center">
              <Link href={"/listProperty"}>
                <li
                  className={
                    "mx-3 font-mons font-semibold text-xs xs:text-sm cursor-pointer px-1"
                  }
                >
                  List your property
                </li>
              </Link>

              <HeaderNavBar showNav={showNav} />

              {auth.isLoggedIn ? (
                <li
                  className={
                    "mr-10 font-mons font-semibold text-xs xs:text-sm cursor-pointer px-1 "
                  }
                >
                  <FaUserCircle
                    fill={"#07c7a2"}
                    className="text-3xl"
                    onClick={() => setShowNav(!showNav)}
                  />
                </li>
              ) : (
                <>
                  <li
                    className={
                      "mx-3 font-mons font-semibold text-xs xs:text-sm cursor-pointer px-1"
                    }
                    onClick={() => setShowSignUpModal(true)}
                  >
                    Sign up
                  </li>
                  <li
                    className={
                      "mx-3 hover:shadow border-primary text-xs xs:text-sm px-4 cursor-pointer py-1 border rounded bg-primary text-white transition-all duration-300 font-semibold"
                    }
                    onClick={() => setShowSignInModal(true)}
                  >
                    Login
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <SignUpModal
        showSignUpModal={showSignUpModal}
        setShowSignUpModal={setShowSignUpModal}
      />
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    </header>
  );
};

const HeaderNavBar = ({showNav}) =>{
    return (
      <div
        className={`absolute border shadow-md left-1/4 md:left-1/2 lg:left-2/3 top-10 bg-white z-10 px-5 py-3 rounded-md font-semibold text-gray-500 ${
          showNav ? "opacity-100" : "opacity-0"
        } transition duration-300`}
      >
        <ul>
          <li className="mt-2 cursor-pointer">Messages</li>
          <li className="mt-2 cursor-pointer">profile</li>
          <Link href={"/settings"}>
            <li className="mt-2 cursor-pointer">Account setting</li>
          </Link>

          <li className="mt-2 cursor-pointer">Help</li>
          <li className="mt-2 cursor-pointer">Log out</li>
        </ul>
      </div>
    );
}

export default Header;
