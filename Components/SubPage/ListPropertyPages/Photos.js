import React from 'react';
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa';
import { onSelectFile } from '../../../Helpers/imageHandlers';

const Photos = ({ steps, setSteps, formik }) => {
    const handleFileUpload = (e) => {
        onSelectFile(e)
            .then(data => {
                const { base64, file } = data;
                formik.setFieldValue('images', [...formik.values?.images, base64])
            })
    }
    const handleDeleteImg = (index) => {
        formik.setFieldValue('images', formik.values?.images?.filter((photo, i) => i != index))
    }

    const handleNext = () => {
        if (formik.values?.images?.length) {
            setSteps({ ...steps, fourth: true })
        }
    }
    console.log(formik.errors);
    return (
        <div className="p-6">
            <h2 className="uppercase text-center text-2xl font-bold my-5">ADD A FEW PHOTOS</h2>
            <div className="md:flex md:flex-wrap w-full mb-2 p-2">
                {
                    formik.values?.images?.map((photo, index) => {
                        return (
                            <div key={photo} className="md:w-1/2 text-secondary text-sm font-bold mb-2 p-2 ">
                                <div className="border-2 relative border-dashed overflow-hidden rounded-lg h-80 md:h-60 lg:h-80">
                                    <img src={photo} className="w-full" style={{ height: "fit-content" }} />
                                    <button
                                        onClick={() => handleDeleteImg(index)}
                                        className="absolute top-0 right-0 rounded w-10 h-10 bg-gray-200 flex justify-center items-center text-xl">
                                        <FaTimes />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="md:w-1/2 block text-secondary text-sm font-bold mb-2 p-2">
                    <label className="cursor-pointer" htmlFor="upload">
                        <div className="flex justify-center items-center flex-col  h-80 md:h-60 lg:h-80 w-full border-2 border-dashed rounded-lg">
                            <FaCloudUploadAlt className="text-7xl" />
                            <p className="px-6 text-sm">Choose an image</p>
                            <p className="px-6 text-sm">JPG, PNG, GIF, Max</p>
                            <p className="px-6 text-sm">10 MB</p>
                        </div>
                        <input
                            className="hidden"
                            id="upload"
                            type="file"
                            placeholder="Please enter your upload here..."
                            name="upload"
                            accept="image/*"
                            onChange={handleFileUpload}
                        />
                    </label>
                </div>
            </div>
            {
                formik.errors.images &&
                <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.images}</div>
            }

            <p className="my-5 text-sm ml-2 mb-8">Tip: Choose the top 8-10 photos of your home from different angles in good light that really show the space.</p>

            <div className="w-full flex justify-between mb-2 p-2">
                <button
                    type="button"
                    onClick={() => setSteps({ ...steps, third: false })}
                    className="text-primary border-2 border-primary rounded py-2 px-12">Back</button>
                <button
                    type="submit"
                    onClick={handleNext}
                    className=" bg-green-400 text-white rounded py-2 px-12">Preview</button>
            </div>
        </div>
    );
};

export default Photos;