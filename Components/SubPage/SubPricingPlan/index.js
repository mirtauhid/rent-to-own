import React from 'react'
import UserReview from '../../UserReview'
import SubGetStarted from "./SubGetStarted"
import SubHeroSection from './SubHeroSection'
import SubPricing from './SubPricing'

const SubPricingPlan = () => {
    return (
        <div>
            <SubHeroSection/>
            <SubPricing/>
            <SubGetStarted/>
            <UserReview/>
        </div>
    )
}

export default SubPricingPlan;
