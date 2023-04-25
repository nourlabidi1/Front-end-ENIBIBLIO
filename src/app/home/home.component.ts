import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BibliothequeService } from '../Bibliotheque.service';
import { Bibliotheque } from '../Bibliotheque';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public bibliotheques!: Bibliotheque[];
  
  constructor(private bibliothequeService:BibliothequeService,private router:Router){}

  ngOnInit(){
    this.getBibliotheques();
    //alert("ici home")
    //alert(environment.email)
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

  reserverChaise(){
    alert("btn reserver marche")
}
  consulterLivres(id :number){
    var route:String="/bibliotheque/livre/"+id;
    this.router.navigate([route]);
  }
  
  }





