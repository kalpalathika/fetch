import ReactPaginate from 'react-paginate';
import { usePagination } from '../../../hooks/usePagination';
import { useRecoilValue } from 'recoil';
import { dogStoreAtom } from '../../../store/dogStoreAtom';
import { DEFAULT_PAGE_SIZE } from '../../../constants';



export const Pagination = () => {
  const { total } = useRecoilValue(dogStoreAtom);
  const { handlePageChange } = usePagination();

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={(selectedItem: { selected: number }) => handlePageChange(selectedItem.selected)}
      pageRangeDisplayed={3}
      pageCount={Math.ceil(total / DEFAULT_PAGE_SIZE)}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName="flex items-center justify-center space-x-2 mt-4 sm:space-x-3 md:space-x-4"
      pageClassName="px-2 py-1 rounded-md bg-[#7d1f70] text-white hover:opacity-75 cursor-pointer sm:px-3 sm:py-2"
      activeClassName="bg-[#300d38] text-white"
      previousClassName="px-2 py-1 bg-[#7d1f70] rounded-md hover:opacity-75 cursor-pointer text-white sm:px-3 sm:py-2"
      nextClassName="px-2 py-1 bg-[#7d1f70] rounded-md hover:opacity-75 cursor-pointer text-white sm:px-3 sm:py-2"
      breakClassName="!text-gray-800 px-3 py-2"
      disabledClassName="bg-gray-400 cursor-not-allowed pointer-events-none"
    />
  );
};
