import React from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { GiBathtub } from 'react-icons/gi';
import { IoIosBed } from 'react-icons/io';

const CustomCounter = ({ labelText, icon, formik, fieldName }) => {
    const handleIncrease = () => {
        formik.setFieldValue(fieldName, formik.values?.[fieldName] + 1)
    }
    const handleDecrease = () => {
        if (formik.values?.[fieldName] > 0) {
            formik.setFieldValue(fieldName, formik.values?.[fieldName] - 1)
        } else {
            formik.setFieldValue(fieldName, 0)
        }
    }
    return (
        <div className="block">
            {
                icon === "IoIosBed"
                    ? <label className="block text-gray-700 text-sm font-bold mb-2"><IoIosBed className="inline-block text-2xl mr-2" style={{ fill: '#00dbb1' }} /> {labelText}</label>
                    : <label className="block text-gray-700 text-sm font-bold mb-2"><GiBathtub className="inline-block text-2xl mr-2" style={{ fill: '#00dbb1' }} /> {labelText}</label>
            }
            <div className="flex flex-wrap">
                <AiOutlineMinusCircle
                    onClick={handleDecrease}
                    className="inline-block text-2xl cursor-pointer"
                    style={{ fill: '#00dbb1' }} />

                <span className="inline-block mx-3">{formik.values?.[fieldName]}</span>

                <AiOutlinePlusCircle
                    onClick={handleIncrease}
                    className="inline-block text-2xl cursor-pointer"
                    style={{ fill: '#00dbb1' }} />
            </div>
        </div>
    );
};

export default CustomCounter;