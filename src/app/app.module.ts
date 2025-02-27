import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponent } from './ResidencesFolder/residences/residences.component';
import { ResidenceDetailsComponent } from './ResidencesFolder/residence-details/residence-details.component';
import { AddResidenceComponent } from './ResidencesFolder/add-residence/add-residence.component';
import { AppartementComponent } from './Appartements/appartement/appartement.component';
import { ApartmentsByResidenceComponent } from './Appartements/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './Appartements/add-apartment/add-apartment.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ResidencesComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    AppartementComponent,
    ApartmentsByResidenceComponent,
    AddApartmentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
