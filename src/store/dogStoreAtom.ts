import { atom } from 'recoil';

interface DogStore {
    dogList: string[];
    total: number;
    isError: boolean;
}
export const dogStoreAtom = atom<DogStore>({
    key: 'dogStore',
    default: {
        dogList: [],
        total: 0,
        isError: false,
    },
});
