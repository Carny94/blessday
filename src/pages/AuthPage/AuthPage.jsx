import React, { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'


export default function AuthPage({setUser}) {

  const [isNewUser, setIsNewUser] = useState(true);

  function handleClick() {
    setIsNewUser(!isNewUser);
  }

  return (
    <>
      
      <button onClick={handleClick}>{isNewUser ? ' New Account ' : 'Login'}</button>
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