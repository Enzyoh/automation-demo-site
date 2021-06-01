import React, { useState } from 'react'

const Signin = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + name);
        event.preventDefault();
    }

    return (
        <>
            <h4> Sign in </h4>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleNameChange} placeholder='Username' />
                <br />
                <br />

                <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password' />
                <br />
                <br />

                <input type="submit" value="Submit" id='signinBtn' />
            </form>
        </>
    )

  }

  export default Signin
