import React,{useContext, useEffect} from "react";
import {Link,useNavigate} from "react-router-dom";
import {UserContext} from "./Context.js";

export default function Navbar(){

    const {name,logout}=useContext(UserContext);

    const navigate=useNavigate();

    useEffect(()=>{
        if(!name){
            navigate("/");
        }
    });

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
        <div className="h-28 bg-cyan-700">
            <div className="flex">
            <img src="logo192.png" className="mt-10 h-12 ml-4 sm:ml-4 md:ml-8" alt=""/>
            <p className="mt-12 ml-2 text-white sm:text-sm mt-4 md:text-2xl mt-12">Task Management</p>
            <p className="text-white ml-auto">{name}</p>
            <Link to="/" className="text-white ml-4 md:mr-12 sm:mr-4" onClick={logout}>Logout</Link>
            </div>
            <div className="flex justify-end  md:mr-12 sm:mr-4">
            <button type="submit" className="bg-cyan-500 rounded-md px-2 py-1 text-white" onClick={onHomeClick}>Home</button>
            <button type="submit" className="bg-cyan-500 rounded-md px-2 py-1 text-white ml-2" onClick={onTaskClick}>Tasks</button>
            <button type="submit" className="bg-cyan-500 rounded-md px-2 py-1 text-white ml-2" onClick={onMemberClick}>Members</button>
            </div>
        </div>
        </>
    )
}