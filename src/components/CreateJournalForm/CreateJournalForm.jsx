import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import ScriptureDisplay from '../../pages/ScriptureDisplay/ScriptureDisplay';
import * as submitFormAPI from '../../utilities/create-journal'


export default function CreateJournalForm({ setJournal }) {
  

  const [form, setForm] = useState ({
    mood: "",
    textField: ""
    // saveJournal: ""
});


//-------CALL OF API-----///

async function createForm(e){
    e.preventDefault()
    const data = await submitFormAPI.createForm({form}) 
    console.log(data)
    setJournal(data)
  }

  async function deleteForm(e) {
    e.preventDefault()
    const removeData = await submitFormAPI.deleteForm({form})
    // setJournal or setForm
    setJournal ({
        mood:"",
        textField:""
    });
}
  async function updateForm(e) {
    
  }

// async function updateForm() {
//     const updatedData = await submitFormAPI.updateForm({ form });
//     setForm(updatedData); 
    
//   }


//------------------------Event Handleres------------------------------//



 const handleChange = (evt) => {
    const newFormData = {
        ...form , [evt.target.name]: evt.target.value
    }
    setForm(newFormData)
}
 
    return (
     <>
         <h2>How is your day</h2>

     <form onSubmit={createForm}>
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
         <label>
            Would you like to save this:
            <input
            type="checkbox" 
            name="saveJournal" 
            />
        </label> 
            <button type="submit"> Click here </button>    
            <button 
            onClick={deleteForm}>Delete
            </button>   
</form>
    </>
  ); 
        }