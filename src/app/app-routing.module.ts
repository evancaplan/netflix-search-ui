// src/app/app-routing.module.ts
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MediaSearchComponent} from "./media-search/media-search.component";
import {MediaDetailsComponent} from "./media-details/media-details.component";

const routes: Routes = [
  { path: '', component: MediaSearchComponent },
  { path: 'details/:id', component: MediaDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
