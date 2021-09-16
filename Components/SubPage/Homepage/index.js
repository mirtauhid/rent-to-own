import React from 'react'
import Hero from "./Hero"
import ExploreNeighborSlider from './ExploreNeighborSlider'
import HomeLayout from "../../../Layouts/HomeLayout"

const index = () => {
    return (
      <HomeLayout>
        <div className="py-10">
          <Hero />
          <ExploreNeighborSlider/>
        </div>
      </HomeLayout>
    );
}

export default index
