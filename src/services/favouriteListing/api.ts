import axios from "axios";
import { BASE_URL } from "../../constants"

export const postDogMatchApi = async (dogIds: string[]): Promise<{ match: string }> => {
    const response = await axios.post(
        `${BASE_URL}/dogs/match`,
        dogIds,
        {
            withCredentials: true,
        }
    );
    return response.data;
};