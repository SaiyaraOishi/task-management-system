import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

export default function Tasks(){

    const navigate=useNavigate();
    const tasks = useSelector((state) => state.tasks);
    const onAddTask=()=>{
        navigate("/addtask");
    }

    const handleUpdateTask = (id) =>{
        navigate(`/task/${id}`);
    }

    return(
        <>
        <Navbar/>
        <div className="ml-8">
        <div className="mt-4 text-2xl font-bold">All Tasks</div>
        <p className="text-lg mt-10">You will find all tasks here.</p>
        <div className="mt-4 text-2xl font-bold">Here is all tasks:</div>
        <button className="bg-blue-500 px-4 py-2 text-white rounded-md" onClick={onAddTask}>Add New</button>
        <div className="w-36">
        <ol>
            {tasks.map(task=>(
                <div className="">
                <li className="flex">
                    <div className="underline text-blue-600">
                        <p onClick={()=>handleUpdateTask(task.id)}>{task.title}</p>
                    </div>
                    <p className="text-blue-600 ml-auto underline">{task.member}</p>
                </li>
                </div>
            ))}
        </ol>
        </div>
        </div>
        </>
    )
}