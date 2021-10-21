import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ForgetPasswordModal from "../../../Components/Modal/ForgetPassword";
import ListPropertyWarningModal from "../../../Components/Modal/ListPropertyWarningModal";
import SignInModal from "../../../Components/Modal/SignInModal";
import SignUpModal from "../../../Components/Modal/SignUpModal";
import baseURL from "../../../Helpers/httpRequest";
import { signIn, signOut } from "../../../redux/slices/auth";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const [showNav, setShowNav] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showForgetPasswordModal, setShowForgetPasswordModal] = useState(false);
  const [redirectLink, setRedirectLink] = useState("/");
  const [showWarning, setShowWarning] = useState(false);

  const handleSingInWithRedirect = (customLink) => {
    setRedirectLink(customLink);
    setShowSignInModal(true);
  };

  useEffect(() => {
    const handleTest = () => {
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
            var s1 = document?.createElement("script");
            var s0 = document?.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/6167c082f7c0440a591e1c5f/1fhukg0ft';
            s1.charset = 'UTF - 8';
            s1?.setAttribute('crossorigin', '*');
            s0?.parentNode?.insertBefore(s1, s0);
        })();
    }
    document && handleTest()
}, [])
  
useEffect(() => {
  if (localStorage.getItem("authToken")) {
    // verifying token
    axios({
      method: "POST",
      url: `${baseURL}/v2/auth/verify`,
      headers: { Authorization: localStorage.getItem("authToken") },
    })
      .then((userData) => {
        if (userData.data.success) {
          axios
            .get(`${baseURL}/v2/prequalifications`, {
              headers: {
                authorization: localStorage.getItem("authToken"),
              },
            })
            .then((res) => {
              console.log(res, userData.data.data);
              (userData.data.data.type === "BUYER" &&
                res.data.data.prequalification.status === "PENDING") ||
              (userData.data.data.type === "SELLER" &&
                userData.data.data.verified === false)
                ? setShowWarning(true)
                : null;
            })
            .catch((err) => console.log("marker:"+err));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}, []);

 

  return (
    <>
      <header className={"shadow-md px-5 md:px-20 lg:px-28"}>
        <div className="py-7">
          <div className="grid grid-cols-1 smd:grid-cols-2">
            <div>
              <div
                className={
                  "h-10 flex justify-center smd:justify-start mb-5 smd:mb-0"
                }
              >
                <Link href={"/"}>
                  <a className={"h-full cursor-pointer"}>
                    <img
                      src="/images/logo.png"
                      alt="logo"
                      className={"h-full"}
                    />
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
                <Link
                  href={auth.userData?.type === "SELLER" ? "/pricingplan" : "#"}
                >
                  <li
                    className={
                      "mx-3 font-mons font-semibold text-xs xs:text-sm cursor-pointer px-1"
                    }
                    onClick={() =>
                      !auth.isLoggedIn
                        ? handleSingInWithRedirect("/pricingplan")
                        : auth.userData?.type === "BUYER"
                        ? setShowWarningModal(true)
                        : null
                    }
                  >
                    List your property
                  </li>
                </Link>

                <HeaderNavBar
                  showNav={showNav}
                  setShowNav={setShowNav}
                  setShowWarning={setShowWarning}
                />

                {auth.isLoggedIn ? (
                  <li
                    className={
                      "font-mons font-semibold text-xs xs:text-sm cursor-pointer px-1 "
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
          setShowSignInModal={setShowSignInModal}
          setShowForgetPasswordModal={setShowForgetPasswordModal}
          redirectLink={redirectLink}
        />
        <SignInModal
          showSignInModal={showSignInModal}
          setShowSignInModal={setShowSignInModal}
          setShowSignUpModal={setShowSignUpModal}
          setShowForgetPasswordModal={setShowForgetPasswordModal}
          redirectLink={redirectLink}
        />
        <ForgetPasswordModal
          showForgetPasswordModal={showForgetPasswordModal}
          setShowForgetPasswordModal={setShowForgetPasswordModal}
          setShowSignInModal={setShowSignInModal}
          setShowSignUpModal={setShowSignUpModal}
        />
        <ListPropertyWarningModal
          showWarningModal={showWarningModal}
          setShowWarningModal={setShowWarningModal}
        />
      </header>
      {showWarning && (
        <div>
          {auth.userData?.type === "BUYER" ? (
            <p
              className="mx-5 my-2 px-5 py-2 text-white rounded-md text-center"
              style={{ background: "#edb95e" }}
            >
              Your account is not verified yet. Please visit{" "}
              <span className="text-white font-extrabold hover:underline">
                <Link href="/settings?name=prequalification">
                  Pre-Qualification
                </Link>
              </span>{" "}
              to upload required documents.
            </p>
          ) : (
            <p
              className="mx-5 my-2 px-5 py-2 text-white rounded-md text-center"
              style={{ background: "#edb95e" }}
            >
              Your account is not verified yet. Please check your email inbox or spam box for verification link.
            </p>
          )}
        </div>
      )}
    </>
  );
};

const HeaderNavBar = ({ showNav, setShowNav, setShowWarning }) => {
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const loggedInUser = useSelector((state) => state.auth?.userData);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(signOut());
    setShowNav(false);
    // Removing auth token from local storage
    localStorage.removeItem("authToken");
    router.push("/");
    setShowWarning(false);
  };

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      // verifying token
      axios({
        method: "POST",
        url: `${baseURL}/v2/auth/verify`,
        headers: { Authorization: localStorage.getItem("authToken") },
      })
        .then((res) => {
          if (res.data.success) {
            // Updating redux
            dispatch(signIn(res.data?.data));
          }
        })
        .catch((err) => {
          localStorage.removeItem("authToken");
          setShowWarning(false);
        });
    }
  }, []);

  const handleProfileClick = () => {
    axios({
      method: "POST",
      url: `${baseURL}/v2/auth/verify`,
      headers: { Authorization: localStorage.getItem("authToken") },
    })
      .then((res) => {
        res.data.data.type === "SELLER"
          ? router.push("/sellerProfile/accountSettings")
          : router.push("/settings?name=profile");
      })
      .catch((err) => {
        router.push("/");
      });
  };

  return (
    <div
      className={`absolute border shadow-md right-1/4 sm:right-0 top-10 bg-white z-10 px-5 py-3 rounded-md font-semibold text-gray-500 ${
        showNav ? "block" : "hidden"
      } transition duration-300`}
    >
      <ul>
        <Link
          href={{
            pathname: "/messaging",
            query: {
              buyer:
                loggedInUser?.type === "BUYER" ? "available" : "unavailable",
            },
          }}
        >
          <li className="mt-2 cursor-pointer">Messages</li>
        </Link>
        <li className="mt-2 cursor-pointer" onClick={handleProfileClick}>
          Profile Settings
        </li>

        <li className="mt-2 cursor-pointer">Help</li>
        <li className="mt-2 cursor-pointer" onClick={handleLogOut}>
          Log out
        </li>
      </ul>
    </div>
  );
};


export default Header;
