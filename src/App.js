import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './login';
import Dashboard from './Dashboard';
import Tasks from './Tasks';
import Members from './Members';
import AddTask from './AddTask';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/task" element={<Tasks/>}/>
    <Route path="/member" element={<Members/>}/>
    <Route path="/addtask" element={<AddTask/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
