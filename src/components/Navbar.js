import {Link,useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {logout} from "../redux/user/actions";
import {taskLogout} from "../redux/tasks/actions";
import { memberLogout } from "../redux/members/actions";

export default function Navbar(){

    const user = useSelector((state)=> state.user);
    const dispatch = useDispatch();
    const {name} = user;
    const navigate=useNavigate();

    const onHomeClick=()=>{
        navigate("/dashboard");
    }
    const onTaskClick=()=>{
        navigate("/task");
    }
    const onMemberClick=()=>{
        navigate("/member");
    }
    const handleLogoutClick = () => {
        dispatch(logout());
        dispatch(taskLogout());
        dispatch(memberLogout());
        navigate("/");
    }

    return(
        <>
        <div className="h-32 bg-cyan-700">
            <div className="flex">
            <img src="logo192.png" className="mt-10 h-12 ml-4 sm:ml-4 md:ml-8" alt=""/>
            <p className="mt-12 ml-2 text-white sm:text-sm mt-4 md:text-2xl mt-12">Task Management</p>
            <p className="text-white ml-auto mt-2">{name}</p>
            <Link to="/" className="text-white ml-4 mt-2 md:mr-12 sm:mr-4" onClick={handleLogoutClick}>Logout</Link>
            </div>
            <div className="flex justify-end  md:mr-12 sm:mr-4">
            <button type="submit" className="bg-cyan-500 rounded-md px-2 py-1 text-white " onClick={onHomeClick}>Home</button>
            <button type="submit" className="bg-cyan-500 rounded-md px-2 py-1 text-white ml-2" onClick={onTaskClick}>Tasks</button>
            <button type="submit" className="bg-cyan-500 rounded-md px-2 py-1 text-white ml-2" onClick={onMemberClick}>Members</button>
            </div>
        </div>
        </>
    )
}