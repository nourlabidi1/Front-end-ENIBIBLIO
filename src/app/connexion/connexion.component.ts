import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../Etudiant.service';
import { Etudiant } from '../Etudiant';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environment';
import { AdministrateurService } from '../Administrateur.service';
import { Administrateur } from '../Administrateur';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  etudiant: Etudiant=new Etudiant() ;
  etudiant2: Etudiant=new Etudiant() ;
  administrateur2:Administrateur=new Administrateur();
  label:boolean=false;
  label_mdp:boolean=false;
  msg:String="";
  constructor(private etudiantService: EtudiantService,
    private administrateurService: AdministrateurService,
    private router:Router) { }

  gohome(){    this.router.navigate(["/home"]);}
  
  saveEtudiant(){
  this.etudiantService.getEtudiantById(this.etudiant.email).subscribe(
    (response:Etudiant)=>{
      this.etudiant2=response;
      if (this.etudiant2===null) {

        this.administrateurService.getAdministrateurById(this.etudiant.email).subscribe(
          (response:Administrateur)=>{
            this.administrateur2=response;
            if (this.administrateur2===null) {
              this.label=true;
              this.msg="Le compte n'existe pas !";
              this.router.navigate(["/connexion"]);
              }
              else if ((this.administrateur2.motDePasse===this.etudiant.motDePasse)&& (this.administrateur2.email===this.etudiant.email))
              {
                environment.email=this.administrateur2.email;
                environment.nom=this.administrateur2.nom;
                environment.prenom=this.administrateur2.prenom;
                this.router.navigate(["/home"]);
              } 
              
              else if((this.etudiant2.motDePasse!==this.etudiant.motDePasse)&&(this.etudiant2.email===this.etudiant.email)){
            
                this.label_mdp=true;
                this.msg="Veuillez vérifer le mot de passe !";
                this.router.navigate(["/connexion"]);
              }
          
        
              (error:HttpErrorResponse)=>{
                alert(error.message); }
                      
          })
        }
       

      else if ((this.etudiant2.motDePasse===this.etudiant.motDePasse)&& (this.etudiant2.email===this.etudiant.email))
      {
        environment.email=this.etudiant2.email;
        this.router.navigate(["/home"]);
      } 
      
      else if((this.etudiant2.motDePasse!==this.etudiant.motDePasse)&&(this.etudiant2.email===this.etudiant.email)){
   
        this.label_mdp=true;
        this.msg="Veuillez vérifer le mot de passe !";
        this.router.navigate(["/connexion"]);
      }
  

      (error:HttpErrorResponse)=>{
        alert(error.message); }
      }
    )
  }
  goinscri(){
    this.router.navigate(["/inscription"]);
  }
  onSubmit(){
    this.saveEtudiant();

  }
}
