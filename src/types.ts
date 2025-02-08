export type BreedList = string[];

export interface Dog {
    img: string;
    name: string;
    age: number;
    breed: string;
    zip_code: string;
    id: string;
    location?: {
        city: string,
        county: string,
        state: string,
    }
}


export interface DogSearchResponse {
    resultIds: string[];  
    total: number;        
    next?: string;        
    prev?: string; 
}

export interface LocationsResponse {
    city: string,
    county: string,
    state: string,
    zip_code: string
}

export interface DogSearchParams {
    from?: number;
    sort?: string;
    ageMin?: number;
    ageMax?: number;
    breeds?: string[]; // Array of breed names
    zipCodes?: string[]; // Array of zip codes
  }