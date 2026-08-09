import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessage } from './components/ChatMessage'
import { ChatMessages } from './components/ChatMessages'
import './App.css'
import { Chatbot } from 'supersimpledev';


//input box component

function App() {
  //array destructuring
  //chatMessages is the original copy of the array (current data)
  //setChatMessages is the copied array once useState is used (updater function)
  //lifting the state up (since app is the main component it can be shared in the components below it)
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);

  const [isLoading, setIsLoading] = useState(false)

  useEffect( () => {
    Chatbot.addResponses(
      {'abnormal ka': 'Tanga ka!'}
    )
  })

  useEffect( () => {
    localStorage.setItem('messages', JSON.stringify(chatMessages))
  })
  
  function clearBtn () {
    setChatMessages([])
  }

  return (
      <>  
        <div className='js-container'>
          {chatMessages.length === 0 ? <p className="welcome-message">Welcome to chatbot project! Send a message using the texbox below.</p> : ''}
          <ChatMessages
              chatMessages = {chatMessages}
              setChatMessages = {setChatMessages}
              />
          <ChatInput 
              chatMessages = {chatMessages}
              setChatMessages = {setChatMessages}
              isLoading = {isLoading}
              setIsLoading = {setIsLoading}
              clearBtn = {clearBtn}
              />
        </div>
      </>
  );
}

export default App
