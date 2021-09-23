import React, { useState } from 'react'

const Signin = ({ setIsSignedIn, setUserType }) => {
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')
    
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        if (setUserType) setUserType(name) //hard-coded for convenience
        if (setIsSignedIn) setIsSignedIn(true) //hard-coded for convenience
        event.preventDefault();
    }

    return (
        <>
            <h4> Sign in </h4>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleNameChange} placeholder='Username' id='Username' />
                <br />
                <br />

                <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password' id='Password'/>
                <br />
                <br />

                <input type="submit" value="Submit" id='signinBtn' />
            </form>
        </>
    )

  }

  export default Signin
