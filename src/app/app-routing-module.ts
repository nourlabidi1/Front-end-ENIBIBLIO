import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ErrorComponent } from "./error/error.component";
import { BibliothequeComponent } from "./bibliotheque/bibliotheque.component";
import { ConnexionComponent } from "./connexion/connexion.component";
import { InscriptionComponent } from "./inscription/inscription.component";
import {    HomeComponent } from "./home/home.component";

import { VitrineComponent } from "./vitrine/vitrine.component";
import { DetailsComponent } from "./details/details.component";
import { FormulaireBibComponent } from "./formulaire-bib/formulaire-bib.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeAdminComponent } from "./home-admin/home-admin.component";
import { CompteComponent } from "./compte/compte.component";
import { EmpruntComponent } from "./emprunt/emprunt.component";
import { ReservationComponent } from "./reservation/reservation.component";
import { BibliothequeLivreComponent } from "./bibliotheque-livre/bibliotheque-livre.component";
import { AjoutLivreComponent } from "./ajout-livre/ajout-livre.component";
const appRoute: Routes =[
    {path:'',component:VitrineComponent},
    {path:'connexion',component:ConnexionComponent},
    {path:'inscription',component:InscriptionComponent},
    {path:'ajoutLivre',component:AjoutLivreComponent},
    {path:'home',component:HomeComponent},
    {path:'details',component:DetailsComponent},
    {path:'formulaireBib',component:FormulaireBibComponent},
    {path:'details',component:DetailsComponent},
    {path:'formulairebib',component:FormulaireBibComponent},
    {path:'homeAdmin',component:HomeAdminComponent},
    {path:'emprunt',component:EmpruntComponent},
    {path:'reservation',component:ReservationComponent},
    {path:'bibliotheque',component:BibliothequeComponent}, 
    {path:'bibliotheque/livre/:id',component:BibliothequeLivreComponent}, 
  
    {path:'compte',component:CompteComponent},
    {path:'contact',component:ContactComponent},
    {path:'**',component:ErrorComponent}
]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoute) 
    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule{

}