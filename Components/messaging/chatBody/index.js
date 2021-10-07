import React, { Component, useState, useRef, createRef, useEffect } from "react";
import Avatar from '../chatList/Avatar';
import ChatItem from "./ChatItem";
import style from './style.module.css';
import { FaPlus } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import { getConversation } from '../../../redux/slices/messaging';

const index = ({selectedId}) => {
    const messagesEndRef1 = useRef(null)
    const messagesEndRef = createRef(null);
    const dispatch = useDispatch();
    const conversations = useSelector((state) => state.message);
    const chat = conversations?.chats.find(item => item.userId === selectedId);
    const users = useSelector((state) => state.message.users);
    const user = users?.find(item => item.id === selectedId);
    useEffect(() => {
        dispatch(getConversation());
    })
    const scrollToBottom = () => {
        messagesEndRef1.current?.scrollIntoView({ block: 'end', behavior: "smooth" })
    }
    useEffect(() => {
        scrollToBottom()
    }, [chat]);
    return (
        <div className="">
            <div className="flex items-center">
                <img
                    className="h-8 w-8 rounded-full"
                    src={user.image}
                />
                <h1 className="ml-4">{user?.name}</h1>
            </div>
            <div className="border mt-4"></div>
            {/* body */}
            <div className={style["content__body"]}>
                <div className={style["chat__items"]}>
                    <div>
                    {chat ? chat?.messages.map((itm, index) => {
                        return (
                            <div key={index}>
                                <ChatItem
                                animationDelay={index + 2}
                                key={index}
                                user={itm.type ? itm.type : "me"}
                                msg={itm.msg}
                                image={itm.image}
                                sUserImage={user.image}
                                messageImages={itm.messageImages}
                                />
                            </div>
                        );
                    }) : (
                        <div className="flex items-center justify-center h-full min-h-[400px] w-[250px]">
                            <p className="text-gray-300 p-4 text-center">Sorry no conversation found</p>
                        </div>
                    )}
                    <div ref={messagesEndRef1} />
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className="w-full">
                <div className={style["sendNewMessage"]} >
                    <button className={"flex justify-center items-center"}>
                        <FaPlus fill={"#00dbb1"}/>
                    </button>
                    <input
                        type="text"
                        placeholder="Type a message here"
                        //onChange={this.onStateChange}
                        //value={this.state.msg}
                        
                    />
                    <button className="flex justify-center items-center" id="sendMsgBtn">
                        <BiSend fill={"#00dbb1"}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default index
