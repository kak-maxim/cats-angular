export interface Breed {
    id: string;
    name: string;
}
  
export interface CatPhoto {
  id: string;
  url: string;
  breeds: Breed[];
}