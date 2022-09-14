import axios from "axios";
import { addTask } from "../actions";

const base_url = "http://localhost:9001";

const addTaskToAPI = async ( navigate, title, description, memberId, token) => {
    // console.log(title, description, memberId);
    try{
        const response = await axios({
            url: `${base_url}/private/tasks`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: "POST",
            data: {
                title,
                description,
                memberId
            }
        });
        console.log(response.data);
        // dispatch(addTask(response.data));
        navigate("/task");
    }
    catch(error){
        console.log(error);
    }
}

export default addTaskToAPI;