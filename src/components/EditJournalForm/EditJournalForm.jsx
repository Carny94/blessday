import { useState } from 'react';
import * as journalAPI from '../../utilities/create-journal'



export default function EditJournalForm({ journalId, setJournal }) {

   
    const [form, setForm] = useState({ textField: ""});


    //------------------------Event Handleres------------------------------//



    const handleChange = (e) => {
        const newFormData = {
            ...form, textField: e.target.value
        }
        setForm(newFormData)
    }


    async function handleUpdate(e) {
        e.preventDefault();
        //being passed back as an object to the backend
        const payload = {id: journalId, textField: form.textField}
        const updatedJournal = await journalAPI.updateForm(payload)
        const journals = await journalAPI.getAll();
        setJournal(journals);
console.log(updatedJournal)
    }


    return (
        <>
            <h2>Edit Feelings</h2>

            <form onSubmit={handleUpdate} >
               
                <label>
                    Lets edit:
                    <input
                        type="text"
                        name="textField"
                        placeholder="What changed"
                        onChange={handleChange}
                        value={form.textField}
                    />
                </label>
                
                <button type="submit">Update</button>


            </form>
        </>
    );
}
   
   
   
   
