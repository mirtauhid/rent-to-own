import React from 'react'

import HomeLayout from "../../../Layouts/HomeLayout"

import Hero from "./Hero";
import ExploreNeighborSlider from "./ExploreNeighborSlider";
import LogoSection from './LogoSection';

const index = () => {
    return (
      <HomeLayout>
        <div className="py-10">
          <Hero />
          <LogoSection/>
          <ExploreNeighborSlider/>
        </div>
      </HomeLayout>
    );
}

export default index
