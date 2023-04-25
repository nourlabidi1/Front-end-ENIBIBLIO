import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Emprunt} from './Emprunt'
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class EmpruntService{
    private apiServerUrl='http://localhost:8075/api/Emprunt';

    constructor(private http: HttpClient) { }

    public getEmprunt():Observable<Emprunt[]>{
        return this.http.get<Emprunt[]>(`${this.apiServerUrl}/getEmprunt`);
    }

    public getEmpruntById(id: String): Observable<Emprunt>{
        return this.http.get<Emprunt>(`${this.apiServerUrl}/getEmprunt/${id}`);
      }

    public getEmpruntEtudiant(id: String): Observable<Emprunt[]>{
    return this.http.get<Emprunt[]>(`${this.apiServerUrl}/getEmprunt/Etudiant/${id}`);
    }

    public addEmprunt(Emprunt: Emprunt):Observable<Emprunt>{
        console.log("fi wost el service",Emprunt);
        return this.http.post<Emprunt>(`${this.apiServerUrl}/ajouterEmprunt`,Emprunt);
    }

    public updateEmprunt(id: String, Emprunt: Emprunt):Observable<Emprunt>{
        return this.http.put<Emprunt>(`${this.apiServerUrl}/modifierEmprunt/${id}`,Emprunt);
    }

    
    public supprimerEmprunt(EmpruntId: String):Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/supprimerEmprunt/${EmpruntId}`);
    }
}

