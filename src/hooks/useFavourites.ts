import { useRecoilState } from 'recoil';
import { Dog } from '../types';
import { favouritesAtom } from '../store/favouritesStoreAtom';

export const useFavourites = () => {
    const [favourites, setFavourites] = useRecoilState(favouritesAtom);

    // Add a dog to the favorites list
    const addFavourite = (dog: Dog) => {
        setFavourites((prevFavourites) => {
            // Check if the dog is already in the favorites list
            const isAlreadyFavourite = prevFavourites.some((fav) => fav.id === dog.id);
            if (isAlreadyFavourite) {
                return prevFavourites; // Do nothing if already a favorite
            }
            // Add the dog to the favorites list with isFavourite set to true
            return [...prevFavourites, { ...dog, isFavourite: true }];
        });
    };

    // Remove a dog from the favorites list
    const removeFavourite = (dogId: string) => {
        setFavourites((prevFavourites) =>
            prevFavourites.filter((fav) => fav.id !== dogId)
        );
    };

    // Check if a dog is in the favorites list
    const isFavourite = (dogId: string) => {
        return favourites.some((fav) => fav.id === dogId);
    };

    return {
        favourites,
        addFavourite,
        removeFavourite,
        isFavourite,
    };
};