import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ListItem = ({children}) => {
    return (
        <li className="my-3" style={{ display: "grid", gridTemplateColumns: "28px 1fr" }}>
            <FaCheck className="inline-block mt-2" fill="#00dbb1" />
            <span className="inline-block">{children}</span>
        </li>
    );
};

export default ListItem;