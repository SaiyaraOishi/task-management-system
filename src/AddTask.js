import React from "react";
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom"; 

export default function AddTask(){

    const navigate=useNavigate();
    const onSubmit=()=>{
        navigate("/task");
    }
    return(
        <>
        <Navbar/>
        <div className="ml-8">
        <div className="mt-4 text-2xl font-bold">Add Task</div>
            <div className="">
            <input className='text-center border border-cyan-700 rounded-md py-8 px-96 mt-8' type="text" placeholder="Task name" name="name" id="name" />
            </div>
            <div>
            <input className='text-center border border-cyan-700 rounded-md py-8 px-96 mt-8' type="text" placeholder="Task details" name="detail" id="detail" />
            </div>
            <div>Assigned to:</div>
            <div>
            <select className="border border-cyan-700 rounded-md" name="members" id="members">
                <option value="member1">Member 1</option>
                <option value="member2">Member 2</option>
            </select>
            </div>
            <button type="submit" className="mt-8 bg-blue-500 px-4 py-2 text-white rounded-md">Cancel</button>
            <button type="submit" className="ml-8 mt-8 bg-blue-500 px-4 py-2 text-white rounded-md" onClick={onSubmit}>Submit</button>
        </div>
        </>
    )
}