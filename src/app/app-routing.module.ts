import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ResidencesComponent } from './ResidencesFolder/residences/residences.component';
import { ResidenceDetailsComponent } from './ResidencesFolder/residence-details/residence-details.component';

const routes: Routes = [
  { path: 'Home', component: MainComponent },
  { path: 'Residences', component: ResidencesComponent },
  { path: 'residenceD/:param', component: ResidenceDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
