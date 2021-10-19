import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter } from 'react-icons/fa';


const Footer = () => (

  <footer className={"py-7 border-t "}>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-12 pl-5 md:pl-20">
        <div className="col-span-12 lg:col-span-4 sm:col-span-6 pr-16 sm:pr-4 md:col-span-6 md:pr-24 lg:pr-32 xl:pr-44">
          <div className="smd:px-2 h-8">
            <Link href={"/"}>
              <a className={"h-full"}>
                <img
                  src="/images/logo.png"
                  className={"h-full"}
                  alt="logo.png"
                />
              </a>
            </Link>
          </div>
          <p className="py-2 text-sm text-mons text-gray-500 font-normal">
            Rent-to-own realty is{" "}
            <span className={"text-primary px-1"}> Canada’s Only</span>{" "}
            Rent-to-Own Marketplace
          </p>
          <div className="flex justify-start py-1">
            <div className="h-6 mr-2 w-6 rounded-full overflow-hidden cursor-pointer flex justify-center items-center bg-primary">
              <FaFacebookF fill={"white"} size={14} className={"inline"} />
            </div>

            <div className="h-6 mr-2 w-6 rounded-full overflow-hidden cursor-pointer flex justify-center items-center bg-primary">
              <FaTwitter fill={"white"} size={14} className={"inline"} />
            </div>

            <div className="h-6 mr-2 w-6 rounded-full overflow-hidden cursor-pointer flex justify-center items-center bg-primary">
              <FaInstagram fill={"white"} size={14} className={"inline"} />
            </div>

            <div className="h-6 mr-2 w-6 rounded-full overflow-hidden cursor-pointer flex justify-center items-center bg-primary">
              <FaTelegramPlane fill={"white"} size={14} className={"inline"} />
            </div>
          </div>
        </div>

        <div className="col-span-6 mt-6 sm:col-span-6 sm:mt-0 lg:col-span-2 lg:mt-0">
          <h2 className="font-mons text-gray-600 font-bold text-sm md:text-normal">
            Rent-to-Own
          </h2>
          <div className="w-16 pt-1 bg-primary my-2"></div>
          <Link href="/aboutUs">
            <a
              className={
                "text-xs lg:text-sm py-2 text-gray-400 font-mons block"
              }
            >
              About
            </a>
          </Link>

          <Link href="/contact">
            <a className={"text-xs lg:text-sm py-2 text-gray-400 font-mons block"}>
              Contact us
            </a>
          </Link>
          <Link href="/FAQ">
            <a className={"text-xs lg:text-sm py-2 text-gray-400 font-mons block"}>
              FAQ
            </a>
          </Link>
        </div>

        <div className="col-span-6 mt-6 sm:col-span-4 sm:mt-8 lg:col-span-2 lg:mt-0">
          <h2 className="font-mons text-gray-600 font-bold text-sm md:text-normal">
            Policies
          </h2>
          <div className="w-16 pt-1 bg-primary my-2"></div>
          <Link href="/terms">
            <a
              className={
                "text-xs lg:text-sm py-2 text-gray-400 font-mons block"
              }
            >
              Terms of use
            </a>
          </Link>

          <Link href="/privacy">
            <a
              className={
                "text-xs lg:text-sm py-2 text-gray-400 font-mons block"
              }
            >
              Privacy Policy
            </a>
          </Link>

          <Link href="/cookie">
            <a
              className={
                "text-xs lg:text-sm py-2 text-gray-400 font-mons block"
              }
            >
              Cookie Policy
            </a>
          </Link>
        </div>

        <div className="col-span-6 mt-6 sm:col-span-4 sm:mt-8 lg:col-span-2 lg:mt-0">
          <h2 className="font-mons text-gray-600 font-bold text-sm md:text-normal">
            Information
          </h2>
          <div className="w-16 pt-1 bg-primary my-2"></div>
          <Link href="/property">
            <a
              className={
                "text-xs lg:text-sm py-2 text-gray-400 font-mons block"
              }
            >
              List Home
            </a>
          </Link>
          <Link href="/housesearch">
            <a
              className={
                "text-xs lg:text-sm py-2 text-gray-400 font-mons block"
              }
            >
              Search Homes
            </a>
          </Link>
        </div>

        <div className="col-span-6 mt-6 sm:col-span-4 sm:mt-8 lg:col-span-2 lg:mt-0">
          <h2 className="font-mons text-gray-600 font-bold text-sm md:text-normal">
            Get In Touch
          </h2>
          <div className="w-16 pt-1 bg-primary my-2"></div>
          <p className={"text-xs lg:text-sm py-2 text-gray-400 font-mons"}>
            1 844-333-7017
          </p>

          <p className={"text-xs lg:text-sm py-2 text-gray-400 font-mons"}>
            Let's Talk
          </p>
        </div>
      </div>
    </div>

    <div className="container mx-auto">
      <div className="py-7 my-7 border-t text-center font-mons text-xs text-gray-400 px-3">
        <span>
          <span className="text-lg">&copy;</span> Copywrite reserved,
          Rent-to-Own, 2021
        </span>

        <p className="px-5 md:px-20 text-justify mt-5">
          Legal Disclaimer – RentToOwnRealty.com is a national rent-to-own private sale system and
          marketplace. RentToOwnRealty.com is independently owned and operated (collectively "Us", “Our”, or
          "We") and do not act as real estate brokers or agents. We represent neither the buyer nor the seller.
          We do not trade in real estate. We neither warranty nor make any representations as to the outcome
          of a property sale or rent-to-own program. Rent-to-Own Services may include services which are
          performed for our customers by independent third party service providers. Such services are not
          performed or provided by us. Our Pay Nothing Upfront Program, is a deferred payment program
          offered on approved credit (certain conditions do apply). Some services, program features, and
          website functions are only available in certain participating areas and property types. "Guaranteed to
          receive a qualified offer for 5% more than the fair market value of your home today or your money
          back!" is to illustrate the financial benefits of selling in 3-years through a rent-to-own model versus
          selling through traditional means today.
        </p>
      </div>
    </div>
  </footer>
);




function twak() {
  var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/6167c082f7c0440a591e1c5f/1fhukg0ft";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
}




export default Footer