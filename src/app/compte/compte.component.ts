import { Component } from '@angular/core';
import { environment } from 'environment';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent {
  public environment:any;
  ngOnInit(){
    this.environment=environment;
   //alert("compte")
   // alert(environment.email);
   

  }

}
