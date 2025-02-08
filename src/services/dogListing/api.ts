import axios from "axios"
import { BASE_URL } from "../../constants"
import { Dog, DogSearchResponse, LocationsResponse } from "../../types";


export const getDogsSearchListApi = async (from = 0, sort="breed:asc", ageMin = 1, ageMax= 15): Promise<DogSearchResponse> => {
    const response = await axios.get(
        `${BASE_URL}/dogs/search`,
        {
            withCredentials: true,
            params: {
                ageMin: ageMin,
                ageMax: ageMax,
                size: 25,
                from: from,
                sort: sort
            }
        }
    )
    return response.data;
}

export const postDogsApi = async (dogIds: string[]): Promise<Dog[]> => {
    const response = await axios.post(
        `${BASE_URL}/dogs`,
        dogIds,
        {
            withCredentials: true,
        }
    )

    return response.data
}

export const postLocationsApi = async (zipCodes: string[]): Promise<LocationsResponse[]> => {
    const response = await axios.post(
        `${BASE_URL}/locations`,
        zipCodes,
        {
            withCredentials: true
        }
    )
    return response.data
}