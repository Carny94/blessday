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



  //-------CALL OF API-----//
  async function createForm(e) {
    e.preventDefault();
    const saveJournalBox = e.target.saveJournal.checked;
    if (saveJournalBox) {
      const data = await submitFormAPI.createForm({ form });
      console.log(data);
      navigate("/scripture");
    } else {
      alert("Please check the saveJournal box if you want to save your entry");
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
      <h2>How is your day</h2>
      <form onSubmit={createForm} className="journal-form">
        <label className="form-label">
        <h4>Mood:</h4>
          <h6>(Choose an emoji that represents your current mood)</h6>
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
        <h4>Share your thoughts and feelings for today</h4>
          <input
            type="text"
            name="textField"
            placeholder="It's always best to release your feelings"
            onChange={handleChange}
            value={form.textField}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <h4>Save journal</h4>
          <input
            type="checkbox"
            name="saveJournal"
            checked={form.saveJournal}
            onChange={handleChange}
            className="form-checkbox"
          />
        </label>
        <button type="submit" className="form-button">Click here for today scripture</button>
      </form>
    </>
  );
}