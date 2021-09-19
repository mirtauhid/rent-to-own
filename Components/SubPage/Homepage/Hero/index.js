import React from 'react'

const index = () => {
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
            <div className="mt-5 lg:mt-10">
              <input
                type="text"
                className="w-full lg:w-1/2 p-2 rounded-md mr-2"
                placeholder="Neighborhood, Address, City, Zip Code,School,"
              />
              <button
                className="mt-3 py-2 rounded-md px-10 text-white font-bold"
                style={{ background: "#00b4a2" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default index
