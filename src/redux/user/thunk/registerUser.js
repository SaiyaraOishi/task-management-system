import axios from "axios";
import { addName } from "../actions";

const base_url="http://localhost:9001";

const registerUser = async (navigate, dispatch, name, email, password, password2) => {
    try{
        const response = await axios({
            url: `${base_url}/public/register`,
            method: "POST",
            data: {
                name,
                email,
                password,
                password2
            }
        })
        console.log(response.data);
        dispatch(addName({name,email,password}));
        navigate("/dashboard");
    }
    catch(error){
        console.error(error);
    }
}

export default registerUser;