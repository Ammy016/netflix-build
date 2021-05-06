import React ,{useState } from 'react'
import './login.css'
import SignIn from '../../components/signInForm/signIn'

function Login() {

    const [signIn, setsignIn] = useState(false);
    const [Email, setEmail] = useState("")

    return (
        <div className="loginScreen">
            <img className="netflix_logo" src ="https://pngimg.com/uploads/netflix/netflix_PNG31.png" />
            { !signIn && <button className="sign_in_btn"
            onClick = { () => setsignIn(true)}> Sign In </button>}

           { !signIn ? <div className="Localized_text">
               <h1>Unlimited movies , TV programmes and more</h1>
               <span className="Localized_text_2">Watch anywhere. Cancel at any time.</span>
               <span>Ready to watch? Enter your email to create or restart your Membership</span>
               <form>
                   <input className="email_input" placeholder="Enter email address" value={Email} onChange={(e) => setEmail(e.target.value) } />
                   <button type="submit" onClick={(e) => {
                        e.preventDefault();
                        setsignIn(true);
                        }} 
                        className = "get_started" >Get Started</button>
               </form>
           </div> : <SignIn /> }
                       
        </div>
    )
}

export default Login