import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { CatService } from './services/cat-service.service';
import { Breed, CatPhoto } from '../interface/cat-interface';

@Component({
  selector: 'app-photo-search-component',
  templateUrl: './photo-search-component.component.html',
  styleUrls: ['./photo-search-component.component.scss']
})
export class PhotoSearchComponentComponent implements OnInit {
  searchForm!: FormGroup;
  photos: CatPhoto[] = [];
  breeds!: Breed[];
  isLoading = true;

  constructor(
    private fb: FormBuilder,
    private catService: CatService
  ) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      breed: [''],
      limit: [10]
    });

    this.catService.getBreeds().subscribe(breeds => {
      this.breeds = breeds;
    });

    this.catService.getPhotos(10).subscribe(photos => {
      this.photos = photos;
      this.isLoading = false;
    });

    this.searchForm.valueChanges.pipe(
      switchMap(formValues => {
        this.isLoading = true; 
        return this.catService.getPhotos(formValues.limit, formValues.breed);
      })
    ).subscribe(photos => {
      this.photos = photos;
      this.isLoading = false; 
    });
  }

  ngOnDestroy(): void {

  }
}