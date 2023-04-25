import { Component } from '@angular/core';
import { LivreService } from '../Livre.service';

import { HttpErrorResponse } from '@angular/common/http';
import { Livre } from '../Livre';
import { Emprunt } from '../Emprunt';
import { EmpruntService } from '../Emprunt.service';
import { EtudiantService } from '../Etudiant.service';
import { Etudiant } from '../Etudiant';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent {
  public Livres!: Livre[];
  public Emprunt:Emprunt=new Emprunt() ;;
  public Etudiant!:Etudiant;
  public dateDebutSelected!:Date;
  public dateFinSelected!:Date;
  constructor(private LivreService:LivreService,
    private EmprutService:EmpruntService,
    private EtudiantService:EtudiantService
    ){}

  ngOnInit(){
    this.getLivre();
  }
  public getLivre():void{
    this.LivreService.getLivre().subscribe(
      (response:Livre[])=>{
        this.Livres=response;
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      }
    )
  }
  public onEmprunter(livre:Livre):void{

  alert("date fin ou début selected:  "+this.dateDebutSelected+"-----"+this.dateFinSelected)

    this.EtudiantService.getEtudiantById("test1@gmail.com").subscribe(
      (response:Etudiant)=>{
        this.Emprunt.etudiant=response;

        //console.log(this.Etudiant);
        //this.Emprunt.etudiant=this.Etudiant; 
        
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      }
    )
    

    this.Emprunt.livre=livre;
    this.Emprunt.dateDebut=this.dateDebutSelected;
    this.Emprunt.dateFin=this.dateFinSelected;
    console.log(this.Emprunt)
    this.EmprutService.addEmprunt(this.Emprunt).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));

  }




}
