// src/store/favouritesAtom.ts
import { atom } from 'recoil';
import { Dog } from '../types';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const favouritesAtom = atom<Dog[]>({
    key: 'favourites', 
    default: [],
    effects_UNSTABLE: [persistAtom],
});