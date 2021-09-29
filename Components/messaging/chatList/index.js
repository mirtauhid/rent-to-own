import React from 'react';
import ChatListItems from "./ChatListItems";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";

const index = props => {
    const users = useSelector((state) => state.message.users);
    return (
        <div className="md:max-w-[320px]">
            <h1 className="font-semibold">Messages</h1>
            <div className="border mt-6"></div>
            <div className={style["chatlist__items"]}>
            {users.map((item, index) => {
                return (
                <ChatListItems
                    setSelectedId={props.setSelectedId}
                    name={item.name}
                    key={item.id}
                    userId={item.id}
                    animationDelay={index + 1}
                    active={item.active ? "active" : ""}
                    isOnline={item.isOnline ? "active" : ""}
                    image={item.image}
                />
                );
            })}
            </div>
        </div>
    )
}

export default index
