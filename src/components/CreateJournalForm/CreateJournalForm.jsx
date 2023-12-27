import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ScriptureDisplay from '../../pages/ScriptureDisplay/ScriptureDisplay';
import * as submitFormAPI from '../../utilities/create-journal';

const moodOptions = ["Happy😁", "Sad😔", "Excited😆", "Calm😊", "Angry😒", "Confused🤯"];

export default function CreateJournalForm({ Journal, setJournal }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    mood: "",
    textField: "",
    saveJournal: false,
  });

  const [isLoading, setIsLoading] = useState(false);


  //-------CALL OF API-----//
  
  async function createForm(e) {
    e.preventDefault();
    const saveJournalBox = e.target.saveJournal.checked;
    if (saveJournalBox) {
      setIsLoading(true);
try { 
      const data = await submitFormAPI.createForm({ form });
      console.log(data);
      setTimeout(() => {
         navigate("/scripture");
        }, 3000); 
      } catch (error) {
        console.error(error);
        setIsLoading(false); 
      }
    } else {
      navigate("/scripture")
    }
  }

  //------------------------Event Handlers------------------------------//

  const handleChange = (e) => {
    const newFormData = {
      ...form,
      [e.target.name]: e.target.value,
    };

    if (e.target.type === "checkbox") {
      newFormData.saveJournal = e.target.checked;
    }
    setForm(newFormData);
  };

  
  return (
    <>
<h2>How's your day going?</h2>
<form onSubmit={createForm} className="journal-form">
  <label className="form-label">
    <h4>SELECT YOUR MOOD:</h4>
    <select name="mood" value={form.mood} onChange={handleChange} className="form-select">
      <option value="">😁</option>
      {moodOptions.map((mood, index) => (
        <option key={index} value={mood}>
          {mood}
        </option>
      ))}
    </select>
  </label>
  <label className="form-label">
    <h4>Share your thoughts and feelings for today:</h4>
    <input
      type="text"
      name="textField"
      placeholder="Express your feelings here"
      onChange={handleChange}
      value={form.textField}
      className="form-input"
    />
  </label>
  <label className="form-label">
    <h4>Save your journal entry:</h4>
    <input
      type="checkbox"
      name="saveJournal"
      checked={form.saveJournal}
      onChange={handleChange}
      className="form-checkbox"
    />
  </label>
  <button type="submit" className="form-button">Get today's scripture</button>
</form>
{isLoading && <div className="loading">Generating your scripture. Please wait...</div>}

</>
  );
}