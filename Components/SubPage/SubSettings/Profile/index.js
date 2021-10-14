import EditAddress from "../../SellerProfile/EditAddress";
import EditProfileData from "../../SellerProfile/EditProfileData";


const Profile = ({ tab }) => {
  return (
    <div className={`mt-10 w-full transition duration-300 mb-10 border-2 px-5 rounded-md`}>
      <EditProfileData />
      <EditAddress />
    </div>
  );
};

export default Profile;
