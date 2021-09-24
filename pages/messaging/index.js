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
                <div className="flex flex-wrap justify-center">
                    <ChatList />
                    <ChatBody />
                    <DetailsContent />
                </div>
            </div>
        </HomeLayout>
        
    )
}

export default index
