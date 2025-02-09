import Select, { ActionMeta, MultiValue } from 'react-select';
import { useRecoilState } from 'recoil';
import { selectedBreedsAtom } from '../../../store/filterStoreAtom';
import { useFetchBreeds } from '../../../services/dogListing/servicesQuery';


export const BreedSelect = () => {
    const [selectedBreeds, setSelectedBreeds] = useRecoilState(selectedBreedsAtom);

    // Fetch breeds list
    const { data: breedData, isLoading: isBreedsLoading, isError: isBreedsError } = useFetchBreeds();

    const handleBreedsChange = (
        _newValue: MultiValue<{ label: string; value: string }>,
        actionMeta: ActionMeta<{ label: string; value: string }>
    ) => {
        if (actionMeta?.action == "select-option" ){
            setSelectedBreeds((prevBreeds) => [...prevBreeds, actionMeta?.option?.value ?? ""]);
        }
        if (actionMeta?.action == "remove-value" ){
            setSelectedBreeds((prevBreeds) => prevBreeds.filter(breed => breed !== actionMeta?.removedValue?.value));
        }
    }; 

    const breedOptions = breedData?.map((breed: string) => ({
        label: breed,
        value: breed,
    })) || [];

    return (
        <div>
            <label>Dog Breed</label>
            <Select
                isMulti
                name="breeds"
                options={breedOptions}
                value={selectedBreeds.map((breed) => ({ label: breed, value: breed }))}
                onChange={handleBreedsChange}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Select Breed"
                isLoading={isBreedsLoading}
                isDisabled={isBreedsLoading || isBreedsError}
                styles={{
                    menu: (provided) => ({
                        ...provided,
                        zIndex: 6,
                    }),
                }}
            />
            {isBreedsError && <p>Error loading breeds. Please try again.</p>}
        </div>
    );
};