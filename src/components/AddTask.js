import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addTask } from "../redux/tasks/actions";

export default function AddTask(){

    const [title,setTitle]=useState("");
    const [detail,setDetail]=useState("");
    const [member,setMember]=useState("");
    const dispatch = useDispatch();
    const members = useSelector((state)=>state.members);

    const titleIsValid=title.trim().length>0;

    const navigate=useNavigate();
    const onSubmitTask=()=>{
        if(titleIsValid){
            dispatch(addTask({title: title, detail: detail, member: member}));
            navigate("/task");
        }
    }

    const onCancel=()=>{
        navigate("/task");
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDetailChange = (e) => {
        setDetail(e.target.value);
    }

    const handleMemberChange = (e) => {
        setMember(e.target.value)
    }

    return(
        <>
        <Navbar/>
        <div className="ml-8">
        <div className="mt-4 text-2xl font-bold">Add Task</div>
            <div className="">
            <input className='text-center border border-cyan-700 rounded-md mt-8 sm:py-2 px-8 md:py-8 md:px-96' type="text" placeholder="Task name" name="title" id="title" value={title} onChange={handleTitleChange}/>
            <div className="text-red-600">{!titleIsValid && <p>*Title is required</p>}</div>
            </div>
            <div>
            <input className='text-center border border-cyan-700 rounded-md mt-8 sm:py-2 px-8 md:py-8 md:px-96' type="text" placeholder="Task details" name="detail" id="detail" value={detail} onChange={handleDetailChange}/>
            </div>
            <div>Assigned to:</div>
            <div>
            <select className="border border-cyan-700 rounded-md" name="member" id="member" value={member} onChange={handleMemberChange}>
                <option select hidden>Please select a value</option>
                {members.map((member,key)=>(
                    <option name="member" value={member.name} key={key}>{member.name}</option>
                ))}
            </select>
            </div>
            <button type="submit" className="mt-8 bg-blue-500 px-4 py-2 text-white rounded-md" onClick={onCancel}>Cancel</button>
            <button type="submit" className="ml-8 mt-8 bg-blue-500 px-4 py-2 text-white rounded-md" onClick={onSubmitTask}>Submit</button>
        </div>
        </>
    )
}