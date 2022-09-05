import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Tasks from "./components/Tasks";
import Members from "./components/Members";
import AddMember from "./components/AddMember";
import AddTask from "./components/AddTask";
import UpdateMember from "./components/UpdateMember";
import UpdateTask from "./components/UpdateTask";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Data from "./components/datapage";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/task" element={<Tasks />} />
              <Route path="/member" element={<Members />} />
              <Route path="/addtask" element={<AddTask />} />
              <Route path="/addmember" element={<AddMember />} />
              <Route path="/task/:id" element={<UpdateTask />} />
              <Route path="/member/:id" element={<UpdateMember />} />
              <Route path="/data" element={<Data/>}/>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
