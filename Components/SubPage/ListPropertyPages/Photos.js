import { useFormik } from 'formik';
import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const Photos = ({ steps, setSteps }) => {
    const [photo, setPhoto] = useState([])
    const validate = values => {
        const errors = {};

        if (!values.upload) { errors.upload = 'Required' }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            upload: '',
        },
        validate,
        onSubmit: values => {
            console.log(values);
            setSteps({ ...steps, fourth: true })
        },
    });

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            if (file) {
                const fileReader = new FileReader();
                fileReader?.readAsDataURL(file);
                fileReader.onload = () => {
                    resolve(fileReader.result);
                };
                fileReader.onerror = () => {
                    reject(error);
                };
            }
        });
    };
    const onSelectFile = async (e) => {
        // setFileName(e.target.files[0]?.name);
        const base64 = await convertBase64(e.target.files[0]);
        console.log(base64);
        if (base64 instanceof Error) {
            return;
        }
        console.log(base64)
        setPhoto([...photo, base64])
    };
    return (
        <div className="p-6">
            <h2 className="uppercase text-center text-2xl font-bold my-5">ADD A FEW PHOTOS</h2>
            <form onSubmit={formik.handleSubmit} >


                <div className="flex w-full mb-2 p-2">
                    <label className="w-1/2 inline-block text-secondary text-sm font-bold mb-2" htmlFor="upload">
                        <div className="flex justify-center items-center flex-col h-60 w-80 border-2 border-dashed rounded-lg">
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
                            onChange={onSelectFile}
                        />
                    </label>
                    <div className="w-1/2">
                        {
                            photo?.map(img => <div className="w-1/4 inline-block mb-2">
                                <img className="w-20 h-20 block m-auto border-2" src={img} alt="" />
                            </div>)
                        }
                    </div>
                </div>

                <p className="my-5 text-sm ml-2">Tip: Choose the top 8-10 photos of your home from different angles in good light that really show the space.</p>

                <div className="w-full mb-2 p-2">
                    <button type="submit" className=" bg-green-400 text-white rounded py-2 px-12">Publish</button>
                </div>
            </form>
        </div>
    );
};

export default Photos;