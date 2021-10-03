import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import baseURL from '../../Helpers/httpRequest';
import { signIn } from '../../redux/slices/auth';
import CustomModal from './CustomModal';

const SignInModal = ({ showSignInModal, setShowSignInModal, setShowSignUpModal, redirectLink }) => {
  const [error, setError] = useState({ status: false, msg: "" })
  const [loading, setLoading] = useState(false)

  // Redux dispatch
  const dispatch = useDispatch();

  // next router
  const router = useRouter()

  // Formik Validation
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        values.password
      )
    ) {
      errors.password =
        "Password must be at least 8 character, a capital & a small letter, a number & a special character required!";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      // loading started
      setLoading(true);
      setError({status:false,msg:""})

      // axios request for checking sign in
      axios({
        method: "POST",
        url: `${baseURL}/v2/auth/login`,
        data: values
      })
        .then((res) => {
          if (res.data.success) {
            // Saving token to local-storage
            localStorage.setItem('authToken', res.data.data.token)

            // verifying token
            axios({
              method: "POST",
              url: `${baseURL}/v2/auth/verify`,
              headers: { Authorization: res.data.data.token}
            })
              .then((res) => {
                if (res.data.success) {
                  // loading end
                  setLoading(false);
                  // Making error empty
                  setError({ status: false, msg: "" })
                  // Updating redux
                  dispatch(signIn());
                  // Dynamic routing
                  router.push(redirectLink)
                  // Closing the modal
                  setShowSignInModal(false);
                  resetForm({});
                } else {
                  // loading end
                  setLoading(false);
                  setError({ status: true, msg: "Error occurred. Please try again!" })
                }
              })
              .catch((err) => {
                // loading end
                setLoading(false);
                setError({ status: true, msg: err.response.data.message })
              })
          } else {
            // loading end
            setLoading(false);
            setError({ status: true, msg: "Error occurred. Please try again!" })
          }
        })
        .catch((err) => {
          // loading end
          setLoading(false);
          setError({ status: true, msg: err.response.data.message })
        })
    },
  });


  return (
    <CustomModal isOpen={showSignInModal}>
      {/* For cross button  */}
      <div className="text-right px-4">
        <button
          className="p-2 rounded hover:bg-gray-200 text-2xl"
          onClick={() => setShowSignInModal(false)}
        >
          <FaTimes />
        </button>
      </div>
      <h2 className="uppercase text-center font-bold text-2xl mb-10 mt-3">
        Log In
      </h2>

      {
        error.status && <p className="bg-red-50 border border-red-200 text-red-500 text-center p-2 my-2 rounded">{error.msg}</p>
      }

      <form onSubmit={formik.handleSubmit} >
        <div className="w-full mb-2 p-2">
          <label
            className="block text-secondary text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="john.doe@gmail.com"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-md text-red-500 mt-2 ml-1">
              {formik.errors.email}
            </div>
          )}
        </div>

        <div className="w-full mb-2 p-2">
          <label
            className="block text-secondary text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password here"
            autoComplete="off"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-md text-red-500 mt-2 ml-1">
              {formik.errors.password}
            </div>
          )}
        </div>

        <div className="w-full mb-2 p-2  text-right">
          <a href="#" className="inline-block font-bold">
            Forget Password
          </a>
        </div>

        <div className="w-full mb-2 p-2">
          <button
            type={loading ? "button" : "submit"}
            className="w-full flex justify-center items-center bg-primary text-white rounded py-2"
            disabled={loading}
          >
            {
              loading &&
              <span className="animate-spin flex justify-center items-center w-7">
                <span className="rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
              </span>
            }
            {loading ? "Loading..." : "Login"}
          </button>
        </div>

        <div className="w-full mb-2 p-2 text-center">
          <p className="font-bold">
            Don't have an account?{" "}
            <button
              onClick={() => {
                setShowSignInModal(false)
                setShowSignUpModal(true)
              }}
              className="text-primary">
              Sign up
            </button>
          </p>
        </div>
      </form>
    </CustomModal>
  );
};

export default SignInModal;