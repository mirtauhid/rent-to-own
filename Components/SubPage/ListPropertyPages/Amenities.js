import React from 'react';

const Amenities = ({ steps, setSteps, formik }) => {
    const amenities = [
        "Wifi",
        "Fully Equipped Kitchen",
        "Wall-To-Wall Carpet",
        "Window Coverings",
        "Inner-Spring Mattress",
        "Memory Mattress",
        "Sleeper Couch",
        "Air Conditioning (A/C)",
        "Heater",
        "Washer & Dryer",
        "Off Street Parking",
        "Attached Garage",
        "Outdoor Space",
        "TV / Cable",
        "Laptop Work Area",
        "Smoke Detector",
        "Travel Crib",
        "Jacuzzi"];

    const handleAmenities = (e,item) => {
        const index = formik.values?.amenities?.indexOf(item);
        if(e.target.checked){
            if(index === -1){
                formik.setFieldValue('amenities',[...formik.values?.amenities,item])
            }
        }else{
            if(index !== -1){
                const newArr = formik.values?.amenities;
                newArr?.splice(index, 1)
                formik.setFieldValue('amenities',newArr)
            }
        }
    }
    
    return (
        <div className="p-6">
            <h2 className="uppercase text-center text-2xl font-bold my-5">what amenities does your home have?</h2>

            {
                amenities.map((item, index) => {
                    const isChecked = formik.values?.amenities.find(formikItem => formikItem === item) ? true : false;
                    return (
                        <div className="mb-3 p-2" key={item}>
                            <label className=" block text-gray-500 font-bold">
                                <input
                                    className="mr-2 leading-tight"
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={(e) => handleAmenities(e,item)} />
                                <span className="text-sm">
                                    {item}
                                </span>
                            </label>
                        </div>
                    )
                })
            }


            <div className="w-full flex justify-between mb-2 p-2">
                <button
                    type="button"
                    onClick={() => setSteps({ ...steps, first: false })}
                    className="text-primary border-2 border-primary rounded py-2 px-12">Back</button>
                <button
                    type="submit"
                    onClick={() => setSteps({ ...steps, second: true })}
                    className=" bg-green-400 text-white rounded py-2 px-12">Next Step</button>
            </div>
        </div>
    );
};

export default Amenities;