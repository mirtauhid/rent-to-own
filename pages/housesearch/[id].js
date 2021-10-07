import React, { useEffect, useState } from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import Link from 'next/link';
import PriceCard from '../../Components/SubCard/PriceCard';
import Map from '../../Components/Map';
import PopularProperties from '../../Components/SubCard/PopularProperties';
import SubCapacity from '../../Components/SubPage/HouseSearch/SubCapacity';
import Introduction from '../../Components/SubPage/HouseSearch/Introduction';
import Interior from '../../Components/SubPage/SubDetailsTab/Interior';
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useRouter } from "next/router";
import { getPropertyDetails } from '../../redux/slices/property';
import { useDispatch, useSelector } from "react-redux";
import {
  useLoadScript,
} from "@react-google-maps/api";
import ImageSlider from "../../Components/ImageSlider";

const Details = () => {
    const dispatch = useDispatch();
    const [ libraries ] = useState(['places']);
    const router = useRouter()
    const [pricePerMonth, setPricePerMonth] = useState();
    const filterLocation = useSelector((state) => state.map?.filterLocation);
    const propertyDetails = useSelector((state) => state.property?.propertyDetails);
    console.log('============ppd========================');
    console.log(propertyDetails?.PropertyImages);
    console.log('====================================');

    //maps
    const {isLoaded, loadError} = useLoadScript({
      googleMapsApiKey: 'AIzaSyA7DPgVBt9bQ8rtDV4PCFEmacgLBFpjmVM',
      libraries,
    })

    useEffect(() => {
      dispatch(getPropertyDetails({id: router.query.id}));
    }, [router.query.id]);

    return (
      <HomeLayout>
        <>
          <div className="mt-5 px-5 md:px-20 lg:px-28 relative w-full">
            {/* Images */}
            <ImageSlider data={propertyDetails?.PropertyImages} />
            <div className="md:flex md:flex-row flex-column pt-6">
              {/* Introduction */}
              <div className="w-full md:w-2/3">
                {pricePerMonth && (
                  <Introduction
                    propertyDetails={propertyDetails}
                    pricePerMonth={pricePerMonth}
                  />
                )}
                <hr className="mt-2"></hr>
                {/* Capacity */}
                <SubCapacity propertyDetails={propertyDetails} />
                <hr className="mt-5"></hr>
                {/* Interior Exterior features */}
                <h1 className="text-xl pt-3 text-gray-400 font-bold">Interior features</h1>
                <Interior propertyDetails={propertyDetails}/>
                <hr className="mt-5"></hr>
                {/* Exterior features */}
                <h1 className="text-xl pt-3 text-gray-400 font-bold">Exterior features</h1>
                <Interior propertyDetails={propertyDetails}/>
              </div>

              {/* price Card */}
              <div className="md:w-1/3 md:ml-10 mt-10 md:mt-0">
                <PriceCard
                  propertyDetails={propertyDetails}
                  setPricePerMonth={setPricePerMonth}
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="px-5 md:px-20 lg:px-28">
            <h1 className="text-xl text-gray-700 font-bold mt-5">Location</h1>
            {isLoaded && propertyDetails && (
              <Map isLoaded={isLoaded} mark={[propertyDetails]} />
            )}
          </div>
          {/* popular properties */}
          <div className="px-5 md:px-20 lg:px-28 py-5">
            <h1 className="text-xl text-gray-700 font-bold mt-5">
              Other Popular properties in the area
            </h1>
            <ScrollMenu>
              {filterLocation?.map((item) => (
                item.id != propertyDetails?.id ? (
                  <div className="cursor-pointer gap-8 grid-flow-row py-5" key={item.id}>
                    <Link href={"/housesearch/" + item.id} key={item.id}>
                      <a>
                        <PopularProperties
                          key={item.id.toString()}
                          title={item.name}
                          host={item.PropertyAddresses[0]?.street}
                          price={item.price}
                          imageUrl={item.PropertyImages[0]?.src?.secure_url}
                        />
                      </a>
                    </Link>
                  </div>
                ) : null
              ))}
            </ScrollMenu>
          </div>
        </>
      </HomeLayout>
    );
}

export default Details;
