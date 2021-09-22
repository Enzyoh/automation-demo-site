import './App.css';
import Signin from './Signin';
import React from 'react'
import Profile from './Profile';

const App = () =>{
  const [isSignedIn, setIsSignedIn] = React.useState(false)
  const [userType, setUserType] =React.useState('')

  return (
    <div className="App">
      <div className="App-header">
        <h2> Automation demo site for mndeni</h2>
        {!isSignedIn && <Signin setIsSignedIn={setIsSignedIn} setUserType={setUserType} />}
        {isSignedIn && <Profile userType={userType} />}
      </div>
    </div>
  );
}

export default App;
