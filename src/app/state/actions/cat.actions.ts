import { createAction, props } from '@ngrx/store';
import { Breed, CatPhoto } from '../../interface/cat-interface';

export const loadPhotos = createAction('[Cat] Load Photos', props<{ limit: number, breedId?: string }>());
export const photosLoaded = createAction('[Cat] Photos Loaded', props<{ photos: CatPhoto[] }>());
export const loadBreeds = createAction('[Cat] Load Breeds');
export const breedsLoaded = createAction('[Cat] Breeds Loaded', props<{ breeds: Breed[] }>());