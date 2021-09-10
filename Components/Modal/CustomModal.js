import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    content: {
        border: 0,
        width: '100%',
        padding: 0,
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
};


const CustomModal = ({children,isOpen}) => {
    return (
        <Modal
            style={customStyles}
            isOpen={isOpen}>
            <div className="rounded-2xl px-6 py-3 w-3/4 md:w-2/3 lg:w-2/5 xl:1/3 m-auto bg-white">
                {/* Children goes here */}
                {children}
            </div>
        </Modal>
    );
};

export default CustomModal;