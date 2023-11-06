import React, { useState, useEffect } from 'react';

export default function ScriptureDisplay() {

  //---------------Declare variable
const [createAPIScripture, setCreateAPIScripture] = useState('');

const apiKey = 'edaae89300mshbb2ddde45808382p178b2cjsn7b04de6cb9db'
const url = 'https://iq-bible.p.rapidapi.com/GetRandomVerse?versionId=kjv&limitToBookId=20&limitToChapterId=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'edaae89300mshbb2ddde45808382p178b2cjsn7b04de6cb9db',
		'X-RapidAPI-Host': 'iq-bible.p.rapidapi.com'
	}
};

//-------------------CALL of API

async function getApi (e) {
  // e.preventdefault();
try {
	const response = await fetch(url, options);
  if (response.ok) {
    const data = await response.json();
    const verse = awa
    const text = data[0].t;
    setCreateAPIScripture(text)
  }
  } catch (error) {
	  console.error(error);
  };
};
useEffect(()=> {
  getApi()
}, [])

//-----------------------Event Listener


return (
<div>
<h1>Random Scripture Quote</h1>
{createAPIScripture && <p>{createAPIScripture}</p>}
<button onClick={getApi}>Get Another Scripture</button>
</div>
);
}