
import Select from 'react-select';

export const SortSelect = () => {
  return (
    <>
      <p className='mt-4'>Sort By</p>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={{ label: 'Yellow', value: 'yellow' }}        
        // isLoading={isLoading}
        // isClearable={isClearable}
        // isRtl={isRtl}
        // isSearchable={isSearchable}
        name="color"
        options={[
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' },
            { label: 'Cherry', value: 'cherry' }
            ]}
      />
    </>
  );
}