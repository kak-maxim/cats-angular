import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CatService } from './services/cat-service.service';
import { Breed } from '../interface/cat-interface';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BreedsResolver implements Resolve<Breed[]> {
  constructor(private catService: CatService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Breed[]> {
    return this.catService.getBreeds();
  }
}