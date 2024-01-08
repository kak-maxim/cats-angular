import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as CatActions from '../state/actions/cat.actions';
import * as fromCatSelectors from '../state/selectors/cat.selector';
import { Breed, CatPhoto, CatState } from '../interface/cat-interface';

@Component({
  selector: 'app-photo-search-component',
  templateUrl: './photo-search-component.component.html',
  styleUrls: ['./photo-search-component.component.scss']
})
export class PhotoSearchComponentComponent implements OnInit {
  searchForm!: FormGroup;
  photos$: Observable<CatPhoto[]>;
  isLoading$: Observable<boolean>;
  breeds$: Observable<Breed[]>;

  constructor(
    private store: Store<CatState>,
    private fb: FormBuilder
  ) {
    this.photos$ = this.store.pipe(select(fromCatSelectors.selectPhotos));
    this.isLoading$ = this.store.pipe(select(fromCatSelectors.selectIsLoading));
    this.breeds$ = this.store.pipe(select(fromCatSelectors.selectBreeds));
  }

  ngOnInit() {
    this.store.dispatch(CatActions.loadBreeds());

    this.searchForm = this.fb.group({
      breed: [''],
      limit: [10]
    });

    this.searchForm.valueChanges.subscribe(formValues => {
      this.store.dispatch(CatActions.loadPhotos({ limit: formValues.limit, breedId: formValues.breed }));
    });

    this.store.dispatch(CatActions.loadPhotos({ limit: 10, breedId: '' }));
  }
  
}