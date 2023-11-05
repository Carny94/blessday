import { useState, useEffect } from 'react';


export default function HomePage (){
 
    const [zenQuotes, setZenQuotes] = useState([]);

   
    useEffect(() => {
        async function fetchZenQuotes() {
          try {
            const response = await fetch("https://zenquotes.io/api/quotes/"); // Make the request to your backend route
            const data = await response.json();
            setZenQuotes(data);
          } catch (error) {
            console.error('Error fetching Zen quotes from frontend:', error);
          }
        }
      
        fetchZenQuotes();
      }, []);

    

    
    return (
        <>
        <h2>How is your day</h2>
        
       
        <div>
          <h2>Zen Quotes</h2>
          <ul>
            {zenQuotes.map((quote, index) => (
              <li key={index}>{quote.text}</li>
            ))}
          </ul>
        </div>
      </>
    );
            }