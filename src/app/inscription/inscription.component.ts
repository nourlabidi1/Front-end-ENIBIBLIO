import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from '../Etudiant';
import { EtudiantService } from '../Etudiant.service';
import { Administrateur } from '../Administrateur';
import { AdministrateurService } from '../Administrateur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  
  gologin(){
    this.router.navigate(["/connexion"]);
  }

  add(){}

  etudiant: Etudiant=new Etudiant() ;
  administrateur: Etudiant=new Etudiant();
 label:boolean=false;
  type!:String;

  constructor(private etudiantService: EtudiantService,private administrateurService:AdministrateurService,private router:Router) { }

  ngOnInit(): void {
    
    
  }

  saveEtudiant(){
 if (this.type=="etudiant"){
    this.etudiantService.addEtudiant(this.etudiant).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));}
    else { 
      this.administrateur.email=this.etudiant.email;
      this.administrateur.motDePasse=this.etudiant.motDePasse;
      this.administrateur.nom=this.etudiant.nom;
      this.administrateur.prenom=this.etudiant.prenom;
      
      
      
      this.administrateurService.addAdministrateur(this.administrateur).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));}
  }
  
  onSubmit(){
    alert("houni alert type  "+this.type)
    console.log(this.etudiant);
    this.saveEtudiant();
    this.label=true;
    this.router.navigate(["/inscription"])
  }

}
