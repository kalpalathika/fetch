import { useEffect, useState } from "react"
import { useDogSearchListing } from "../services/dogListing/servicesQuery";
import { dogStoreAtom } from "../store/dogStoreAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { ageMaxAtom, ageMinAtom, selectedBreedsAtom, sortAtom } from "../store/filterStoreAtom";


export const usePagination = () => {
    const [_, setDogStore] = useRecoilState(dogStoreAtom);
    const [from, setFrom] = useState(0);
    const breeds = useRecoilValue(selectedBreedsAtom)
    const ageMin = useRecoilValue(ageMinAtom)
    const ageMax = useRecoilValue(ageMaxAtom)
    const sort = useRecoilValue(sortAtom)
   
    const {
        data,
        isError,
        refetch,
    } = useDogSearchListing({ from,breeds,ageMin,ageMax,sort });

    useEffect(() => {
        refetch(); // Trigger data fetch manually whenever 'from' changes
    }, [from, refetch]);

    useEffect(() => {
        setDogStore((prevState) => ({
            dogList: data?.resultIds || [],
            isError: isError,
            total: prevState.total || data?.total || 0,
        }));
    }, [data, isError,setDogStore]);

    const handlePageChange = async (page: number) => {
        setFrom((page) * 25)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    return {
        handlePageChange
      };

}