import React from 'react'
import UserReview from '../../UserReview'
import SubGetStarted from "./SubGetStarted"
import SubHeroSection from './SubHeroSection'
import SubPricing from './SubPricing'

const SubPricingPlan = () => {
    return (
        <>
            <SubHeroSection/>
            <SubPricing/>
            <SubGetStarted/>
            <UserReview/>
        </>
    )
}

export default SubPricingPlan;
