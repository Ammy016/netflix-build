import React, { useRef } from 'react'
import './signIn.css'
import { auth } from '../../firebase'


function SignIn() {

    const emailRef  = useRef(null);
    const passwordRef  = useRef(null);

    const registerUser = (e) => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) =>{
            console.log(authUser)
        }).catch( err => {
            console.error(err.message)
        })

    }

    const signInUser = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) =>{
            console.log(authUser)
        }).catch( err => {
            alert(err.message)  //render a popup in this case // remember
        })
    }

    return (
        <div className="signIn-container">
             <div className="signIn">
                <h2>Sign In</h2>
                <form>
                    <input  ref={emailRef} placeholder="Email"/>
                    <input ref={passwordRef} placeholder="Password" />
                    <button type="submit" onClick={(e) => signInUser(e)}>Sign In</button>
                </form>
                <span className="demo-text">New to Netflix ? </span>
                <span className="signUp-Now" onClick={(e) => registerUser(e)}> SignUp Now</span>
            </div>
        </div>
       
    )
}

export default SignIn
