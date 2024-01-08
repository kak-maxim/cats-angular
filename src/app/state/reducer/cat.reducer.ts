import { Action, createReducer, on } from '@ngrx/store';
import { initialState, CatState } from '../../interface/cat-interface';
import * as CatActions from '../actions/cat.actions';

export const catReducer = createReducer(
  initialState,
  on(CatActions.loadPhotos, state => ({ ...state, isLoading: true })),
  on(CatActions.photosLoaded, (state, { photos }) => ({ ...state, photos, isLoading: false })),
  on(CatActions.loadBreeds, state => ({ ...state, isLoading: true })),
  on(CatActions.breedsLoaded, (state, { breeds }) => ({ ...state, breeds, isLoading: false }))
);

export function reducer(state: CatState | undefined, action: Action) {
  return catReducer(state, action);
}