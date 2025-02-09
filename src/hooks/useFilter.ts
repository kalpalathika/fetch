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
        isError,
        refetch,
    } = useDogSearchListing({ sort, ageMin, ageMax, breeds, zipCodes });


    // Form submission handler to refetch data
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await refetch(); // Wait for the refetch to complete
            const updatedData = data?.resultIds || [];
            const total = data?.total || 0;
    
            // Update the state once the refetch is complete
            setDogStore({
                dogList: updatedData,
                isError: isError,
                total: total,
            });
        } catch (error) {
            console.error("Error refetching data:", error);
            setDogStore({
                dogList: [],
                isError: true,
                total: 0,
            });
        }

    };
   

      
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