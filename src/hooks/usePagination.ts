import { useState } from "react"
import { useDogSearchListing } from "../services/dogListing/servicesQuery";


export const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const from = (currentPage - 1) * 25

    const {
        data: dogList,
        isPending: isDogSearchLoading,
        isError: isDogSearchError

    } = useDogSearchListing(from)
    

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    return {
        dogList,
        isDogSearchLoading,
        isDogSearchError,
        currentPage,
        handlePageChange
      };

}