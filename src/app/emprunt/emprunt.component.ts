import { Component } from '@angular/core';
import { Emprunt } from '../Emprunt';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmpruntService } from '../Emprunt.service';
import { environment } from 'environment';
@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.css']
})
export class EmpruntComponent {
  emprunts!:Emprunt[]

  constructor(private EmpruntService:EmpruntService,private router:Router){}

  ngOnInit(){
    
    this.getEmprunt();
    //alert("ici home")
    //alert(environment.email)
  }
  public getEmprunt():void{
    this.EmpruntService.getEmpruntEtudiant(environment.email).subscribe(
      (response:Emprunt[])=>{
        this.emprunts=response;
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      }
    )
  }

}
