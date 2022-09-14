import axios from "axios";
import { getTask } from "../actions";

const base_url = "http://localhost:9001";

const fetchTasks = async (dispatch, token) => {
    try{
        const response = await axios({
            url: `${base_url}/private/tasks`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: "GET",
        });
        console.log(response.data.tasks);
        dispatch(getTask(response.data.tasks));
    }catch(error){
        console.log(error);
    }
}

export default fetchTasks;