import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Administrateur} from './Administrateur'
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class AdministrateurService{
    private apiServerUrl='http://localhost:8075/api/administrateur';

    constructor(private http: HttpClient) { }

    public getAdministrateur():Observable<Administrateur[]>{
        return this.http.get<Administrateur[]>(`${this.apiServerUrl}/getAdministrateur`);
    }

    public getAdministrateurById(id: String): Observable<Administrateur>{
        return this.http.get<Administrateur>(`${this.apiServerUrl}/getAdministrateur/${id}`);
      }

    public addAdministrateur(administrateur: Administrateur):Observable<Administrateur>{
        return this.http.post<Administrateur>(`${this.apiServerUrl}/ajouterAdministrateur`,administrateur);
    }

    public updateAdministrateur(id: String, administrateur: Administrateur):Observable<Administrateur>{
        return this.http.put<Administrateur>(`${this.apiServerUrl}/modifierAdministrateur/${id}`,administrateur);
    }

    
    public supprimerAdministrateur(administrateurId: String):Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/supprimerAdministrateur/${administrateurId}`);
    }
}

