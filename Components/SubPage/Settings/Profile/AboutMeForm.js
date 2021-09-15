import { Field, ErrorMessage } from "formik";
import DatePicker from "./DatePicker";

const AboutMeForm = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <Field
            type="text"
            placeholder="First name"
            className="border-2 focus:outline-none p-2 w-full  rounded-md text-gray-500"
            name="firstName"
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="text-red-500"
          />
        </div>
        <div className="col-span-1">
          <Field
            type="text"
            placeholder="Last name"
            className="border-2 focus:outline-none p-2 w-full rounded-md"
            name="lastName"
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="text-red-500"
          />
        </div>
      </div>
      <p className="mb-4 mt-7">
        This info below is used for analysis only, and never shared
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <Field
            as="select"
            name="gender"
            id="gender"
            className={`bg-white border-2 p-2 rounded-md w-full focus:outline-none`}
          >
            <option value="" hidden>
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </Field>

          <ErrorMessage
            name="gender"
            component="div"
            className="text-red-500"
          />
        </div>

        <div className="col-span-1">
          <DatePicker />
        </div>
      </div>
    </>
  );
};

export default AboutMeForm;
