import React from "react";
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom";

export default function Dashboard(){

    const navigate=useNavigate();
    const handleTaskSumbit=()=>{
        navigate("/task");
    }
    const handleMemberSubmit=()=>{
        navigate("/member");
    }

    return(
        <>
        <Navbar/>
        <div className="ml-8">
        <div className="mt-4 text-2xl font-bold">Welcome to task management system</div>
        <p className="text-lg">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className="mt-8 text-2xl font-bold">Get Started</div>
        <button type="submit" className="mt-16 ml-28 bg-cyan-600 px-24 py-10 text-white text-lg font-bold rounded-md" onClick={handleTaskSumbit}>Tasks</button>
        <button type="submit" className="mt-16 ml-28 bg-cyan-600 px-24 py-10 text-white text-lg font-bold rounded-md" onClick={handleMemberSubmit}>Members</button>
        </div>
        </>
    )
}