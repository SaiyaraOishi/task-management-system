import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import {useNavigate,useParams} from "react-router-dom";
import { UserContext } from "./Context";

export default function UpdateMember(){

    const [name,setName]=useState("");
    const {id}=useParams();
    const {updateMember,getSingleMember}=useContext(UserContext);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const nameIsValid=name.trim().length>0;

    const navigate=useNavigate();
    const onUpdateMember = () =>{
        if(nameIsValid){
            updateMember(id, {name: name});
            navigate("/member");
        }
    }

    const member=getSingleMember(id);
    useEffect(()=>{
        if(member){
            setName(member.name);
        }
    },[member]);

    const onCancel=()=>{
        navigate("/member");
    }

    return(
        <>
        <Navbar/>
        <div className="ml-8">
        <div className="mt-4 text-2xl font-bold">Add Member</div>
        <div className="">
        <input className='text-center border border-cyan-700 rounded-md mt-8 sm:py-2 px-8 md:py-8 md:px-96' type="text" placeholder="Name" name="name" id="name" value={name} onChange={handleNameChange}/>
        <div className="text-red-600">{!nameIsValid && <p>*Name is required</p>}</div>
        </div>
        <button type="submit" className="mt-8 bg-blue-500 px-4 py-2 text-white rounded-md" onClick={onCancel}>Cancel</button>
        <button type="submit" className="ml-8 mt-8 bg-blue-500 px-4 py-2 text-white rounded-md" onClick={onUpdateMember}>Update</button>
        </div>
        </>
    )
}