import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

const STORAGE_ID = 'taskManagementApp';
const storageState = localStorage.getItem(STORAGE_ID);
const INITIAL_STATE = {
    name: "",
    tasklist: [],
    memberlist:[]
}; 

const initialState = storageState ? JSON.parse(storageState) : INITIAL_STATE;

const UserContext = createContext({ ...initialState });

function UserContextProvider(props){

    const [state,setState]=useState(initialState);

    const updateLocalStorage = (_state) => localStorage.setItem(STORAGE_ID, JSON.stringify(_state));

    const setName = (name) => {
        let tempState = { ...state, name: name };
        setState(tempState);
        updateLocalStorage(tempState);
    }

    const setTask = (newTask) => {
        const uniqueId = uuid();
        const array=[...state.tasklist];
        array.push({id:uniqueId,...newTask});
        let tempState={...state,tasklist:array};
        setState(tempState);
        updateLocalStorage(tempState);
    }

    const setMember = (newMember) => {
        const uniqueId = uuid();
        const array = [...state.memberlist];
        array.push({id: uniqueId, ...newMember});
        let tempState = {...state, memberlist: array};
        setState(tempState);
        updateLocalStorage(tempState);
    }

    const logout = () =>{
        setState(INITIAL_STATE);
        updateLocalStorage(INITIAL_STATE);
    }


    return (
        <>
            <UserContext.Provider value={{ ...state, setName, logout, setTask, setMember }}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}

export { UserContext, UserContextProvider };

