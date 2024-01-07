import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoSearchComponentComponent } from './photo-search-component/photo-search-component.component';
import { BreedsResolver } from './photo-search-component/breeds.resolver';

const routes: Routes = [
  {
    path: '',
    component: PhotoSearchComponentComponent,
    resolve: { breeds: BreedsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }