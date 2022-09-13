import axios from "axios";
import { addUser } from "../actions";

const base_url = "http://localhost:9001";

const loginUser = async (navigate, dispatch, name, email, password) => {
    try{
        const response = await axios({
            url: `${base_url}/public/login`,
            method: "POST",
            data: {
                email,
                password
            }
        });
        console.log(response.data);
        navigate("/dashboard");
        dispatch(addUser(response.data));
    }
    catch(error){
        console.error(error);
    }
}

export default loginUser;