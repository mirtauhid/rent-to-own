import React from 'react';

const Preview = ({ steps, setSteps, formik }) => {
    return (
        <div className="p-6">
            <h2 className="uppercase text-center text-2xl font-bold my-5">preview you listing before submiting</h2>
            <div className="w-full flex flex-wrap">
                <h2 className="w-full text-xl font-bold mb-5">Images</h2>
                {
                    formik.values?.photos?.map((photo, index) => {
                        return (
                            <div key={photo} className="md:w-1/2 text-secondary text-sm font-bold mb-2 p-2 ">
                                <div className="border-2 relative border-dashed overflow-hidden rounded-lg h-80 md:h-60 lg:h-80">
                                    <img src={photo} className="w-full" style={{ height: "fit-content" }} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="my-5 shadow border border-gray-100 rounded p-4">
                <h2 className="text-xl font-bold mb-5">Description</h2>
                <div className="mb-3">
                    <h3 className="text-md font-bold">The name of your home listing:</h3>
                    <p>{formik.values?.name}</p>
                </div>
                <div className="mb-3">
                    <h3 className="text-md font-bold">Describe your home:</h3>
                    <p>{formik.values?.description}</p>
                </div>
                <div className="mb-3">
                    <h3 className="text-md font-bold">Home Type:</h3>
                    <p>{formik.values?.homeType}</p>
                </div>
                <div className="mb-3">
                    <h3 className="text-md font-bold">Number of bedrooms:</h3>
                    <p>{formik.values?.bedRooms}</p>
                </div>
                <div className="mb-3">
                    <h3 className="text-md font-bold">Number of bathrooms:</h3>
                    <p>{formik.values?.bathRooms}</p>
                </div>
                <div className="mb-3">
                    <h3 className="text-md font-bold">Accomodates (Number of people):</h3>
                    <p>{formik.values?.accomodates}</p>
                </div>
                <div className="mb-3">
                    <h3 className="text-md font-bold">Approximate square footage:</h3>
                    <p>{formik.values?.footage}</p>
                </div>
                <div className="mb-3">
                    <h3 className="text-md font-bold">Pet policy:</h3>
                    <p>{formik.values?.petPolicy}</p>
                </div>
            </div>

            <div className="my-5 shadow border border-gray-100 rounded p-4">
                <h2 className="text-xl font-bold mb-5">Location</h2>
                <div className="mb-3">
                    <h3 className="text-md font-bold">Address:</h3>
                    <p>{formik.values?.address}</p>
                </div>
                <div className="mb-3">
                    <h3 className="text-md font-bold">Apartment, suit, building, flat no. etc:</h3>
                    <p>{formik.values?.aptNo}</p>
                </div>
            </div>


            <div className="my-5 shadow border border-gray-100 rounded p-4">
                <h2 className="text-xl font-bold mb-5">Fair market value</h2>
                <div className="mb-3">
                    <p>${formik.values?.marketValue}</p>
                </div>
            </div>

            <div className="w-full flex justify-between mb-2 p-2">
                <button
                    type="button"
                    onClick={() => setSteps({ ...steps, fourth: false })}
                    className="text-primary border-2 border-primary rounded py-2 px-12">Back</button>
                <button
                    type="submit"
                    className=" bg-green-400 text-white rounded py-2 px-12">Submit</button>
            </div>
        </div>
    );
};

export default Preview;