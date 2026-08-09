import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import UserIcon from '../assets/userIcon.png'
import RobotIcon from '../assets/robotIcon.png'
import LoadingSpinner from '../assets/loading-spinner.gif'
import dayjs from 'dayjs'


//chatMessages and setChatMessages are from the App component and are used as props
export let ChatInput = ({chatMessages, setChatMessages, isLoading, setIsLoading, clearBtn}) => {
    
    const [inputText, setInputText] = useState('');
    const milisecondsTime = dayjs().valueOf()
    const currentTime = dayjs(milisecondsTime).format('h:mma')

    // "e" means event
    let saveInputText = (e) => {
        setInputText(e.target.value)
    }

    
    let sendMessage = async () => {
        if(inputText.length > 0){
            //controlled input
            //this function sets the inputText = ''
            setInputText('')
            setIsLoading(true)

            let response = await Chatbot.getResponseAsync(inputText)

            //created a variable where the user chat message is saved so whenever the code runs, it is saved first before the response of the chatbot is added
            let newChatMessages = [
                //spread the existing array
                ...chatMessages,

                //this serves as the push of the state (this is added in the new set of array)
                {
                    message: inputText,
                    sender: 'user',
                    id: crypto.randomUUID(),
                    time: currentTime
                }
            ]
            // console.log(chatMessages)
            //this is the updater function that updates the current data with the new chat message made by the user
            setChatMessages(newChatMessages);
            
            
            setChatMessages([
                //spread the existing array
                ...newChatMessages,

                //this serves as the push of the state (this is added in the new set of array)
                {
                    message:
                            <img src={LoadingSpinner} alt="loading-spinner" width="16px" style={{marginRight: '4px'}}/>,
                    sender: 'robot',
                    id: crypto.randomUUID()
                }
            ]);


            //then this code will run after the new chat from the user is received
            setTimeout( ()=> {
                setIsLoading(false)

                setChatMessages([
                    //spread the existing array
                    ...newChatMessages,

                    //this serves as the push of the state (this is added in the new set of array)
                    {
                        message: response,
                        sender: 'robot',
                        id: crypto.randomUUID(),
                        time: currentTime
                    }
                ]);
            }, 2500)
        }
        else{
            return ;
        }
        
    }

    return (
        <>
        <div className="chat-input-container">
            <input 
                type="text" 
                placeholder="Type anything..."
                
                onChange={saveInputText} 
                //controlled input
                value={inputText}
                className="chat-input"
                onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        isLoading === false && sendMessage();
                    }
                    else if(e.key === 'Escape'){
                        isLoading === false && setInputText('')
                    }
                    
                }}                 
            />
            <button onClick={isLoading === false && sendMessage}> Send </button>
            <button style={{backgroundColor: '#231f20', marginLeft: '4px'}} 
            onClick={clearBtn}
            > Clear </button>
        </div>
        </>
    );
}