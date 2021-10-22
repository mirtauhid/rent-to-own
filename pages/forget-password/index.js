import ForgetPasswordUpdate from "../../Components/Modal/ForgetPasswordUpdate"
import GuestOnly from "../../Components/ProtectedRoutes/GuestOnly"
import HomeLayout from "../../Layouts/HomeLayout"

const ForgetPassword = () => {
    return (
        <HomeLayout>
            <GuestOnly>
                <ForgetPasswordUpdate />
            </GuestOnly>
        </HomeLayout>
    )
}

export default ForgetPassword