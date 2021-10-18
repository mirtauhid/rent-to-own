import React from 'react';
import ChatListItems from "./ChatListItems";
import style from "./style.module.css";

const index = props => {
    const rooms = props.rooms;
    return (
        <div className="max-w-[320px] lg:max-w-[500px]">
            <h1 className="font-semibold">Messages</h1>
            <div className="border mt-6"></div>
            <div className={style["chatlist__items"]}>
            {rooms?.map((item, index) => {
                return (
                <ChatListItems
                    setSelectedUser={props.setSelectedUser}
                    selectedId={props.selectedId}
                    setSelectedId={props.setSelectedId}
                    name={item.roomId}
                    roomId={item.roomId}
                    image={item.image}
                    key={index}
                    changeRoom={props.changeRoom}
                    userId={item.userId}
                    animationDelay={index + 1}
                    // active={item.active ? "active" : ""}
                    // isOnline={item.isOnline ? "active" : ""}
                />
                );
            })}
            </div>
        </div>
    )
}

export default index
