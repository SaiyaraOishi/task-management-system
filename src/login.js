import React from "react";
import {useNavigate} from "react-router-dom";

export default function Login(){

    const navigate=useNavigate();
    const handleSubmit=()=>{
        navigate("/dashboard")
    }

    return(
        <>
        <div className="flex justify-center mt-8">
        <img src="logo192.png"/>
        </div>
        <div className="mt-2 text-2xl bold text-cyan-700 text-center">Task Management</div>
        <form>
            <div className="text-center mt-20">
            <input className='text-center border border-cyan-700 rounded-md py-2' type="text" placeholder="Your name" name="name" id="name" />
            </div>
            <div className="mt-28 text-center ">
                <button type="submit" className="bg-blue-500 px-4 py-2 text-white rounded-md" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
        </>
    )
}