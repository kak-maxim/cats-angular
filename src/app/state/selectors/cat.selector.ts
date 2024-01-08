import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CatState } from '../../interface/cat-interface';

export const selectCatState = createFeatureSelector<CatState>('cat');

export const selectPhotos = createSelector(
  selectCatState,
  (state: CatState) => state.photos
);

export const selectBreeds = createSelector(
  selectCatState,
  (state: CatState) => state.breeds
);

export const selectIsLoading = createSelector(
  selectCatState,
  (state: CatState) => state.isLoading
);