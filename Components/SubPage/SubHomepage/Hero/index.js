import React from 'react';
import Link from 'next/link';
import SubSearch from '../../../Map/SubSearch';
import {
  useLoadScript,
} from "@react-google-maps/api";
const libraries = ["places"];
import style from "./style.module.css"

const index = () => {
    const [search, setSearch] = React.useState("");
    const [latlng, setLatLng] = React.useState();
    const {isLoaded, loadError} = useLoadScript({
      googleMapsApiKey: 'AIzaSyA7DPgVBt9bQ8rtDV4PCFEmacgLBFpjmVM',
      libraries,
    })
    return (
      <div className="px-5 md:px-20 lg:px-28">
        <div className={`${style["subhomepage-hero-wrapper"]}`}>
          <img
            src="/images/Homepage/Background.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute top-0 left-0 w-full h-full px-5 md:px-12 pt-14 xs:pt-24 lg:pt-36"
            style={{ background: "rgba(0,0,0,0.4)" }}
          >
            <p className="text-white text-2xl xs:text-3xl smd:text-5xl lg:w-3/4 font-bold">
              Canada's Only Rent-to-Own Marketplace
            </p>
            <div className="mt-5 lg:mt-5">
              {isLoaded && <SubSearch setSearch={setSearch} setLatLng={setLatLng} /> }
              <Link
                href={{
                  pathname: "/housesearch",
                  query: { search: search },
                }}
              >
                <div className="bg-green-500 w-32 mt-3 py-2 rounded-md px-10 text-white font-bold">
                  Search
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}



export default index
