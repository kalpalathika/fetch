import { useMutation } from "@tanstack/react-query";
import { postDogMatchApi } from "./api";

export const useFetchDogMatch = () => {
    return useMutation<{ match: string }, Error, string[]>({
        mutationFn: (dogIds: string[]) => postDogMatchApi(dogIds),
    });
};