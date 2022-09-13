import axios from "axios";
import { addMember } from "../actions";

const base_url = "http://localhost:9001";

const addMemberToAPI = async (dispatch, navigate, name, token) => {
    try{
        const response = await axios({
            url: `${base_url}/private/members`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: "POST",
            data: {
                name
            }
        });
        console.log(response.data);
        dispatch(addMember(response.data));
        navigate("/member");
    }
    catch(error){
        console.error(error);
    }
}

export default addMemberToAPI;