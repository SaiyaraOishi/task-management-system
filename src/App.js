import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './login';
import Dashboard from './Dashboard';
import Tasks from './Tasks';
import Members from './Members';
import AddTask from './AddTask';
import AddMember from './AddMember';
import {UserContextProvider} from "./Context.js";
import UpdateTask from './UpdateTask';
import UpdateMember from './UpdateMember';

function App() {
  return (
    <UserContextProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/task" element={<Tasks/>}/>
    <Route path="/member" element={<Members/>}/>
    <Route path="/addtask" element={<AddTask/>}/>
    <Route path="/addmember" element={<AddMember/>}/>
    <Route path="/task/:id" element={<UpdateTask/>}/>
    <Route path="/member/:id" element={<UpdateMember/>}/>
    </Routes>
    </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
