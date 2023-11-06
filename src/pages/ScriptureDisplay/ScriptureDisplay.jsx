import React, { useState, useEffect } from 'react';

export default function ScriptureDisplay() {
  // Declare variables
  const [createAPIScripture, setCreateAPIScripture] = useState('');

  const apiKey = 'edaae89300mshbb2ddde45808382p178b2cjsn7b04de6cb9db';
  const url = 'https://iq-bible.p.rapidapi.com/GetRandomVerse?versionId=kjv&limitToBookId=20&limitToChapterId=1';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'iq-bible.p.rapidapi.com'
    }
  };

  // Call API
  async function getApi() {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        setCreateAPIScripture(data[0]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  // Event Listener
  return (
    <div>
      <h1>Random Scripture Quote</h1>
      {createAPIScripture && (
        <div>
          <p>Book: {createAPIScripture.b}</p>
          <p>Chapter: {createAPIScripture.c}</p>
          <p>Verse: {createAPIScripture.v}</p>
          <p>Scripture: {createAPIScripture.t}</p>
        </div>
      )}
      <button onClick={getApi}>Get Another Scripture</button>
    </div>
  );
}
