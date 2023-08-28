import * as scripturesAPI from '../../utilities/scriptures-api';
import { useState, useEffect } from 'react';

// this page should display when user clicks submit button from
export default function ScriptureDisplay () {

    // const [showScripture, setShowScripture] = useState( false );

    //fetch the scripture from the server via AJAX
    // when scriptures comes back, call setShowscripture to save in state
        
    // useEffect(() => {
    //     async function fetchScriptures() {
    //     const response = await fetch('/api/scriptures');
    //     const scriptureData = await response.json();
    //     console.log(scriptureData)
    //     setShowScripture(scriptureData)
       
    // }
    // fetchScriptures();
    // },[])
     
    //how can i get a random index in a array
    const scriptures = [ 
        
        { book: 'John', verse: '16:33', read: 'In the world you will have tribulation. But take heart; I have overcome the world.' },
        { book: 'Isaiah', verse: '41:10', read:  ' "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."'},
        { book: 'Philippians', verse: '4:6-7', read: '"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus"'},
        { book: 'John', verse: '16:33', read: 'In the world you will have tribulation. But take heart; I have overcome the world.' },
        { book: 'John', verse: '16:33', read: 'In the world you will have tribulation. But take heart; I have overcome the world.' }
    ]
    
    return (

        <h1>Display scripture</h1>

    )




}

    