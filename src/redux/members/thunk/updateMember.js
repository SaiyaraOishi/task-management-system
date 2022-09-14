import axios from "axios";

const base_url = "http://localhost:9001";

const updateMember = async (navigate, memberId, name, token) => {
    try{
        const response = await axios({
            url: `${base_url}/private/members/${memberId}`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            method: "PATCH",
            data: {
                name
            }
        });
        console.log(response.data);
        navigate("/member");
    }catch(error){
        console.log(error);
    }
}

export default updateMember;