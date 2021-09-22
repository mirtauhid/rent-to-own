import React from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import Nav from '../../Components/messaging/nav';
import ChatList from '../../Components/messaging/chatList';
import ChatBody from '../../Components/messaging/chatBody';
import DetailsContent from '../../Components/messaging/detailsContent';

const index = () => {
    return (
        <HomeLayout>
            <div className="container px-3 mx-auto p-5 relative w-full __main">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {/* <div className="">
                        <h1>Messages</h1>
                        <div className="border mt-6"></div>
                        <ChatList />
                    </div>
                    <div className="">
                        <h1>Mikel jonas</h1>
                        <div className="border mt-6"></div>
                        <ChatBody />
                    </div> */}
                    <ChatList />
                    <ChatBody />
                    <DetailsContent />
                </div>
            </div>
        </HomeLayout>
        
    )
}

export default index
