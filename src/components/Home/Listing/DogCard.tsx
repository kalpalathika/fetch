import { Fragment } from "react/jsx-runtime";
import { Dog } from "../../../types";


interface DogCardProps {
    dog: Dog;
}

export const DogCard : React.FC<DogCardProps> = ({ dog }) => {
    const {img, name, age, breed, zip_code,location= null} = dog;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    )
}