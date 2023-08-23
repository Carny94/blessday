import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage';   
import NavBar from '../../components/NavBar/NavBar'
import {getUser} from '../../utilities/users-service'
import './App.css';
import CreateJournalPage from '../CreateJournalPage/CreateJournalPage';
import SavedJournalPage from '../SavedJournalPage/SavedJournalPage';
import ScriptureDisplay from '../ScriptureDisplay/ScriptureDisplay';


export default function App() {
  const [user, setUser] = useState(getUser());
  //initialize user to null
  


  return (
    <main className="App">
      { user ?
      <>
        <NavBar user= {user} setUser={setUser}/>
        <Routes>
          {/* Routes components in here */}
          <Route path="/journal/new" element={<CreateJournalPage />} />
          <Route path="/journal/:journalSaved" element={<SavedJournalPage />} />
          <Route path="/scripture" element={<ScriptureDisplay />} />

        </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


