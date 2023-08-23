import { useState, useEffect } from "react";
import ScriptureDisplay from '../ScriptureDisplay/ScriptureDisplay';

export default function CreateJournalPage({}) {
    
  const [form, setForm] = useState ({
    mood: "",
    textField: ""
    // saveJournal: ""
});
//   console.log(form)
  const [saveJournal, setSaveJournal]= useState(false)

  const handleNewEntry = (evt) => {
    evt.preventDfault();
    if (saveJournal) {
 }}

 const handleChange = (evt) => {
    const newFormData = {
        ...form , [evt.target.name]: evt.target.value
    }
    setForm(newFormData)
}

//create a function for the button and tell it to 
//if clicked go to ScripturDisplaypage
const [showScripturePage, setShowScripturePage] = useState(false);

const handleSubmitButton = (evt) => {
setShowScripturePage(evt.target)
    setShowScripturePage(true);
    
    
}
 
  return (
    <>
    <h2>How is your day</h2>

    <form onSubmit={handleNewEntry}>
        <label>
            How is your day:
            <input 
            type="text" 
            name="mood" 
            placeholder="hmm"
            onChange={handleChange}
            value={form.mood}
            />
        </label>
        <label>
            Talk about it:
            <input 
            type="text" 
            name="textField" 
            placeholder="Its always best to release your feelings" 
            onChange={handleChange}
            value={form.textField}
            />
        </label>
        {/* <label>
            Would you like to save this:
            <input
            type="checkbox" 
            name="saveJournal" 
            />
        </label> */}
        
        {showScripturePage ? (
            <ScriptureDisplay />

        ) : (
            
            <button onClick={handleSubmitButton}>
            Click here
            </button>
        
        )}
        
</form>
    </>
  );
    }