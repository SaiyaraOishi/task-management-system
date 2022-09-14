import axios from "axios";
import { getMember } from "../actions";

const base_url = "http://localhost:9001";

const fetchMembers = async (dispatch, token) => {
    try{
        const response = await axios({
            url: `${base_url}/private/members`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: "GET",
        });
        console.log(response.data);
        dispatch(getMember(response.data.members));
    }catch(error){
        console.error(error);
    }
}

export default fetchMembers;