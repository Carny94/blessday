import { useState, useEffect } from 'react';


export default function HomePage (){
 

   
    return (
      <>
      <div classname="header-container">
        <h1>BLESSDAY</h1>
      </div>
      <div classname="header-verse-container">
        <p style={{ fontStyle: 'italic' }}>"Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds because
           you know that the testing of your faith produces perseverance. Let perseverance finish its work
           so that you may be mature and complete, not lacking anything."</p>
      </div>
      <p style={{ textAlign: 'center' }}>James 1:2-4 </p>

      <div classname="about-app-container">
        <h1>Welcome to Blessday! We're thrilled to have you here. This is a safe and supportive space where you can freely express your thoughts and feelings.
           Thank you for joining our community.</h1>
      </div>
      </>
    )
}  