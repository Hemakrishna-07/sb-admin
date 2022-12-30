import './App.css';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import AddUser from './components/AddUser';
import { useState } from 'react';
import EditUser from './components/EditUser';

function App() {

  let data = {
    earningsMonthly : "4,00,000",
    earningsYearly : "48,00,000",
    task : 70,
    pendingRequest : 20
  }

  let [users,setUsers] = useState([
    {
      name:"Hemky",
      email:"hemky@gmail.com",
      batch:"B39WDT",
      phone:"9874563210"
    },
    {
      name:"Harish",
      email:"harish@gmail.com",
      batch:"B39WDT",
      phone:"9587463258"
    },
    {
      name:"Dina",
      email:"dina@gmail.com",
      batch:"B39WDT",
      phone:"8974563587"
    }
  ])

  return <>
    <div id='wrapper'>
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path='/dashboard' element={<Dashboard data={{data,users,setUsers}}/>}/>
          <Route path='/add-user' element={<AddUser data={{users,setUsers}}/>}/>
          <Route path='/edit-user/:id' element={<EditUser data={{users,setUsers}}/>}/>
          <Route path='*' element={<Navigate to='/dashboard'/>}/>
        </Routes>
      </BrowserRouter>

    </div>   
  </>
}

export default App;