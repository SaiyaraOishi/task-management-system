import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Tasks from "./components/Tasks";
import Members from "./components/Members";
import AddMember from "./components/AddMember";
import AddTask from "./components/AddTask";
import UpdateMember from "./components/UpdateMember";
import UpdateTask from "./components/UpdateTask";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
    <Provider store={store}>
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
    </Provider>
    </>
  );
}

export default App;
