import CreateJournalForm from '../../components/CreateJournalForm/CreateJournalForm'
import { useEffect } from 'react'; 
import * as journalAPI  from '../../utilities/create-journal'

export default function SavedJournalPage({ setJournal, journal }) {
   
    useEffect(() => {
       
        async function getJournals() {
            const journals = await journalAPI.getAll();
            setJournal(journals);
        }
        getJournals();
    },[])
   
    
    async function handleDelete(id) {

         await journalAPI.deleteForm({id})
         setJournal(journal.filter(entry => entry._id !== id));
        }


    // async function handleUpdate(id, updatedData) {
    //     await journalAPI.updateForm({id, updatedData})
    // }


 return (
       
        <div>
        {journal.map((journal, index) => (
          <div key={index}>
            <p>Mood: {journal.mood}</p>
            <p>TextField: {journal.textField}</p>

<button onClick= {() => (handleDelete(journal._id))}>delete</button>
{/* <button onClick={handleUpdate}>Update</button> */}
          </div>
        ))}
      </div>
    );

    
};