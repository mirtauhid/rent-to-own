import React, { useEffect, useState } from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import ChatList from '../../Components/messaging/chatList';
import ChatBody from '../../Components/messaging/chatBody';
//import DetailsContent from '../../Components/messaging/detailsContent';
import SubModal from '../../Components/messaging/SubModal';
import { FaWindowClose } from 'react-icons/fa';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Message = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyC_lGVZ6JOEPNN9iFNtNGOc-SKwqilbVss",
        authDomain: "react-crap-31470.firebaseapp.com",
        projectId: "react-crap-31470",
        storageBucket: "react-crap-31470.appspot.com",
        messagingSenderId: "386963999048",
        appId: "1:386963999048:web:ea4a543be18ba98f104b7d"
    };
    //Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const firestore = firebase.firestore();

    const [selectedId, setSelectedId] = useState();
    const [messageVisible, setMessageVisible] = useState(false);
    const [startMessage, setStartMessage] = useState(true);
    const [newMessages, setNewMessages] = useState();
    const [newMessages2, setNewMessages2] = useState();
    const loggedInUser = useSelector((state) => state.auth?.userData);
    const router = useRouter()
    const {
        query: { buyerid, sellerid },
    } = router
    const [selectedUser, setSelectedUser] = useState();

    const handleConversation = () => {
        const createMsgs = async() => {
            const roomRef = firestore.collection('rooms');
            const r = await roomRef.add({
                lastActivity: firebase.firestore.FieldValue.serverTimestamp(),
            });
            const userroomRef = firestore.collection('userRooms');
            await userroomRef.add({
                lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
                roomId: r.id,
                userId: parseInt(sellerid),
            });
            await userroomRef.add({
                lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
                roomId: r.id,
                userId: parseInt(buyerid),
            });
            setActiveRoom(r.id)
            setStartMessage(!startMessage);
        }
        createMsgs();
    }

    //message
    const [messages, setMessages] = useState([]);
    const [rooms, setRooms] = useState(null)
    const [isConversationAvailable, setIsConversationAvailable] = useState()
    const [activeRoom, setActiveRoom] = useState();
    //const [users, setUsers] = useState();

    const snapshotToArray = (snapshot) => {
        const returnArr = [];
        snapshot.forEach((childSnapshot) => {
            const item = childSnapshot.data();
            item.key = childSnapshot.id;
            returnArr.push(item);
        });
        return returnArr;
    }

    const fetching = async () => {
        if(buyerid) {
            await firestore.collection('userRooms').where('userId', '==', parseInt(buyerid)).onSnapshot(snapshots => {
                setRooms(snapshotToArray(snapshots))
            });
        }
    }

    const fetchingTotalRooms = () => {
        if(buyerid) {
            firestore.collection('userRooms').onSnapshot(snapshots => {
                const data = snapshotToArray(snapshots);
                const roomId = data.filter(item => item.userId == buyerid).map((item) => item.roomId)
                const ans = data.filter(item => (
                    item.userId == sellerid && roomId.includes(item.roomId)
                ))
                console.log(ans);
                setIsConversationAvailable(!!ans.length)
            });
        }
    }

    useEffect(() => {}, [isConversationAvailable])

    useEffect(() => {
        fetchingTotalRooms()
    }, [buyerid]);

    const changeRoom = async (roomid) => {
        if(activeRoom !== roomid) {
            firestore.collection('messages').where('roomId', '==', `${roomid}`).orderBy('createdAt', 'desc').limit(5).onSnapshot(snapshots => {
                setActiveRoom(roomid);
                setMessages(snapshotToArray(snapshots).reverse())
            });
        }
        //const docRef = firestore.collection('messages').where('roomId', '==', `${roomid}`)
        //const snapshot = await docRef.get()
        // const startAtSnapshot = firestore.collection('messages').where('roomId', '==', `${roomid}`).orderBy('createdAt', 'desc')
        //     .startAt(snapshot)
        // await startAtSnapshot.limit(10).onSnapshot(snapshots => {
        //     setNewMessages(snapshotToArray(snapshots).reverse())
        // });
        firestore.collection('messages').where('roomId', '==', `${roomid}`).orderBy('createdAt', 'desc').limit(10).onSnapshot(snapshots => {
            setNewMessages2(snapshotToArray(snapshots).reverse())
        });
    }

    useEffect(() => {
        if(activeRoom) {
            firestore.collection('messages').where('roomId', '==', `${activeRoom}`).orderBy('createdAt', 'desc').limit(5).onSnapshot(snapshots => {
                setMessages(snapshotToArray(snapshots).reverse())
            });
        }
    }, [activeRoom])

    // useEffect(() => {
    //     fetchingUser();
    // }, []);

    useEffect( () => {
        fetching();
    }, [buyerid])

    useEffect( () => {

    }, [rooms])

    return (
        <HomeLayout>
            {rooms && loggedInUser ? 
            <div className="container px-4 mx-auto p-5 relative w-full __main">
                <div className="flex flex-wrap justify-center">
                    <div className="flex items-center justify-center">
                        <SubModal isOpen={startMessage} isMiddle={true}>
                            {isConversationAvailable == true ? (
                                <div>
                                    <p>Previous Conversation found. Press OK to continue with the conversation.</p>
                                    <div 
                                        onClick={() => setStartMessage(!startMessage)}
                                        className="flex justify-center"
                                    >
                                        <div className="rounded-md mt-5 h-10 w-20 bg-green-200 flex justify-center items-center">
                                            <p>OK</p>
                                        </div>
                                    </div>
                                </div>
                            )  : (
                                <div>
                                    <div className="flex justify-center">
                                        <p>Are you sure to start a new conversation</p>
                                    </div>
                                    <div 
                                        onClick={handleConversation}
                                        className="flex justify-center"
                                    >
                                        <div className="rounded-md mt-5 h-10 w-20 bg-green-200 flex justify-center items-center">
                                            <p>Confirm</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SubModal>
                    </div>
                    <SubModal isOpen={messageVisible}>
                        <div 
                            onClick={() => setMessageVisible(!messageVisible)}
                            className="flex justify-end"
                        >
                            <FaWindowClose height={24} width={16}/>
                        </div>
                        <ChatBody 
                            selectedUser={selectedUser}
                            selectedId={selectedId} messages={messages} 
                            activeRoom={activeRoom} firebase={firebase} 
                            firestore={firestore} rooms={rooms}
                            rooms={rooms}
                            loggedInUser={loggedInUser?.id}
                        />
                    </SubModal>
                    {rooms && 
                        <div 
                            className="hidden md:block"
                        >
                            <ChatList 
                                selectedId={selectedId} setSelectedId={setSelectedId} 
                                changeRoom={changeRoom} rooms={rooms}
                                setSelectedUser={setSelectedUser}
                            />
                        </div>
                    }
                    {rooms && 
                        <div 
                            onClick={() => setMessageVisible(!messageVisible)}
                            className="block md:hidden"
                        >
                            <ChatList 
                                selectedId={selectedId} setSelectedId={setSelectedId} 
                                changeRoom={changeRoom}  rooms={rooms}
                                setSelectedUser={setSelectedUser}
                            />
                        </div>
                    }
                    
                    {messages && activeRoom && loggedInUser ? 
                    <div className="hidden md:block" >
                        <ChatBody 
                            selectedUser={selectedUser}
                            selectedId={selectedId} messages={messages} 
                            activeRoom={activeRoom} firebase={firebase} 
                            firestore={firestore} rooms={rooms}
                            rooms={rooms}
                            loggedInUser={loggedInUser?.id}
                        />
                    </div> : null}
                    {/* <div className="hidden xl:block" >
                        <DetailsContent />
                    </div> */}
                </div>
            </div> : 
            <div className="container px-4 mx-auto p-5 relative w-full __main">
                <div className="">
                    <p>Loading</p>
                </div>
            </div>}
        </HomeLayout>
        
    )
}

export default Message;
