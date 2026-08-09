import UserIcon from '../assets/userIcon.png'
import RobotIcon from '../assets/robotIcon.png'
import LoadingSpinner from '../assets/loading-spinner.gif'
import './ChatMessage.css'

//chat message component
export function ChatMessage({message, sender, time}) {

    return (
        <>  
        {/* if sender is user this will show */}
        {sender === 'user' && (
                <div className="chat-bot-div user">
                    <div>
                        <p className="chat-bot-message">{message}<br/>
                        <span style={{fontSize: '12px', color: '#999'}}>{time}</span></p>
                    </div>
                    <img 
                    src={UserIcon}
                    alt="user-icon"
                    width="40px"
                    />
                    </div>
                )}

                {/* if sender is robot this will show */}
            {sender === 'robot' && (
                <div className="chat-bot-div robot">
                    <img 
                    src={RobotIcon} 
                    alt="robot-icon"
                    width="40px"
                    />
                    <div>
                        <p className="chat-bot-message">{message}<br/>
                        <span style={{fontSize: '12px', color: '#999'}}>{time}</span></p>
                        
                    </div>
                    </div>
            )}
            </>
        );
}