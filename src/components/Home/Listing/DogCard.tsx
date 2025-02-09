import { Fragment } from "react/jsx-runtime";
import { Dog } from "../../../types";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useFavourites } from "../../../hooks/useFavourites";


interface DogCardProps {
    dog: Dog;
    isHeartRequired?: boolean
}

export const DogCard : React.FC<DogCardProps> = ({ dog, isHeartRequired= true }) => {
    const {img, name, age, breed, zip_code,location= null, id} = dog;
    const { addFavourite, removeFavourite, isFavourite } = useFavourites();

        // Handle the favorite button click
        const handleFavouriteClick = (dog: Dog) => {
            if (isFavourite(id)) {
                removeFavourite(id); // Remove from favorites if already a favorite
            } else {
                addFavourite(dog); // Add to favorites if not already a favorite
            }
        };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-64 object-cover" src={img} alt="Dog Details"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">Breed: {breed}</p>
                <p className="text-gray-700 text-base">Age: {age}</p>

                {location && 
                    (
                        <Fragment>
                        <p className="text-gray-700 text-base">City: {location.city}</p>
                        <p className="text-gray-700 text-base">County: {location.county}</p>
                        <p className="text-gray-700 text-base">State: {location.state}</p>
                        </Fragment>
                    )
                }
                <p className="text-gray-700 text-base">Zip Code: {zip_code}</p>

            </div>
            <div className="flex justify-end w-full">
               { isHeartRequired && 
                <button
                        onClick={()=>handleFavouriteClick(dog)}
                        type="button"
                        className="bg-transparent border-none cursor-pointer transition-transform p-4 rounded-lg flex justify-end"
                        aria-label="Like"
                    >
                        <HeartIcon className={`w-6 h-6 
                        ${isFavourite(id)? 'fill-red-500' : 'fill-white'} 
                        text-red-500 stroke-red-600  hover:fill-red-100`}  /> 
                    </button>
                }
            </div>
        </div>
    )
}