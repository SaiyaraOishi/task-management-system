import React, { useContext } from "react";
import Navbar from "./Navbar";
import {Link, useNavigate} from "react-router-dom";
import { UserContext } from "./Context";

export default function Members(){

    const {memberlist} = useContext(UserContext);
    //have to use useParams to go to details of a member from the memberlist
    const navigate=useNavigate();
    const onAddMember=()=>{
        navigate("/addmember");
    }
    return(
        <>
        <Navbar/>
        <div className="ml-8">
        <div className="mt-4 text-2xl font-bold">All Members</div>
        <p className="text-lg mt-10">You will find all members here.</p>
        <div className="mt-4 text-2xl font-bold">Here are all members:</div>
        <button className="bg-blue-500 px-4 py-2 text-white rounded-md" onClick={onAddMember}>Add New</button>
        <div>
            <ol>
                {memberlist.map(member=>(
                    <div className="underline text-blue-600">
                    <li><Link to="">{member.name}</Link></li>
                    </div>
                ))}
            </ol>
        </div>
        </div>
        </>
    )
}