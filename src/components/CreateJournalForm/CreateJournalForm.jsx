import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import ScriptureDisplay from '../../pages/ScriptureDisplay/ScriptureDisplay';
import * as submitFormAPI from '../../utilities/create-journal'

const moodOptions = ["Happy😁", "Sad😔", "Excited😆", "Calm😊", "Angry😒", "Confused🤯"];

export default function CreateJournalForm({ Journal, setJournal }) {
  //if i want to set the state of check box so i need to state it here

  const navigate = useNavigate();
  const [form, setForm] = useState ({
    mood: "",
    textField: "",
    saveJournal: false
});


//-------CALL OF API-----///

async function createForm(e){
    e.preventDefault()
    const isSaveJournalChecked = e.target.saveJournal.checked;
    if (isSaveJournalChecked) { 

    const data = await submitFormAPI.createForm({form}) 
    console.log(data)
    navigate("/scripture");
  } else {
    alert("Please check the saveJournal box if you want to save your entry")
  }
 // Next step -> extend function to conditionally navigate to scripture page

}

//------------------------Event Handleres------------------------------//



 const handleChange = (e) => {
    const newFormData = {
        ...form , [e.target.name]: e.target.value
    }

if (e.target.type === "checkbox") {
    newFormData.saveJournal = e.target.checked;
}
    setForm(newFormData)
}
 
    return (
     <>
         <h2>How is your day</h2>

     <form onSubmit={createForm}>
     <label>
  How is your mood:
  <select
    name="mood"
    value={form.mood}
    onChange={handleChange}
  >
    <option value="">Select a Mood</option> 
    {moodOptions.map((mood, index) => (
      <option key={index} value={mood}>
        {mood}
      </option>
    ))}
  </select>
</label>
              <label>
            Talk about how your feelings Today
            <input 
            type="text" 
            name="textField" 
            placeholder="Its always best to release your feelings" 
            onChange={handleChange}
            value={form.textField}
            />
        </label> 
         <label>
            Would you like to save this:
            <input
            type="checkbox" 
            name="saveJournal" 
            checked= {form.saveJournal}
            onChange={handleChange}
            />
        </label> 
            <button type="submit"> Click here </button>    
            
            
</form>
    </>
  ); 
        }