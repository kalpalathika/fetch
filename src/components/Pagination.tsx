import ReactPaginate from 'react-paginate';
import { usePagination } from '../hooks/usePagination';
import { useRecoilValue } from 'recoil';
import { dogStoreAtom } from '../store/dogStoreAtom';



export const Pagination = () => {
  const {total} = useRecoilValue(dogStoreAtom)
  const {handlePageChange} = usePagination()
  return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={(selectedItem: { selected: number }) => handlePageChange(selectedItem.selected)}
            pageRangeDisplayed={5}
            pageCount={Math.ceil(total/25)}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="flex items-center justify-center space-x-2 mt-4"
            pageClassName="px-3 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer"
            activeClassName="bg-indigo-600 text-white"
            previousClassName="px-3 py-2 bg-gray-300 rounded-md hover:bg-gray-400 cursor-pointer"
            nextClassName="px-3 py-2 bg-gray-300 rounded-md hover:bg-gray-400 cursor-pointer"
            breakClassName="px-3 py-2"
            disabledClassName="opacity-50 cursor-not-allowed"
        />
  )
}
