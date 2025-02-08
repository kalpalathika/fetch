import axios from "axios";
import { BASE_URL } from "../../constants";

export const loginApi = async (credentials: {name: string, email: string}) => {
    const response = await axios.post(`${BASE_URL}/auth/login`, credentials, {
        withCredentials: true
    });
    return response.data
}


export const logoutApi = async () => {
    await axios.post(`${BASE_URL}/auth/logout`, {}, {withCredentials: true});
}