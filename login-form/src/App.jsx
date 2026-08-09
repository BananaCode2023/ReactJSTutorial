import { useState } from 'react'
import './App.css'

function App() {
  let LoginForm = () => {
    let [showPassword,setShowPassword] = useState(true)

    let [passwordValue, setPasswordValue] = useState('')


    let savePasswordInput = (e) => {
        setPasswordValue(e.target.value)
    }

    let showPasswordClicked = () => {
        if(showPassword === true){
            setShowPassword(false)
        } else{
            setShowPassword(true)
        }  
    }

    return (
        <>
            <input type="text" placeholder="Email"/><br/>
            <div className="password-div">
                <input 
                    type={showPassword === true ? 'password' : "name"} 
                    placeholder="Password"
                    value={passwordValue}
                    onChange={savePasswordInput}
                />
                <button 
                onClick={showPasswordClicked}
                >{showPassword === true ? '🙈 Show Password' : "🙉 Hide Password"}</button>
            </div>
            <div>
                <button>Login</button>
                <button>Sign up</button>    
            </div>
        </>
    );
}

return (
    <>
        <p>Hello, welcome to my website</p>
        <LoginForm />
    </>
);
}

export default App
