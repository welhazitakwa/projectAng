import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ResidencesComponent } from './ResidencesFolder/residences/residences.component';
import { ResidenceDetailsComponent } from './ResidencesFolder/residence-details/residence-details.component';
import { AddResidenceComponent } from './ResidencesFolder/add-residence/add-residence.component';
import { AppartementComponent } from './Appartements/appartement/appartement.component';
import { UpdateResidenceComponent } from './ResidencesFolder/update-residence/update-residence.component';

const routes: Routes = [
  { path: 'Home', component: MainComponent },
  { path: 'Residences', component: ResidencesComponent },
  { path: 'residenceD/:id', component: ResidenceDetailsComponent },
  { path: 'update/:id', component: UpdateResidenceComponent },
  { path: '', component: ResidencesComponent },
  { path: 'add', component: AddResidenceComponent },
  { path: 'apartment', component: AppartementComponent },

  // { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
