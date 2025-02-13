import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ResidencesComponent } from './ResidencesFolder/residences/residences.component';
import { ResidenceDetailsComponent } from './ResidencesFolder/residence-details/residence-details.component';
import { AddResidenceComponent } from './ResidencesFolder/add-residence/add-residence.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ResidencesComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
