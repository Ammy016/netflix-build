import React ,{useState } from 'react'
import './login.css'

function Login() {

    const [signIn, setsignIn] = useState(false)

    return (
        <div className="loginScreen">
            <img className="netflix_logo" src ="https://pngimg.com/uploads/netflix/netflix_PNG31.png" />
            { !signIn && <button className="sign_in_btn"
            onClick = { () => setsignIn(true)}> Sign In </button>}

           <div className="Localized_text">
               <h1>Unlimited movies , TV programmes and more</h1>
               <span className="Localized_text_2">Watch anywhere. Cancel at any time.</span>
               <span>Ready to watch? Enter your email to create or restart your Membership</span>
           </div>
                       
        </div>
    )
}

export default Login