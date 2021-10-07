import AboutMeForm from "./AboutMeForm";



import { Formik, Form } from "formik";
import * as Yup from "yup";


//formik properties starts

const initialValues = {
  firstName: "",
  lastName: "",
  gender: "",
  dob: "",
};



const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  dob: Yup.string().required("Required"),
  
});

const onSubmit = (values, { resetForm }) => {
  console.log(values);
};

const Profile = ({ tab }) => {


  return (
    <div
      className={`mt-10 w-full transition duration-300 mb-10 `}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="border-2 px-5 py-10 rounded-lg">
            <div className="flex gap-5">
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
              <p className="mt-2 mb-5">
                Your name will Not be publicly displayed.
              </p>
            </div>

            <AboutMeForm />
          </div>
          
        </Form>
      </Formik>
    </div>
  );
};

export default Profile;
