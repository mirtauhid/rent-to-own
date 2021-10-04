import React, { useEffect } from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import Link from 'next/link';
import PriceCard from '../../Components/SubCard/PriceCard';
import Map from '../../Components/Map';
import PopularProperties from '../../Components/SubCard/PopularProperties';
import SubCapacity from '../../Components/SubPage/HouseSearch/SubCapacity';
import Introduction from '../../Components/SubPage/HouseSearch/Introduction';
import Interior from '../../Components/SubPage/HouseSearch/Interior';
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useRouter } from "next/router";
import { getPropertyDetails } from '../../redux/slices/property';
import { useDispatch, useSelector } from "react-redux";

const Details = () => {
    const dispatch = useDispatch();
    const data = require('./data');
    const router = useRouter()
    
    const propertyDetails = useSelector((state) => state.property.propertyDetails);
    console.log('====================================');
    console.log(propertyDetails);
    console.log('====================================');

    useEffect(() => {
      dispatch(getPropertyDetails({id: router.query.id}));
    }, [router.query.id]);

    return (
      <HomeLayout>
        <>
          <div className="mt-5 px-5 md:px-20 lg:px-28 relative w-full">
            {/* Images */}
            <div className="flex flex-row">
              <img
                src="https://picsum.photos/600/400"
                className="w-1/2 object-center object-cover"
              />
              <div className="flex flex-end">
                <div className="w-full">
                  <img src="https://picsum.photos/400" className="" />
                  <img src="https://picsum.photos/400/200" />
                </div>
                <div className="w-full">
                  <img src="https://picsum.photos/400/200" />
                  <img src="https://picsum.photos/400" />
                </div>
              </div>
            </div>
            <div className="md:flex md:flex-row flex-column pt-6">
              {/* Introduction */}
              <div className="w-full md:w-2/3">
                <Introduction />
                <hr className="mt-2"></hr>
                {/* Capacity */}
                <SubCapacity />
                <hr className="mt-5"></hr>
                {/* Interior features */}
                <Interior />
              </div>

              {/* price Card */}
              <div className="md:w-1/3 md:ml-10 mt-10 md:mt-0">
                <PriceCard />
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="px-5 md:px-20 lg:px-28">
            <h1 className="text-xl text-gray-700 font-bold mt-5">Location</h1>
            <Map />
          </div>
          {/* popular properties */}
          <div className="px-5 md:px-20 lg:px-28 py-5">
            <h1 className="text-xl text-gray-700 font-bold mt-5">
              Some Popular properties
            </h1>
            <ScrollMenu>
              {data?.map((item) => (
                <div className="cursor-pointer gap-8 grid-flow-row py-5" key={item.id}>
                  <Link href={"/housesearch/" + item.id} key={item.id}>
                    <a>
                      <PopularProperties
                        key={item.id.toString()}
                        title={item.title}
                        host={item.host}
                        price={item.price}
                      />
                    </a>
                  </Link>
                </div>
              ))}
            </ScrollMenu>
          </div>
        </>
      </HomeLayout>
    );
}

export default Details;
