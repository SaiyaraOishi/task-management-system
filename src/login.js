import React,{useState,useContext} from "react";
import {useNavigate} from "react-router-dom";
import { UserContext } from "./Context.js";

export default function Login(){

    const [name,setName]=useState("");
    const {setName:setContextName} = useContext(UserContext);

    const formIsValid=name.trim().length>0;

    const navigate=useNavigate();
    function handleSubmit(){
        if(formIsValid){
        setContextName(name);
        navigate("/dashboard");
        }
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    return(
        <>
        <div className="flex justify-center mt-8">
        <img src="logo192.png" alt=""/>
        </div>
        <div className="mt-2 text-2xl bold text-cyan-700 text-center">Task Management</div>
        <form>
            <div className="text-center mt-20">
            <input className='text-center border border-cyan-700 rounded-md py-2' type="text" placeholder="Your name" name="name" id="name" value={name} onChange={handleNameChange}/>
            <div className="text-red-600">{!formIsValid && <p>*Name is required</p>}</div>
            </div>
            <div className="mt-28 text-center ">
                <button type="submit" className="bg-blue-500 px-4 py-2 text-white rounded-md" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
        </>
    )
}