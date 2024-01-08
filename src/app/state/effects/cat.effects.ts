import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CatService } from '../../photo-search-component/services/cat-service.service';
import * as CatActions from '../actions/cat.actions';

@Injectable()
export class CatEffects {
  loadPhotos$ = createEffect(() => this.actions$.pipe(
    ofType(CatActions.loadPhotos),
    mergeMap(({ limit, breedId }) => 
      this.catService.getPhotos(limit, breedId).pipe(
        map(photos => CatActions.photosLoaded({ photos })),
        catchError(() => of({ type: '[Cat] Load Photos Failed' }))
      )
    )
  ));

  loadBreeds$ = createEffect(() => this.actions$.pipe(
    ofType(CatActions.loadBreeds),
    mergeMap(() => 
      this.catService.getBreeds().pipe(
        map(breeds => CatActions.breedsLoaded({ breeds })),
        catchError(() => of({ type: '[Cat] Load Breeds Failed' }))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private catService: CatService
  ) {}
}