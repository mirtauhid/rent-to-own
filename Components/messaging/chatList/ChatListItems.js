import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import style from "./style.module.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useDispatch, useSelector } from "react-redux";
import { getUserDesc } from '../../../redux/slices/areas';

const ChatListItems = props => {
  const dispatch = useDispatch();
  const firestore = firebase.firestore();
  const [userId, setUserId] = useState();
  const userDesc = useSelector((state) => state.areas.userDesc);
  const [lastMessage, setLastMessage] = useState();
  const selectChat = (e) => {
    props.changeRoom(props.roomId)
    props.setSelectedId(props.roomId)
    props.setSelectedUser(userDesc);
  };
  const lastmsg = lastMessage ? lastMessage[0]?.msg.slice(0, 45) + (lastMessage[0]?.msg.length > 35 ? "..." : "") : null

  useEffect(() => {
    if(userId) {
      dispatch(getUserDesc({userId: userId}))
    }
  }, [dispatch, userId]);

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
  }, [])

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
          userDesc?.image?.secure_url ? userDesc?.image?.secure_url : "https://res.cloudinary.com/jingalalatech/image/upload/v1634006214/user-dummy-200x200-1_czlwxk_oevsbo.png"
        }
        isOnline={true}
      />

      <div className="ml-4 w-56">
        <div className="">
          <p className="font-semibold text-sm">{userDesc?.firstName}</p>
        </div>
        <div className="flex relative">
          <p className="text-xs mt-1 text-gray-500 w-36">{lastmsg}</p>
          {/* <p className="text-xs text-gray-500 absolute right-2 top-1">32 mins ago</p> */}
        </div>
      </div>
    </div>
  );
}

  export default ChatListItems;