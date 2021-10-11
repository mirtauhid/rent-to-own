// import React, { useEffect, useState } from ‘react’
// import firebase from ‘firebase/compat/app’;
// import ‘firebase/compat/firestore’;
// const firebaseConfig = {
//     apiKey: “AIzaSyC_lGVZ6JOEPNN9iFNtNGOc-SKwqilbVss”,
//     authDomain: “react-crap-31470.firebaseapp.com”,
//     projectId: “react-crap-31470”,
//     storageBucket: “react-crap-31470.appspot.com”,
//     messagingSenderId: “386963999048”,
//     appId: “1:386963999048:web:ea4a543be18ba98f104b7d”
// };
//     // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);
//     const firestore = firebase.firestore();
// function Chatroom() {
//     const [content, setContent] = useState(‘’)
//     const [user, setUser] = useState(1)
//     const [rooms, setRooms] = useState(null)
//     const [messages, setMessages] = useState()
//     const changeUser = (id) => {
//         setUser(id);
//     }
//     console.log(user);
//     const [activeRoom, setActiveRoom] = useState();
//     const snapshotToArray = (snapshot) => {
//         const returnArr = [];
//         snapshot.forEach((childSnapshot) => {
//             const item = childSnapshot.data();
//             item.key = childSnapshot.key;
//             returnArr.push(item);
//         });
//         return returnArr;
//     }
//     const fetching = () => {
//         firestore.collection(“userRooms”).where(“userId”, “==“, user).onSnapshot(snapshots => {
//             setRooms(snapshotToArray(snapshots))
//         });
//     }
//     const changeRoom = (roomid) => {
//         if(activeRoom !== roomid) {
//             firestore.collection(“messages”).where(“roomId”, “==“, `${roomid}`).orderBy(‘createdAt’, ‘desc’).limit(10).onSnapshot(snapshots => {
//                 setActiveRoom(roomid);
//                 setMessages(snapshotToArray(snapshots))
//                 console.log(‘msg ‘, snapshotToArray(snapshots));
//             });
//         }
//     }
//     useEffect( () => {
//         fetching();
//     }, [activeRoom])
//     const sendMsg = async() => {
//         let msg = content;
//         setContent(‘’);
//         const messagesRef = firestore.collection(‘messages’);
//         await messagesRef.add({
//             userId: user,
//             roomId: activeRoom,
//             msg,
//             type: “TEXT”,
//             createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//         });
//     }
//     console.log(‘active room ’, activeRoom);
//     return (
//         <div className=“grid grid-cols-4 gap-3">
//             <div >
//                 <div className=“grid text-left p-2”>
//                     <p className=“text-center text-2xl pb-4">
//                         User
//                     </p>
//                     <button onClick={() => changeUser(1)}
//                     className=“border p-1 mb-2 bg-purple-400 hover:bg-purple-600 hover:text-white” >Omuk</button>
//                     <button onClick={() => changeUser(2)}
//                     className=“border p-1 mb-2 bg-purple-400 hover:bg-purple-600 hover:text-white”>Tomuk</button>
//                     <p className=“text-center text-2xl pb-4”>
//                         Rooms
//                     </p>
//                     <hr />
//                     <ul>
//                         { rooms && rooms?.map((room, index) => {
//                             return (
//                                 <button onClick={ () => changeRoom(room.roomId) } key={index} className=“border p-1 mb-2 w-full hover:text-white”>
//                                     { room.roomId }
//                                 </button>
//                             )
//                         })}
//                     </ul>
//                 </div>
//             </div>
//             <div className=“col-span-3”>
//             <h2>Chatroom</h2>
//                 <div className=“px-5">
//                     {messages && messages.map((msg,index) => {
//                         return (
//                             <p className={msg.userId === user ? ‘bg-green-500 py-1 px-2 mb-2 text-right rounded-md ’ : ‘bg-gray-200 py-1 px-2 mb-2 text-left rounded-md’}
//                             key={index}>{ msg.msg }</p>
//                         )
//                     })}
//                     <div className=“contianer pt-10”>
//                         <input className=“w-5/6 p-2"
//                         placeholder=“Enter chat” value={content} onChange={(e) => setContent(e.target.value)} />
//                         <button className=“rounded border px-4 py-2 w-1/6 hover:bg-green-500" onClick={() => sendMsg() } >Send</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Chatroom