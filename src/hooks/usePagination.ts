import { useEffect, useState } from "react"
import { useDogSearchListing } from "../services/dogListing/servicesQuery";
import { dogStoreAtom } from "../store/dogStoreAtom";
import { useRecoilState } from "recoil";


export const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [dogStore, setDogStore] = useRecoilState(dogStoreAtom);

    const from = (currentPage - 1) * 25

    const {
        data,
        isFetching,
        isError,
        refetch

    } = useDogSearchListing({from})
    
    // Fetch data on mount
    useEffect(() => {
        const fetchData = async () => {
            await refetch();
            setDogStore({
                ...dogStore,
                total: data?.total ?? 0
            });
        }
        fetchData()
    }, []);


    useEffect(() => {
        setDogStore({
            ...dogStore,
            dogList: data?.resultIds || [],
            isError: isError,
        });
    }, [data?.resultIds, isFetching, isError, setDogStore]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        refetch();
    }

    return {
        currentPage,
        handlePageChange
      };

}