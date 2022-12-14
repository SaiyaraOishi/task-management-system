import React, { useContext } from "react";
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom";
import { UserContext } from "./Context";

export default function Members(){

    const {memberlist,tasklist} = useContext(UserContext);
    const navigate=useNavigate();
    const onAddMember=()=>{
        navigate("/addmember");
    }

    const handleUpdateMember = (id) =>{
        navigate(`/member/${id}`);
    }

    return(
        <>
        <Navbar/>
        <div className="ml-8">
        <div className="mt-4 text-2xl font-bold">All Members</div>
        <p className="text-lg mt-10">You will find all members here.</p>
        <div className="mt-4 text-2xl font-bold">Here are all members:</div>
        <button className="bg-blue-500 px-4 py-2 text-white rounded-md" onClick={onAddMember}>Add New</button>
        <div className="w-36">
            <ol>
                {memberlist.map(member=>(
                    <div>
                    <li className="flex">
                        <div className=" underline text-blue-600">
                        <p onClick={()=>handleUpdateMember(member.id)}>{member.name}</p>
                        </div>
                        <p className="text-blue-600 ml-auto underline">{tasklist.filter(task=>(task.member===member.name)).length}tasks</p>
                    </li>
                    </div>
                ))}
            </ol>
        </div>
        </div>
        </>
    )
}