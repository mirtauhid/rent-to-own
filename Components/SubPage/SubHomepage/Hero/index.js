import {
  useLoadScript
} from "@react-google-maps/api";
import Link from 'next/link';
import React from 'react';
import SubSearch from '../../../Map/SubSearch';
import style from "./style.module.css";
const libraries = ["places"];

const index = () => {
    const [search, setSearch] = React.useState();
    const [latlng, setLatLng] = React.useState();
    const [locationData, setLocationData] = React.useState();
    const {isLoaded, loadError} = useLoadScript({
      googleMapsApiKey: 'AIzaSyA7DPgVBt9bQ8rtDV4PCFEmacgLBFpjmVM',
      libraries,
    })
    return (
      <div className="px-5">
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
            <p className="text-white text-2xl xs:text-3xl smd:text-5xl lg:w-3/4 font-bold lg:mb-10">
              Canada's Only Rent-to-Own Marketplace
            </p>
            <div className="mt-5 lg:mt-5">
              {isLoaded && <SubSearch setSearch={setSearch} setLatLng={setLatLng} setLocationData={setLocationData} /> }
              <Link
                href={{
                  pathname: "/housesearch",
                  query: { search: search },
                }}
              >
                <div className="bg-green-500 w-32 lg:w-48 mt-3 py-2 rounded-md text-center lg:text-xl text-white font-bold lg:mt-5 cursor-pointer">
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
