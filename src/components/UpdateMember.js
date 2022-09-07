import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { updateMemberName } from "../redux/tasks/actions";
import updateMemberToDb from "../redux/members/thunk/updateMember";
import { updateMemberNameInDb } from "../redux/tasks/thunk/updateTask";

export default function UpdateMember() {

    const [name, setName] = useState("");
    const { id } = useParams();
    const member = useSelector((state) => state.members.member);
    const dispatch = useDispatch();


    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const nameIsValid = name.trim().length > 0;


    const navigate = useNavigate();
    const onUpdateMember = () => {
        if (nameIsValid) {
            console.log(member.name);
            console.log(name);
            // dispatch(updateMemberName({ oldName: member.name, newName: name }));
            //should be done before updating name otherwise member.name and name becomes same
            dispatch(updateMemberNameInDb(id, { oldName: member.name, newName: name }));
            dispatch(updateMemberToDb(id, { name: name }));
            navigate("/member");
        }
    }

    useEffect(() => {
        if (member) {
            setName(member.name);
        }
    }, [member]);


    const onCancel = () => {
        navigate("/member");
    }

    return (
        <>
            <Navbar />
            <div className="ml-8">
                <div className="mt-4 text-2xl font-bold">Update Member</div>
                <div className="">
                    <input className='text-center border border-cyan-700 rounded-md mt-8 sm:py-2 px-8 md:py-8 md:px-96' type="text" placeholder="Name" name="name" id="name" value={name} onChange={handleNameChange} />
                    <div className="text-red-600">{!nameIsValid && <p>*Name is required</p>}</div>
                </div>
                <button type="submit" className="mt-8 bg-blue-500 px-4 py-2 text-white rounded-md" onClick={onCancel}>Cancel</button>
                <button type="submit" className="ml-8 mt-8 bg-blue-500 px-4 py-2 text-white rounded-md" onClick={onUpdateMember}>Update</button>
            </div>
        </>
    )
}