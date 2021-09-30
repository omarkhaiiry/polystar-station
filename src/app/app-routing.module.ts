import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TramComponent } from './tram/tram.component';
import { PlaceComponent } from './place/place.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trams', component: TramComponent },
  { path: 'places', component: PlaceComponent },
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
