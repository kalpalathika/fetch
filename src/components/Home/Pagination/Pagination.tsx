import ReactPaginate from 'react-paginate';
import { usePagination } from '../../../hooks/usePagination';
import { useRecoilValue } from 'recoil';
import { dogStoreAtom } from '../../../store/dogStoreAtom';



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
            pageClassName="px-3 py-2 rounded-md bg-[#7d1f70] text-white hover:opacity-75 cursor-pointer"
            activeClassName="bg-[#300d38] text-white"
            previousClassName="px-3 py-2 bg-[#7d1f70] rounded-md hover:opacity-75 cursor-pointer text-white"
            nextClassName="px-3 py-2 bg-[#7d1f70] rounded-md hover:opacity-75 cursor-pointer text-white"
            breakClassName="!text-gray-800 px-3 py-2"
            disabledClassName="bg-gray-400 cursor-not-allowed pointer-events-none"
        />
  )
}
