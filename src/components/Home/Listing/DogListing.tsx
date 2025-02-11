import { Fragment, useEffect, useState } from "react";
import { useFetchDogDetails, useFetchLocations } from "../../../services/dogListing/servicesQuery"
import { DogCard } from "./DogCard"
import { Dog, LocationsResponse } from "../../../types";
import { useRecoilValue } from "recoil";
import { dogStoreAtom } from "../../../store/dogStoreAtom";
import {SkeletonCardLoader} from "../../common/SkeletonCardLoader";

export const DogListing = () => {
    // states
    const [dogDetailListWithLocations, setDogDetailListWithLocations] = useState<Dog[]>([]);
    const { dogList, isError: isDogSearchError } = useRecoilValue(dogStoreAtom);

    // react query
    const {
        mutate: fetchDogDetails,
        data: dogDetailList, 
        isPending: isDogDetailLoading, 
        isError: isDogDetailError
    } = useFetchDogDetails();

    const {
        mutateAsync: fetchLocations,
        isPending: isLocationsLoading,
        isError: isLocationsError
    } = useFetchLocations();

    // rendering logic
    const fetchAndSetLocations = async (zipcodes: string[]) => {
        
        if (!zipcodes?.length) return;

        try {
            const locations : LocationsResponse[] = await fetchLocations(zipcodes);
            if (!locations || !locations.length) return
            const locationMap = new Map(
                locations
                .filter((loc: LocationsResponse | null) => loc !== null)
                .map((loc: LocationsResponse) => [loc.zip_code, loc]));

            const enrichedDogList = dogDetailList?.map((dog: Dog) => {
                const location = locationMap.get(dog.zip_code);
                return {
                    ...dog,
                    location: location ? {
                        city: location.city,
                        county: location.county,
                        state: location.state,
                    } : undefined, 
                };
            }) ?? [];

            setDogDetailListWithLocations(enrichedDogList);

        }catch(error){
            console.error("Failed to fetch locations", error);
        }
    }

    useEffect(()=> {
        if (dogList?.length) {
            fetchDogDetails(dogList)
        }
    }, [dogList, fetchDogDetails]);

    useEffect(() => {
        if (dogDetailList?.length) {
            setDogDetailListWithLocations(dogDetailList ?? [])

            const zipCodes: string[] = dogDetailList.map((dog: Dog) => dog.zip_code) ?? [];
            fetchAndSetLocations(zipCodes);
        }
    }, [dogDetailList]);
    
    const isLoading = isDogDetailLoading || isLocationsLoading;
    const isError = isDogSearchError || isDogDetailError || isLocationsError;

    // Handle loading states
    if (isLoading ) {
        return <SkeletonCardLoader count={25} />;

    }

    // Handle loading states
    if (isError){
        return <p className="text-gray-600 text-center mt-6 text-lg">Error loading data. Please try to logout and login again!</p>
    }

    // handle case when there is no data
    if (!dogDetailListWithLocations || !dogDetailListWithLocations.length){
        return <p className="text-gray-600 mt-6 text-lg">Oh no! No adorable pups found. Try tweaking your filters and let's find your perfect furry friend! </p>
    }

    return (
        <Fragment>
            {dogDetailListWithLocations && dogDetailListWithLocations.length && (
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">

                        {
                            dogDetailListWithLocations.map((dog: Dog)=> (
                                <div key={dog.id}>
                                    <DogCard dog={dog}/>
                                </div>
                            ))
                        }
                    </div>
                    
            </div>)}
        </Fragment>
    
    )
}