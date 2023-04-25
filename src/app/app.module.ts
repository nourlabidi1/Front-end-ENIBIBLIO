import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { BibliothequeComponent } from './bibliotheque/bibliotheque.component';
import { AppRoutingModule } from './app-routing-module';

import { VitrineComponent } from './vitrine/vitrine.component';
import { DetailsComponent } from './details/details.component';
import { FormulaireBibComponent } from './formulaire-bib/formulaire-bib.component';
import { ContactComponent } from './contact/contact.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { CompteComponent } from './compte/compte.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { FormsModule } from '@angular/forms';
import { BibliothequeLivreComponent } from './bibliotheque-livre/bibliotheque-livre.component';
import { AjoutLivreComponent } from './ajout-livre/ajout-livre.component';





@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    HomeComponent,
    ErrorComponent,
    BibliothequeComponent,
    VitrineComponent,
    DetailsComponent,
    FormulaireBibComponent,
    ContactComponent,
    HomeAdminComponent,
    CompteComponent,
    AjoutLivreComponent,
    ReservationComponent,
    EmpruntComponent,
    BibliothequeLivreComponent,

   
   

  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
