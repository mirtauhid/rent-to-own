import React from 'react';
import Link from 'next/link';
import SubSearch from '../../../Map/SubSearch';

const index = () => {
    const [search, setSearch] = React.useState("");

    return (
      <div className="px-5 md:px-20 lg:px-28">
        <div className="relative rounded-md h-60 md:h-80 lg:h-96 overflow-hidden">
          <img
            src="/images/Homepage/Background.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute top-0 left-0 w-full h-full px-5 md:px-12 pt-10 md:pt-16 lg:pt-28"
            style={{ background: "rgba(0,0,0,0.4)" }}
          >
            <p className="text-white text-xl md:text-3xl lg:text-5xl lg:w-3/4 xl:w-1/2  font-bold">
              Canada's Only Rent-to-Own Marketplace
            </p>
            <div className="mt-5 lg:mt-5">
              {<SubSearch setSearch={setSearch} /> }
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
