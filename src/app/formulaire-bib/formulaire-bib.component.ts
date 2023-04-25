import { Component } from '@angular/core';
import { Bibliotheque } from '../Bibliotheque';
import { Router } from '@angular/router';
import { BibliothequeService } from '../Bibliotheque.service';
@Component({
  selector: 'app-formulaire-bib',
  templateUrl: './formulaire-bib.component.html',
  styleUrls: ['./formulaire-bib.component.css']
})
export class FormulaireBibComponent {
   bibliotheque:  Bibliotheque=new  Bibliotheque() ;


  constructor(private BibliothequeService:BibliothequeService,private router:Router) { }

   onSubmit(){
    alert("ne5dem")
    
    if(this.bibliotheque.email!==undefined && this.bibliotheque.etablissement!==undefined ){
    this.BibliothequeService.addBibliotheque(this.bibliotheque).subscribe( data =>{
      console.log(data);
    this.router.navigate(["/bibliotheque"])

    },
    error => console.log(error))
    
   }}
}
