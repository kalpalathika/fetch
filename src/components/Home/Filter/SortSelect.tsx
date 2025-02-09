
import Select, { SingleValue } from 'react-select';
import { DEFAULT_SORT, SORT_OPTIONS } from '../../../constants';
import { useRecoilState } from 'recoil';
import { sortAtom } from '../../../store/filterStoreAtom';

export const SortSelect = () => {
  const [sort, setSort] = useRecoilState(sortAtom);
  const handleSortChange = (
    newValue: SingleValue<{ label: string; value: string }>) => {
      setSort(newValue?.value?? DEFAULT_SORT);
    } 


  return (
    <div>
      <p className='text-gray-600 mb-4'>Sort By</p>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={{ label: DEFAULT_SORT, value: DEFAULT_SORT }}
        value={SORT_OPTIONS.find(option => option.value === sort)}
        onChange={handleSortChange}
        name="color"
        options={SORT_OPTIONS}
      />
    </div>
  );
}