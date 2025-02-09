import { atom } from "recoil";
import { DEFAULT_SORT } from "../constants";

// Atom for selected breeds
export const selectedBreedsAtom = atom<string[]>({
    key: "selectedBreeds",
    default: [],
});

// Atom for minimum age
export const ageMinAtom = atom<number>({
    key: "ageMin",
    default: 1,
});

// Atom for maximum age
export const ageMaxAtom = atom<number>({
    key: "ageMax",
    default: 15,
});

// Atom for zip codes
export const zipCodesAtom = atom<string[]>({
    key: "zipCodes",
    default: [],
});

// Atom for sort order
export const sortAtom = atom<string>({
    key: "sort",
    default: DEFAULT_SORT,
});