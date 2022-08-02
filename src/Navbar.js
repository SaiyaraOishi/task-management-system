import React from "react";
import {Link,useNavigate} from "react-router-dom";

export default function Navbar(){

    const navigate=useNavigate();
    const onHomeClick=()=>{
        navigate("/dashboard");
    }
    const onTaskClick=()=>{
        navigate("/task");
    }
    const onMemberClick=()=>{
        navigate("/member");
    }

    return(
        <>
        <div className="flex h-28 bg-cyan-700">
            <img src="logo192.png" className="mt-10 h-12 ml-8"/>
            <p className="mt-12 ml-2 text-2xl bold text-cyan-700 text-white">Task Management</p>
            <p className="text-white ">Mr.ABC</p>
            <Link to="/" className="text-white ml-4">Logout</Link>
            <button type="submit" className="text-white" onClick={onHomeClick}>Home</button>
            <button type="submit" className="text-white ml-2" onClick={onTaskClick}>Tasks</button>
            <button type="submit" className="text-white ml-2" onClick={onMemberClick}>Members</button>
        </div>
        </>
    )
}