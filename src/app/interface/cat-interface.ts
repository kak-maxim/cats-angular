export interface Breed {
    id: string;
    name: string;
}
  
export interface CatPhoto {
  id: string;
  url: string;
  breeds: Breed[];
}

export interface CatState {
  photos: CatPhoto[];
  breeds: Breed[];
  isLoading: boolean;
}

export const initialState: CatState = {
  photos: [],
  breeds: [],
  isLoading: false
};