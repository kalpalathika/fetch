import { useMutation, useQuery } from "@tanstack/react-query"
import { getDogsSearchListApi, postDogsApi, postLocationsApi } from "./api"
import { Dog, DogSearchResponse, LocationsResponse } from "../../types"

export const useDogSearchListing = (from=0, sort="breed:asc", ageMin = 1, ageMax=15) => {
    return useQuery<DogSearchResponse>({
        queryKey: ["dogList",from,sort,ageMin,ageMax],
        queryFn: () => getDogsSearchListApi(from, sort, ageMin, ageMax),
    })
}

export const useFetchDogDetails = () => {
    return useMutation<Dog[],Error,string[]>(
        {
            mutationFn: (dogIds: string[]) => postDogsApi(dogIds)
        }
    );
}

export const useFetchLocations = () => {
    return useMutation<LocationsResponse[],Error,string[]>(
        {
            mutationFn: (zipCodes: string[]) => postLocationsApi(zipCodes)
        }
    )
}