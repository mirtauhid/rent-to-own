import React from 'react'

import HomeLayout from "../../../Layouts/HomeLayout"

import Hero from "./Hero";
import ExploreNeighborSlider from "./ExploreNeighborSlider";
import LogoSection from './LogoSection';
import RentToOwnWin from './RentToOwnWin';
import HowSellersWin from './HowSellersWin';
import HowBuyersWin from './HowBuyersWin';
import LetsTalk from './LetsTalk';
import FAQ from './FAQ';
import UserReview from "../../UserReview"

const index = () => {
    return (
      <HomeLayout>
        <div className="pb-10">
          <Hero />
          <LogoSection/>
          <RentToOwnWin/>
          <ExploreNeighborSlider/>
          <HowSellersWin/>
          <HowBuyersWin/>
          <UserReview/>
          <FAQ/>
          <LetsTalk/>
        </div>
      </HomeLayout>
    );
}

export default index
