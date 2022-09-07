import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    const navigate = useNavigate();
    const handleTaskSumbit = () => {
        navigate("/task");
    }
    const handleMemberSubmit = () => {
        navigate("/member");
    }

    // throw new Error("ghfhdh")

    return (
        <>
            <Navbar />
            <div className="ml-8">
                <div className="mt-4  font-bold sm:text-sm md:text-2xl">Welcome to task management system</div>
                <p className=" sm:text-xs md:text-lg">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="mt-8 font-bold md:text-2xl sm:text-sm">Get Started</div>
                <button type="submit" className="mt-16 ml-28 bg-cyan-600 px-24 py-10 text-white font-bold rounded-md sm:mt-8 ml-12 text-sm md:text-2xl mt-16 ml-28 " onClick={handleTaskSumbit}>Tasks</button>
                <button type="submit" className="mt-16 ml-28 bg-cyan-600 px-24 py-10 text-white font-bold rounded-md sm:mt-8 ml-12 text-sm md:text-2xl mt-16 ml-28" onClick={handleMemberSubmit}>Members</button>
            </div>
        </>
    )
}