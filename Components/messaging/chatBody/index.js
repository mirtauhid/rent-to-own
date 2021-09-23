import React, { Component, useState, createRef, useEffect } from "react";
import Avatar from '../chatList/Avatar';
import ChatItem from "./ChatItem";
import style from './style.module.css';
import { FaPlus } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';

const index = () => {
    const messagesEndRef = createRef(null);
    const chatItms = [
        {
        key: 1,
        image:
            "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "Hi Tim, How are you?",
        },
        {
        key: 2,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
        type: "other",
        msg: "I am fine.",
        messageImages: ['https://picsum.photos/200']
        },
        {
        key: 3,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
        type: "other",
        msg: "What about you?",
        },
        {
        key: 4,
        image:
            "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "Awesome these days.",
        
        },
        {
        key: 5,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
        type: "other",
        msg: "Finally. What's the plan?",
        },
        {
        key: 6,
        image:
            "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "what plan mate?",
        messageImages: ['https://picsum.photos/200', 'https://picsum.photos/200']
        },
        {
        key: 7,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
        type: "other",
        msg: "I'm taliking about the tutorial I'm taliking about the tutorial I'm taliking about the tutorial",
        },
    ];
    return (
        <div className="lg:min-w-[530px]">
            <div className="flex items-center">
                <img
                    className="h-8 w-8 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
                />
                <h1 className="ml-4">Tim Hover</h1>
            </div>
            <div className="border mt-4"></div>
            {/* body */}
            <div className={style["content__body"]}>
                <div className={style["chat__items"]}>
                    {chatItms.map((itm, index) => {
                    return (
                        <ChatItem
                            animationDelay={index + 2}
                            key={itm.key}
                            user={itm.type ? itm.type : "me"}
                            msg={itm.msg}
                            image={itm.image}
                            messageImages={itm.messageImages}
                        />
                    );
                    })}
                    <div ref={messagesEndRef} />
                </div>
                {/* footer */}
                <div className={style["content__footer"]}>
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
            
        </div>
    )
}

export default index
