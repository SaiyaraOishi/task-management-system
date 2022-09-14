import axios from "axios";

const baseUrl = "http://localhost:9001";
const updateTask = async (navigate, token, id, title, description, member) => {
    try {
        const response = await axios({
            url: `${baseUrl}/private/tasks/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: "PATCH",
            data: {
                title,
                description,
                memberId: member,
            },
        });
        console.log(response.data);
        navigate("/task");
    } catch (error) {
        console.log(error);
    }
};

export default updateTask;