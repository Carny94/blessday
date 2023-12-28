import React, { useState } from 'react'
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'


export default function AuthPage({setUser}) {

  const [isNewUser, setIsNewUser] = useState(true);

  function handleClick() {
    setIsNewUser(!isNewUser);
  }

  return (
  
    <>
      <h1>BLESSDAY</h1>
      <button className="toggle-button" onClick={handleClick}>{isNewUser ? ' Click Here To Create New Account ' : 'Click Here To Login'}</button>
      { isNewUser ?
      <>
        <SignUpForm setUser={setUser}/>
      </>  
      :
      <>
        <LoginForm setUser={setUser}/>
      </>
      }
    </>
  )

}