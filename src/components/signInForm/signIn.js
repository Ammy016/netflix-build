import React from 'react'
import './signIn.css'

function signIn() {
    return (
        <div className="signIn">
            <h2>Sign In</h2>
            <form>
                <input placeholder="Email"/>
                <input placeholder="Password" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default signIn
