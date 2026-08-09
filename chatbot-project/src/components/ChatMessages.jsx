import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage';
import './chatMessages.css'

//chatMessages and setChatMessages are from the App component and are used as props
export const ChatMessages = ({chatMessages}) => {
    const chatMessagesRef = useAutoScroll([chatMessages]);
    
    function useAutoScroll (dependencies) {
    
        const containerRef = useRef(null)

        //always put hooks in the top of the component, do not put hooks inside anything (if statement or function)
        //the array [chatMessages] is a dependency array = it is the control when useEffect runs
        //Best practice for a useEffect is to give it a dependency array to avoid running too often 
        useEffect( () => {
            const containerElement = containerRef.current
            

            if(containerElement) {
                containerElement.scrollTop = containerElement.scrollHeight;
            }
        }, dependencies);

        return containerRef;
    }

    return(
        <>
        <div 
            className="chat-messages-container"
            ref={chatMessagesRef}
        >
        {chatMessages.map((chatMessage) => {
                return(
                        <ChatMessage 
                            key={chatMessage.id}
                            message={chatMessage.message}
                            sender={chatMessage.sender}
                            time={chatMessage.time}
                        />
                )
            })}
        </div>
        </>
    );
}