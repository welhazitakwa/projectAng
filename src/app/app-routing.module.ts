import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ResidencesComponent } from './ResidencesFolder/residences/residences.component';

const routes: Routes = [
  { path: 'Home', component: MainComponent },
  { path: 'Residences', component: ResidencesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
