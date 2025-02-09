export const BASE_URL = import.meta.env.VITE_BASE_URL

export const SORT_OPTIONS = [
    { label: 'Breed (A-Z)', value: 'breed:asc' },
    { label: 'Breed (Z-A)', value: 'breed:desc' },
    { label: 'Name (A-Z)', value: 'name:asc' },
    { label: 'Name (Z-A)', value: 'name:desc' },
    { label: 'Age (Low to High)', value: 'age:asc' },
    { label: 'Age (High to Low)', value: 'age:desc' },
];


// Default values for filters
export const DEFAULT_SELECTED_BREEDS: string[] = [];
export const DEFAULT_AGE_RANGE = { ageMin: 1, ageMax: 15 };
export const DEFAULT_ZIP_CODES: string[] = [];
export const DEFAULT_SORT = "breed:asc";
