import axios from "axios"
import { BASE_URL, DEFAULT_AGE_RANGE, DEFAULT_PAGE_SIZE, DEFAULT_SORT } from "../../constants"
import { Dog, DogSearchParams, DogSearchResponse, LocationsResponse } from "../../types";


export const getDogsSearchListApi = async ({
    from = 0,
    sort = DEFAULT_SORT,
    ageMin = DEFAULT_AGE_RANGE.ageMin,
    ageMax = DEFAULT_AGE_RANGE.ageMax,
    breeds = [],
    zipCodes = [],
  }: DogSearchParams): Promise<DogSearchResponse> => {
    const response = await axios.get(
        `${BASE_URL}/dogs/search`,
        {
            withCredentials: true,
            params: {
                ageMin: ageMin,
                ageMax: ageMax,
                size: DEFAULT_PAGE_SIZE,
                from: from,
                sort: sort,
                breeds: breeds,
                zipCodes: zipCodes
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

export const getBreedsApi = async (): Promise<string[]> => {
    const response = await axios.get(
        `${BASE_URL}/dogs/breeds`,
        {
            withCredentials: true,
        }
    )
    return response.data;
}