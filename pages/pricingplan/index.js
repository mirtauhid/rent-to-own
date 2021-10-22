import React from 'react'
import UsersOnly from '../../Components/ProtectedRoutes/UsersOnly'
import SubPricingPlan from "../../Components/SubPage/SubPricingPlan"
import HomeLayout from '../../Layouts/HomeLayout'

const PricingPlan = () => {
    return (
        <HomeLayout>
            <UsersOnly type="SELLER">
            <SubPricingPlan/>
            </UsersOnly>
        </HomeLayout> 
    )
}

export default PricingPlan
