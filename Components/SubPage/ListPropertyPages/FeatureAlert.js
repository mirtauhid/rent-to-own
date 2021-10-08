import React from 'react';
import { FaTimes } from 'react-icons/fa';
import CustomModal from '../../Modal/CustomModal';

const FeatureAlert = ({setShowModal, showModal}) => {
    return (
        <CustomModal isOpen={showModal}>
        {/* For cross button  */}
        <div className="text-right px-4">
            <button
                className="p-2 rounded hover:bg-gray-200 text-2xl"
                onClick={() => setShowModal(!showModal)}
            >
                <FaTimes />
            </button>
            <h2 className="capitalized text-center text-red-500 font-bold text-lg mb-4 mt-3">
                Error
            </h2>
            <p className="text-center">
                You have to select at least one feature!
            </p>
        </div>
    </CustomModal>
    );
};

export default FeatureAlert;