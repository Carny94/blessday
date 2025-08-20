import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage';   
import NavBar from '../../components/NavBar/NavBar'
import {getUser} from '../../utilities/users-service'
import './App.css';
import CreateJournalForm from '../../components/CreateJournalForm/CreateJournalForm';
import SavedJournalPage from '../SavedJournalPage/SavedJournalPage';
import ScriptureDisplay from '../ScriptureDisplay/ScriptureDisplay';
import HomePage from '../HomePage/HomePage';


export default function App() {
  const [user, setUser] = useState(getUser());
  
  const [journal, setJournal] = useState([]);
console.log(journal)
  return (
    <main className="App">
      { user ?
      <>
        <NavBar user= {user} setUser={setUser}/>
        <Routes>
          <Route path="/journal/new" element={<CreateJournalForm setJournal={setJournal} />} />
          <Route path="/journal/journalSaved" element={<SavedJournalPage journal={journal} setJournal={setJournal}/>} />
          <Route path="/scripture" element={<ScriptureDisplay />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );



}


