import * as scripturesAPI from '../../utilities/scriptures-api';
import { useState, useEffect } from 'react';

// this page should display when user clicks submit button from
export default function ScriptureDisplay () {

    const [showScripture, setShowScripture] = useState( false );

    //fetch the scripture from the server via AJAX
    // when scriptures comes back, call setShowscripture to save in state
        
    useEffect(() => {
        async function fetchScriptures() {
        const response = await fetch('/api/scriptures');
        const scriptureData = await response.json();
        console.log(scriptureData)
        setShowScripture(scriptureData)
       
    }
    fetchScriptures();
    },[])
     
    
    
    return (

        <h1>Display scripture</h1>

    )




}

    