import HomeLayout from "../../Layouts/HomeLayout";
import BuyerSignUpModal from '../../Components/Modal/BuyerSignUpModal';

const Notification = () => {
    return (
        <HomeLayout>
            <BuyerSignUpModal isOpen={true}></BuyerSignUpModal>
            <div className="lg:w-1/2 md:w-2/3 mx-auto my-24 text-center px-4">
                <h2 className="text-red-500 font-bold text-2xl lg:text-4xl md:text-3xl">WE ARE SORRY THAT YOU DON'T MEET THE MINIMUM REQUIREMENTS AT THIS TIME.</h2>
                <p className="lg:text-xl md:text-lg text-md mt-5">However, we realize things may change for you down the road.  When you do meet our minimum requirements, please complete another application at that time.</p>
            </div>
        </HomeLayout>
    );
};

export default Notification;