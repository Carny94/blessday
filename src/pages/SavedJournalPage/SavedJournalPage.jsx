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

    
    
  

    

    return (
        <h1>hi</h1>
        // <h1>mood: = {journal.mood} </h1>
       
    )
};