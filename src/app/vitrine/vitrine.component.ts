import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Bibliotheque } from '../Bibliotheque';
import { BibliothequeService } from '../Bibliotheque.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.css']
})
export class VitrineComponent {
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
  godescription(){
    this.router.navigate(["/details"]);
  }
}
