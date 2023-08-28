import { useEffect, useState } from 'react';
import * as journalAPI from '../../utilities/create-journal'
import EditJournalForm from '../../components/EditJournalForm/EditJournalForm';



export default function SavedJournalPage({ setJournal, journal }) {

  const [editClicked, setEditClicked] = useState(false)


  useEffect(() => {

    async function getJournals() {
      const journals = await journalAPI.getAll();
      setJournal(journals);
    }
    getJournals();
  }, [])


  async function handleDelete(id) {

    await journalAPI.deleteForm({ id })
    setJournal(journal.filter(entry => entry._id !== id));
  }


 

  async function handleEdit() {
    setEditClicked(!editClicked)
  
  }


  return (
   
      <div>
        {journal.map((journal, index) => (
          <div key={index}>
            <p>Mood: {journal.mood}</p>
            <p>TextField: {journal.textField}</p>
            <p>Posted on: {new Date(journal.createdAt).toLocaleString()}</p>
            <button onClick={() => handleDelete(journal._id)}>Delete</button>
            <button onClick={handleEdit}>{ editClicked ? 'Hide Edit' : 'Edit' }</button>
            { editClicked  &&  <EditJournalForm journalId={journal._id} setJournal={ setJournal }/> }
            
          </div>
       ))}
        
      </div>
      )
   
      
    
  
  
};