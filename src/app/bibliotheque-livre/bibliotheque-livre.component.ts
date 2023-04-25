import { Component } from '@angular/core';
import { LivreService } from '../Livre.service';
import { environment } from 'environment';
import { HttpErrorResponse } from '@angular/common/http';
import { Livre } from '../Livre';
import { Emprunt } from '../Emprunt';
import { EmpruntService } from '../Emprunt.service';
import { EtudiantService } from '../Etudiant.service';
import { BibliothequeService } from '../Bibliotheque.service';
import { Etudiant } from '../Etudiant';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-bibliotheque-livre',
  templateUrl: './bibliotheque-livre.component.html',
  styleUrls: ['./bibliotheque-livre.component.css']
})
export class BibliothequeLivreComponent {

  public Livres!: Livre[];
  public Emprunt:Emprunt=new Emprunt() ;;
  public Etudiant!:Etudiant;
  public dateDebutSelected!:Date;
  public dateFinSelected!:Date;

  constructor(private LivreService:LivreService,
    private EmprutService:EmpruntService,
    private BibliothequeService:BibliothequeService,
    private EtudiantService:EtudiantService,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ){}
   
    
  ngOnInit(){
    var id_bibliotheque:number=+this.activatedRoute.snapshot.paramMap.get('id')!;

    this.getLivre(id_bibliotheque);
    
  }
  public getLivre(id:number):void{
    this.BibliothequeService.getLivreBibliothequeById(id).subscribe(
      (response:Livre[])=>{
        this.Livres=response;
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      }
    )
  }

  public onEmprunter(livre:Livre,DateDebut:string,DateFin:string):void{

  alert("date fin ou début selected:  "+DateDebut+"-----"+DateFin +environment.email)
    this.EtudiantService.getEtudiantById(environment.email).subscribe(
      (response:Etudiant)=>{
        this.Emprunt.etudiant=response;

        this.Emprunt.livre=livre;
        this.Emprunt.dateDebut=new Date(DateDebut);
        this.Emprunt.dateFin=new Date(DateFin);
        console.log(this.Emprunt)
        this.EmprutService.addEmprunt(this.Emprunt).subscribe( data =>{
          console.log(data);
        },
        error => console.log(error));
        
        this.router.navigate(["/emprunt"]);
        //console.log(this.Etudiant);
        //this.Emprunt.etudiant=this.Etudiant;

        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      }
    )
    



  }



}
