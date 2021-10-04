import React from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import Nav from '../../Components/messaging/nav';
import ChatList from '../../Components/messaging/chatList';
import ChatBody from '../../Components/messaging/chatBody';
import DetailsContent from '../../Components/messaging/detailsContent';
import SubModal from '../../Components/messaging/SubModal';
import { FaWindowClose } from 'react-icons/fa';

const Message = () => {
    const [selectedId, setSelectedId] = React.useState(1);
    const [messageVisible, setMessageVisible] = React.useState(false);
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
                        <ChatBody selectedId={selectedId}/>
                    </SubModal>
                    <div 
                        className="hidden md:block"
                    >
                        <ChatList setSelectedId={setSelectedId}/>
                    </div>
                    <div 
                        onClick={() => setMessageVisible(!messageVisible)}
                        className="block md:hidden"
                    >
                        <ChatList setSelectedId={setSelectedId}/>
                    </div>
                    <div className="hidden md:block" >
                        <ChatBody selectedId={selectedId} />
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
