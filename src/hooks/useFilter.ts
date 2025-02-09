import { useRecoilState, useRecoilValue } from "recoil";
import {
    selectedBreedsAtom,
    ageMinAtom,
    ageMaxAtom,
    zipCodesAtom,
    sortAtom,
} from "../store/filterStoreAtom";
import { useDogSearchListing } from "../services/dogListing/servicesQuery";
import { dogStoreAtom } from "../store/dogStoreAtom";
import { useEffect } from "react";

export const useFilter= () => {
    // Recoil state
    const breeds = useRecoilValue(selectedBreedsAtom)
    const ageMin = useRecoilValue(ageMinAtom)
    const ageMax = useRecoilValue(ageMaxAtom)
    const sort = useRecoilValue(sortAtom)


    const [zipCodes, setZipCodes] = useRecoilState(zipCodesAtom);

    const [_, setDogStore] = useRecoilState(dogStoreAtom);

  

    // Fetch dog search results based on form values
    const {
        data,
        isPending,
        isError,
        refetch,
    } = useDogSearchListing({ sort, ageMin, ageMax, breeds, zipCodes });

    useEffect(() => {
        setDogStore({
            dogList: data?.resultIds || [],
            isError: isError,
            total: data?.total || 0,
        });
    }, [data, isPending, isError, setDogStore]);

    // Form submission handler to refetch data
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        refetch();
    };

    // Handlers for form field changes
   

      
    const handleZipCodesChange = (selectedZipCodes: string[]) => setZipCodes(selectedZipCodes);

    return {
        handleSubmit,
        handleZipCodesChange,
        sort,
        ageMin,
        ageMax,
        zipCodes,
    };
};