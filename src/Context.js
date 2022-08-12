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

    const getSingleTask = (id) => {
        const task = state.tasklist.find(task => task.id === id);
        return task;
    }

    const updateTask = (id, task) => {
        const newList = state.tasklist;
        const vtask = newList.find(task => task.id === id);
        vtask.title = task.title;
        vtask.detail = task.detail;
        vtask.member = task.member;
        let tempState={ ...state, tasklist: newList };
        setState(tempState);
        updateLocalStorage(tempState);
    }

    const getSingleMember = (id) =>{
        const member=state.memberlist.find(member=>member.id===id);
        return member;
    }

    const updateMember = (id,member) =>{
        const newList = state.memberlist;
        const vmember=newList.find(member=>member.id===id);
        vmember.name=member.name;
        let tempState={...state, memberlist:newList};
        setState(tempState);
        updateLocalStorage(tempState);
    }


    return (
        <>
            <UserContext.Provider value={{ ...state, setName, logout, setTask, setMember, updateTask, getSingleTask, getSingleMember, updateMember }}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}

export { UserContext, UserContextProvider };

