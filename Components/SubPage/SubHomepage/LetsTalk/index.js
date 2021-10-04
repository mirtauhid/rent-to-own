import React from 'react'

const LetsTalk = () => {
    return (
      <div className="mx-5 lg:mx-28 mt-14 grid md:grid-cols-2 md:px-20">
        <div className="md:h-72 lg:h-80">
          <img
            src="/images/Homepage/questionsLetsTalk.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="md:py-3 mx-3 md:-ml-3 -mt-3 md:mt-0">
          <div
            className="w-full h-full px-5 xl:px-14 py-8"
            style={{ background: "#07c7a2" }}
          >
            <p className="text-white text-2xl lg:text-3xl xl:text-5xl text-center">
              Questions?
            </p>
            <p className="text-white text-2xl lg:text-3xl xl:text-5xl text-center capitalize">
              Let's talk
            </p>
            <p className="font-semibold text-white lg:text-lg text-center mt-4">
              Whether it's an inquiry, showing, offer, or mortgage - we're here
              to help.
            </p>
            <p className="text-white lg:text-2xl xl:text-4xl text-center mt-5">
              1-844-333-7017
            </p>
          </div>
        </div>
      </div>
    );
}

export default LetsTalk
