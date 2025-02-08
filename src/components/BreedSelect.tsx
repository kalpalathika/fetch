import Select from 'react-select';
import { Fragment } from 'react/jsx-runtime';

export const BreedSelect = () => (

<Fragment>
    <label>Dog Breed</label>
    <Select
        defaultValue={[{ label: 'Yellow', value: 'yellow' }, { label: 'Red', value: 'red' }]}
        isMulti
        name="colors"
        options={[
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cherry', value: 'cherry' }
        ]}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder = "Select Breed"
        styles={{menu: (provided) => ({
            ...provided,
            zIndex:6
        })}}

    />
  </Fragment>
);