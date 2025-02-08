import { useEffect, useState } from "react";
import { useDogSearchListing, useFetchBreeds } from "../services/dogListing/servicesQuery";
import { useRecoilState } from "recoil";
import { dogStoreAtom } from "../store/dogStoreAtom";


export const userFilter = () => {
    const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);
    const [ageMin, setAgeMin] = useState(1);
    const [ageMax,setAgeMax] = useState(15);
    const [zipCodes, setZipCodes] = useState<string[]>([]);
    const [sort, setSort] = useState('breed:asc');
    const [_, setDogStore] = useRecoilState(dogStoreAtom);


    // Fetch breeds list
    const { data: breedData, isLoading: isBreedsLoading, isError: isBreedsError } = useFetchBreeds();

    // Fetch dog search results based on form values
    const {
        data,
        isPending,
        isError,
        refetch,
    } = useDogSearchListing({ sort, ageMin, ageMax, breeds: selectedBreeds, zipCodes });

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
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSort(e.target.value);
    const handleAgeMinChange = (e: React.ChangeEvent<HTMLInputElement>) => setAgeMin(Number(e.target.value));
    const handleAgeMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => setAgeMax(Number(e.target.value));
    const handleBreedsChange = (selectedBreeds: string[]) => setSelectedBreeds(selectedBreeds);
    const handleZipCodesChange = (selectedZipCodes: string[]) => setZipCodes(selectedZipCodes);

    return {
        breeds: breedData || [],
        isBreedsLoading,
        isBreedsError,
        handleSubmit,
        handleSortChange,
        handleAgeMinChange,
        handleAgeMaxChange,
        handleBreedsChange,
        handleZipCodesChange,
        sort,
        ageMin,
        ageMax,
        selectedBreeds,
        zipCodes,
      };


    

}