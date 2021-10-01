import React from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import Nav from '../../Components/messaging/nav';
import ChatList from '../../Components/messaging/chatList';
import ChatBody from '../../Components/messaging/chatBody';
import DetailsContent from '../../Components/messaging/detailsContent';

const index = () => {
    const [selectedId, setSelectedId] = React.useState(1);
    return (
        <HomeLayout>
            <div className="container px-3 mx-auto p-5 relative w-full __main">
                <div className="flex flex-wrap justify-center">
                    <ChatList setSelectedId={setSelectedId}/>
                    <ChatBody selectedId={selectedId} />
                    <div className="hidden xl:block" >
                        <DetailsContent />
                    </div>
                </div>
            </div>
        </HomeLayout>
        
    )
}

export default index
