import { Component, OnInit } from '@angular/core';
import { Bibliotheque } from './Bibliotheque';
import { BibliothequeService } from './Bibliotheque.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  environment=environment;
  title = 'EniBiblio_Front';
  public bibliotheques!: Bibliotheque[];
  
  constructor(private bibliothequeService:BibliothequeService,private router:Router){}

  ngOnInit(){
    this.getBibliotheques();


  }

  
  public getBibliotheques():void{
    this.bibliothequeService.getBibliotheques().subscribe(
      (response:Bibliotheque[])=>{
        this.bibliotheques=response;
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      }
    )
  }

  
  isHomePage(){ return(( this.router.url === '/home') ||( this.router.url === '/homeAdmin'));}

  isHomePageadmin(){return  this.router.url === '/homeAdmin';}


  
  isHomePageuser(){return  (this.router.url === '/home')

}

isajouter(){return  (this.router.url === '/ajoutLivre')

}

isuserpage(){return (( this.router.url === '/compte')
 ||( this.router.url === '/bibliotheque'))
 ||(this.router.url==='/emprunt')
 ||(this.router.url==='/reservation')
 ||(this.router.url.includes('bibliotheque/livre'))
 ;}





goinscri(){

  this.router.navigate(["/inscription"]);

}
  
  goconnexion(){
    this.router.navigate(["/connexion"]);
  }
  goemprunt(){
    this.router.navigate(["/emprunt"]);
  }
  goreservation(){
    this.router.navigate(["/reservation"]);
  }
  godescription(){
    this.router.navigate(["/details"]);
  }
  gocontact(){
    this.router.navigate(["contact"]);
  }
  goacceuil(){
    this.router.navigate([""]);
  }
  gobibliotheques(){
    this.router.navigate(["/home"]);
  }
  gobibliotheque(){
    this.router.navigate(["/bibliotheque"]);
  }
  gocompte(){this.router.navigate(["/compte"]);}
  goajoutlivre(){this.router.navigate(["/ajoutLivre"]);}


}
