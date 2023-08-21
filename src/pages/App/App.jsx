import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage';   
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import NavBar from '../../components/NavBar/NavBar'
import {getUser} from '../../utilities/users-service'
import './App.css';


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
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />

        </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


