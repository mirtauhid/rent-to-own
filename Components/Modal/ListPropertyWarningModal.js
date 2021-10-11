import React from 'react'
import CustomModal from "./CustomModal";
import {AiOutlineWarning} from "react-icons/ai"
import { FaTimes } from 'react-icons/fa';

const ListPropertyWarningModal = ({showWarningModal,setShowWarningModal}) => {
    return (
      <CustomModal isOpen={showWarningModal}>
        <div className="text-right px-4">
          <button
            className="p-2 rounded hover:bg-gray-200 text-2xl"
            onClick={() => setShowWarningModal(false)}
          >
            <FaTimes />
          </button>
        </div>
        <div className="text-center">
          <AiOutlineWarning className="mx-auto text-3xl" />
          <p>You are not allowed to enlist properties</p>
          <p>Please Log in from the seller account to enlist your property.</p>
        </div>
      </CustomModal>
    );
}

export default ListPropertyWarningModal
