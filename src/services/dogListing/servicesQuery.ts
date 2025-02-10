import { useMutation, useQuery } from "@tanstack/react-query"
import { getDogsSearchListApi, postDogsApi, postLocationsApi, getBreedsApi } from "./api"
import { Dog, DogSearchParams, DogSearchResponse, LocationsResponse } from "../../types"
import { DEFAULT_AGE_RANGE, DEFAULT_SORT } from "../../constants"


export const useDogSearchListing = (
    {
        from = 0,
        sort = DEFAULT_SORT,
        ageMin = DEFAULT_AGE_RANGE.ageMin,
        ageMax = DEFAULT_AGE_RANGE.ageMax,
        breeds = [],
        zipCodes = [],
      }: DogSearchParams) => {
    return useQuery<DogSearchResponse>({
        queryKey: ["dogList",from,sort,ageMin,ageMax,breeds],
        queryFn: () => getDogsSearchListApi({ from, sort, ageMin, ageMax, breeds, zipCodes }),
        enabled: false
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

export const useFetchBreeds = () => {
    return useQuery<string[]>({
        queryKey: ["breeds"],
        queryFn: getBreedsApi
    });
}