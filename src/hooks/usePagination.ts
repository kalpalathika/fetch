import { useEffect, useState } from "react"
import { useDogPaginationListing } from "../services/dogListing/servicesQuery";
import { dogStoreAtom } from "../store/dogStoreAtom";
import { useRecoilState } from "recoil";


export const usePagination = () => {
    const [_, setDogStore] = useRecoilState(dogStoreAtom);
    const [from, setFrom] = useState(0);
    
    const {
        data,
        isError,

    } = useDogPaginationListing({from})
    
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