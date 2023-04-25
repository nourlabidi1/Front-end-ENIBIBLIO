import { Component } from '@angular/core';
import { Livre } from '../Livre';
import { HttpErrorResponse } from '@angular/common/http';
import { LivreService } from '../Livre.service';
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
  public Livres!: Livre[];
  
  constructor(private LivreService:LivreService){}

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
}
