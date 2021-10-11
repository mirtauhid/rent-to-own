import React, { useEffect, useState } from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import ChatList from '../../Components/messaging/chatList';
import ChatBody from '../../Components/messaging/chatBody';
import DetailsContent from '../../Components/messaging/detailsContent';
import SubModal from '../../Components/messaging/SubModal';
import { FaWindowClose } from 'react-icons/fa';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import 'firebase/firestore';

const Message = () => {
    const [selectedId, setSelectedId] = useState('FtAPQ3tLUC4udTUB02Ao');
    const [messageVisible, setMessageVisible] = useState(false);

    const firebaseConfig = {
        apiKey: "AIzaSyC_lGVZ6JOEPNN9iFNtNGOc-SKwqilbVss",
        authDomain: "react-crap-31470.firebaseapp.com",
        projectId: "react-crap-31470",
        storageBucket: "react-crap-31470.appspot.com",
        messagingSenderId: "386963999048",
        appId: "1:386963999048:web:ea4a543be18ba98f104b7d"
      };

    //message
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState();
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    useEffect(() => {
        if(db) {
            async function getMsg() {
                const unsubscribe = 
                    collection(db, 'messages')
                const citySnapshot = await getDocs(unsubscribe);
                const cityList = citySnapshot?.docs?.map(doc => doc.data());
                setMessages(cityList)
            }
            async function getUsers() {
                const unsubscribe = 
                    collection(db, 'rooms')
                const citySnapshot = await getDocs(unsubscribe);
                const cityList = citySnapshot?.docs?.map(doc => doc.data());
                setUsers(cityList)
            }
            getMsg();
            getUsers();
        }
    }, [db]);

    // useEffect(() => {
    //     if(db) {
    //         const unsubscribe = db
    //             .collection('messages')
    //             .orderBy('createdAt')
    //             .limit(100)
    //             .onSnapshot(querySnapshot => {
    //                 const data = querySnapshot.docs.map(doc => ({
    //                     ...doc.data(),
    //                     id: doc.id,
    //                 }));
    //                 //update state
    //                 setMessages(data);
    //             })
    //         //Detach listenner
    //         return unsubscribe;
    //     }
    // }, [db]);

    console.log('==============msg======================');
    console.log(messages);
    console.log(users);
    console.log('====================================');

    return (
        <HomeLayout>
            <div className="container px-4 mx-auto p-5 relative w-full __main">
                <div className="flex flex-wrap justify-center">
                    <SubModal isOpen={messageVisible}>
                        <div 
                            onClick={() => setMessageVisible(!messageVisible)}
                            className="flex justify-end"
                        >
                            <FaWindowClose height={20} width={16}/>
                        </div>
                        <ChatBody selectedId={selectedId} messages={messages}/>
                    </SubModal>
                    <div 
                        className="hidden md:block"
                    >
                        <ChatList setSelectedId={setSelectedId} users={users}/>
                    </div>
                    <div 
                        onClick={() => setMessageVisible(!messageVisible)}
                        className="block md:hidden"
                    >
                        <ChatList setSelectedId={setSelectedId} users={users}/>
                    </div>
                    <div className="hidden md:block" >
                        <ChatBody selectedId={selectedId} messages={messages}/>
                    </div>
                    <div className="hidden xl:block" >
                        <DetailsContent />
                    </div>
                </div>
            </div>
        </HomeLayout>
        
    )
}

export default Message;
