import firebase from 'firebase/compat/app';
import React, { useEffect, useRef, useState } from "react";
import { BiSend } from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import { getConversation } from '../../../redux/slices/messaging';
import ChatItem from "./ChatItem";
import style from './style.module.css';

const index = ({ selectedId, messages, user1, activeRoom, firestore, rooms, selectedUser }) => {
    const messagesEndRef = useRef(null)
    const [content, setContent] = useState('')
    const dispatch = useDispatch();
    //const conversations = useSelector((state) => state.message);
    const loggedInUser = useSelector((state) => state.auth.userData);
    //const chat = conversations?.chats.find(item => item.userId === selectedId);
    //const users = useSelector((state) => state.message.users);
    //const user = users?.find(item => item.id === selectedId);
    //const roomKey = rooms?.find(item => item.roomId === activeRoom && user1 === item.userId)

    const setValue = (e) => setContent(e.target.value);
    useEffect(() => {
        dispatch(getConversation());
    })

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ block: 'end', behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    const enterKeyPress = event => {
        if (content.length) {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                sendMsg();
            }
        }
    };

    const sendMsg = async () => {
        let msg = content;
        setContent('');
        if (msg.length) {
            const messagesRef = firestore.collection('messages');
            await messagesRef.add({
                userId: parseInt(loggedInUser.id),
                roomId: activeRoom,
                msg,
                type: 'TEXT',
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
        }
        // const roomRef = firestore.collection('userRooms').doc(roomKey?.key)
        // const res = await roomRef.update({
        //     lastSeen: firebase.firestore.FieldValue.serverTimestamp()
        // });
    }

    useEffect(() => {

    }, [loggedInUser])

    return (
        <div className="pl-5 ">
            <div className="flex items-center">
                <img
                    className="h-8 w-8 rounded-full"
                    src={selectedUser?.image?.secure_url ? selectedUser?.image?.secure_url : "https://res.cloudinary.com/jingalalatech/image/upload/v1634006214/user-dummy-200x200-1_czlwxk_oevsbo.png"}
                />
                <h1 className="ml-4">{selectedUser?.firstName}</h1>
            </div>
            <div className="border mt-4"></div>
            {/* body */}
            <div className={style["content__body"]}>
                <div className={style["chat__items"]}>
                    <div>
                        {messages && loggedInUser?.id ? messages?.map((itm, index) => {
                            return (
                                <div key={index}>
                                    <ChatItem
                                        animationDelay={index + 2}
                                        key={index}
                                        user={itm.userId === parseInt(loggedInUser?.id) ? "me" : "other"}
                                        msg={itm.msg}
                                        createdAt={itm.createdAt}
                                        image={selectedUser?.image?.secure_url}
                                        sUserImage={loggedInUser?.image?.secure_url}
                                    />
                                </div>
                            );
                        }) : (
                            <div className="flex items-center justify-center h-full min-h-[400px] w-[250px]">
                                <p className="text-gray-300 p-4 text-center">Sorry no conversation found</p>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className="w-full">
                <div className={style["sendNewMessage"]} >
                    {/* <button className={"flex justify-center items-center"}>
                        <FaPlus fill={"#00dbb1"}/>
                    </button> */}
                    <div className="border w-full h-auto max-h-16 flex items-center">
                        <input
                            type="text"
                            placeholder="Type a message here"
                            value={content}
                            onChange={setValue}
                            className="w-full max-w-16 p-1"
                            onKeyDown={(e) => enterKeyPress(e)}
                        //className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button
                        className="flex justify-center items-center"
                        id="sendMsgBtn"
                        onClick={() => sendMsg()}
                    >
                        <BiSend fill={"#00dbb1"} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default index
