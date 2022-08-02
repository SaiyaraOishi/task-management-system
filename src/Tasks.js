import React from "react";
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom";

export default function Tasks(){

    const navigate=useNavigate();
    const onAddTask=()=>{
        navigate("/addtask");
    }
    return(
        <>
        <Navbar/>
        <div className="ml-8">
        <div className="mt-4 text-2xl font-bold">All Tasks</div>
        <p className="text-lg mt-10">You will find all tasks here.</p>
        <div className="mt-4 text-2xl font-bold">Here is all tasks:</div>
        <button className="bg-blue-500 px-4 py-2 text-white rounded-md" onClick={onAddTask}>Add New</button>
        </div>
        </>
    )
}