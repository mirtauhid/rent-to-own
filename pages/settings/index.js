import React from 'react'
import UsersOnly from '../../Components/ProtectedRoutes/UsersOnly'
import SubSettings from '../../Components/SubPage/SubSettings'
import HomeLayout from '../../Layouts/HomeLayout'

const Settings = () => {
    return (
        <HomeLayout>
            <UsersOnly type="BUYER">
                <SubSettings />
            </UsersOnly>
        </HomeLayout>
    )
}

export default Settings
