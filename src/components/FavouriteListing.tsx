import { DogCard } from "./DogCard"


export const FavouriteListing = () => {

    return (
        <div>
            <div className="flex items-center justify-center pt-24">
                <button
                  type="submit"
                  className="flex w-96 justify-center items-center rounded-md bg-[#7d1f70] px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Find My Pawfect Match !
                </button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center items-center mt-12">

                { new Array(10).fill(null).map((_,index) => (
                        <DogCard key={index}/>
                    )
                )}
            </div>
        {/* <div className="mt-8">
            <Pagination/>
        </div> */}
    </div>
    )
}