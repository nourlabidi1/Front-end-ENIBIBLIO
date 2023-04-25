import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from '../Etudiant';
import { EtudiantService } from '../Etudiant.service';
import { Administrateur } from '../Administrateur';
import { AdministrateurService } from '../Administrateur.service';
import { LivreService } from '../Livre.service';
import { Livre } from '../Livre';

@Component({
  selector: 'app-ajout-livre',
  templateUrl: './ajout-livre.component.html',
  styleUrls: ['./ajout-livre.component.css']
})
export class AjoutLivreComponent {
  
  ajouterLivre(){
    console.log(this.livre);
    this.LivreService.addLivre(this.livre).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
    this.router.navigate(["/homeAdmin"])
  }

  livre: Livre=new Livre() ;
  


  constructor(private LivreService: LivreService,private administrateurService:AdministrateurService,private router:Router) { }

  ngOnInit(): void {
    
    
  }
  
  onSubmit(){

  }

}