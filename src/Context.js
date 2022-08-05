import React, { createContext, useState } from "react";

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

    const logout = () =>{
        setState(INITIAL_STATE);
        updateLocalStorage(INITIAL_STATE);
    }


    return (
        <>
            <UserContext.Provider value={{ ...state, setName, logout }}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}

export { UserContext, UserContextProvider };

