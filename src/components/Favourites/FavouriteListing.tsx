import { useRecoilValue } from "recoil"
import { favouritesAtom } from "../../store/favouritesStoreAtom";
import { DogCard } from "../Home/Listing/DogCard";
import { useFetchDogMatch } from "../../services/favouriteListing/serviceQuery";
import { useState } from "react";
import { DogMatchModal } from "./DogMatchModal";
import { Dog } from "../../types";


export const FavouriteListing = () => {
    const [matchedDog, setMatchedDog] = useState<Dog | null>(null);;
    const dogList = useRecoilValue(favouritesAtom);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const {
        mutate: fetchDogMatch,
        isPending,
        isError
    } = useFetchDogMatch()

    const handleFetchMatch = () => {
        const dogIds = dogList?.map((dog)=> dog.id) ?? []
        fetchDogMatch(dogIds, {
            onSuccess: ({match}) => {
                const foundDog = dogList.find((dog) => dog.id === match);
                if (foundDog) {
                    setMatchedDog(foundDog);
                    setIsModalOpen(true);
                }
            }
        });
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setMatchedDog(null); 
    };

    console.log("matched dog--",matchedDog)
    return (
        <div>
            <div className="flex items-center justify-center pt-24">
                <button
                  className="flex w-96 justify-center items-center rounded-md bg-[#7d1f70] px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleFetchMatch}
                >
                  {isPending? "Finding..." : "Find My Pawfect Match !"}
                </button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center items-center mt-12 pb-12">

                { dogList.map((dog,index) => (
                        <DogCard key={index} dog={dog} />
                    )
                )}
                { isModalOpen && matchedDog && (
                    <DogMatchModal dog={matchedDog} onClose={handleCloseModal} isOpen={isModalOpen}/>
                )}
            
            </div>
    </div>
    )
}