import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import baseURL from '../../../Helpers/httpRequest';

const ChatListItems = props => {
  const firestore = firebase.firestore();
  const [userId, setUserId] = useState();
  const [userDescription, setUserDescription] = useState();
  const [lastMessage, setLastMessage] = useState();
  const selectChat = (e) => {
    props.changeRoom(props.roomId)
    props.setSelectedId(props.roomId)
    props.setSelectedUser(userDescription);
  };
  const lastmsg = lastMessage ? lastMessage[0]?.msg.slice(0, 30) + (lastMessage[0]?.msg.length > 30 ? "..." : "") : null

  const getInfo = async (userId) => {
    if (userId) {
      try {
        const response = await fetch(`${baseURL}/v2/public/users/${userId}`) ;
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        const resData = await response.json();
        setUserDescription(resData.data)
      }catch(err) {
          throw err;
      }
    }
  }

  useEffect(() => {
    getInfo(userId)
  }, [userId]);

  const snapshotToArray = (snapshot) => {
    const returnArr = [];
    snapshot.forEach((childSnapshot) => {
        const item = childSnapshot.data();
        item.key = childSnapshot.id;
        returnArr.push(item);
    });
    return returnArr;
  }

  const fetching = () => {
    firestore.collection('userRooms').where('roomId', '==', props.roomId).onSnapshot(snapshots => {
      setUserId(snapshotToArray(snapshots).find(item => item.userId != props.userId)?.userId)
    });
    firestore.collection('messages').where('roomId', '==', props.roomId).orderBy('createdAt', 'desc').limit(1).onSnapshot(snapshots => {
      setLastMessage(snapshotToArray(snapshots))
  });
  }

  useEffect(() => {
    fetching();
  }, [props])

  useEffect(() => {}, [lastMessage])

  return (
    <div
      style={{ animationDelay: `0.${props.animationDelay}s` }}
      onClick={selectChat}
      className={`flex cursor-pointer px-2 py-3 hover:border ${
        props.active ? props.active : ""
      } ${props.selectedId === props.roomId ? "bg-gray-200" : ""} `}
    >
      <Avatar
        className="h-16 w-16"
        image={
          userDescription?.image?.secure_url ? userDescription?.image?.secure_url : "https://res.cloudinary.com/jingalalatech/image/upload/v1634006214/user-dummy-200x200-1_czlwxk_oevsbo.png"
        }
        isOnline={true}
      />

      <div className="ml-4 w-56 lg:w-72">
        <div className="">
          <p className="font-semibold text-sm">{userDescription?.firstName}</p>
        </div>
        <div className="flex relative">
          <p className="text-xs mt-1 text-gray-500 w-40 lg:max-w-72">{lastmsg}</p>
          {/* <p className="text-xs text-gray-500 absolute right-2 top-1">32 mins ago</p> */}
        </div>
      </div>
    </div>
  );
}

  export default ChatListItems;