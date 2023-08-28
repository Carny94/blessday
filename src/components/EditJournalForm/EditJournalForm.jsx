import { useState } from 'react';



export default function EditJournalForm() {

   
    const [form, setForm] = useState({ textField: ""});


    //------------------------Event Handleres------------------------------//



    const handleChange = (e) => {
        const newFormData = {
            ...form, textField: e.target.value
        }
        setForm(newFormData)
    }

    return (
        <>
            <h2>Edit Feelings</h2>

            <form >
               
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
                
                <button type="submit"> Click here </button>


            </form>
        </>
    );
}
   
   
   
   
