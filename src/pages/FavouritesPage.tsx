import { useState } from "react";
import { useRecoilValue } from "recoil"
import { favouritesAtom } from "../store/favouritesStoreAtom";
import { useFetchDogMatch } from "../services/favouriteListing/serviceQuery";
import { DogCard } from "../components/Home/Listing/DogCard";
import { DogMatchModal } from "../components/Favourites/DogMatchModal";
import { Dog } from "../types";
import { Layout } from "../components/Home/Layout/Layout";

const FavouritesPage = () => {
    // states
    const [matchedDog, setMatchedDog] = useState<Dog | null>(null);;
    const dogList = useRecoilValue(favouritesAtom);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // react query
    const {
        mutate: fetchDogMatch,
        isPending,
        isError
    } = useFetchDogMatch()

    // rendering logic
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

    // handle loading, no data and error cases
    if (isError){
        return  <p className="text-gray-600 text-center mt-6 text-lg"> Error loading data. Please try to logout and login again! </p>
    }

    if (dogList.length === 0 && !isError){
       return <p className="text-gray-600 text-center mt-6 text-lg">
            No pawsome favourites yet! 🐾 <br />
            Add some adorable doggos to your favorites and find your perfect furry friend! ❤️🐶
        </p>
    }

    return (
        <Layout>
            <div>
                <div className="flex items-center justify-center pt-24">
                    <button
                    className="button-theme flex  sm:w-48 md:w-96 lg:w-96 justify-center items-center rounded-md bg-[#7d1f70] px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleFetchMatch}
                    >
                    {isPending? "Finding..." : "Find My Pawfect Match !"}
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-12 p-12">

                    { dogList.map((dog,index) => (
                            <DogCard key={index} dog={dog} />
                        )
                    )}
                    { isModalOpen && matchedDog && (
                        <DogMatchModal dog={matchedDog} onClose={handleCloseModal} isOpen={isModalOpen}/>
                    )}
                
                </div>
            </div>
        </Layout>
    )
}

export default FavouritesPage