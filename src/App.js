import './App.css';
import Signin from './Signin';
import React, { useState } from 'react'
import Profile from './Profile';

const App = () =>{
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [userType, setUserType] = useState('')

  return (
    <div className="App">
      <div className="App-header">
        <h2> Automation demo site</h2>
        {!isSignedIn && <Signin setIsSignedIn={setIsSignedIn} setUserType={setUserType} />}
        {isSignedIn && <Profile userType={userType} />}
      </div>
    </div>
  );
}

export default App;
