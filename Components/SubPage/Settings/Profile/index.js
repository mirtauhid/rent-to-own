import {useState} from "react";
import AboutMeForm from "./AboutMeForm";
import DocumentUploadSection from "./DocumentUploadSection";
import ContactInfo from "./ContactInfo";
import Address from "./Address";


const Profile = ({ tab }) => {
  const [yesButtonClicked,setYesButtonClicked] = useState(false);

  return (
    <div
      className={`mt-10 absolute w-full transition duration-500 ${
        tab === "profile"
          ? "transform translate-x-0"
          : "transform translate-x-full"
      } `}
    >
      <div className="border-2 px-5">
        <div className="flex gap-5 mt-7">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src="/images/img_avatar.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-1">
            <p className="font-bold text-lg">Access:Guest</p>
            <p className="text-gray-400">Member since September 5, 2021</p>
          </div>
        </div>

        <div className="mt-10">
          <p className="font-semibold text-lg">About me</p>
          <p className="mt-2 mb-5">Your name will Not be publicly displayed.</p>
        </div>

        <AboutMeForm setYesButtonClicked={setYesButtonClicked}/>
      </div>

      {yesButtonClicked && <DocumentUploadSection />}
      {yesButtonClicked && <ContactInfo />}
      {yesButtonClicked && <Address />}
    </div>
  );
};

export default Profile;
