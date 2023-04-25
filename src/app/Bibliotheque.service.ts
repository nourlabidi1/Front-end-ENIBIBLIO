import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Bibliotheque} from './Bibliotheque'
import { Observable } from 'rxjs';
import { Livre } from './Livre';

@Injectable({
    providedIn:'root'
})
export class BibliothequeService{
    private apiServerUrl='http://localhost:8075/api/bibliotheque';

    constructor(private http: HttpClient) { }

    public getBibliotheques():Observable<Bibliotheque[]>{
        return this.http.get<Bibliotheque[]>(`${this.apiServerUrl}/getBibliotheque`);
    }

    public getBibliothequeById(id: number): Observable<Bibliotheque>{
        return this.http.get<Bibliotheque>(`${this.apiServerUrl}/getBibliotheque/${id}`);
      }

    public getLivreBibliothequeById(id: number): Observable<Livre[]>{
        return this.http.get<Livre[]>(`${this.apiServerUrl}/getLivreBibliotheque/${id}`);
      }

    public addBibliotheque(bibliotheque: Bibliotheque):Observable<Bibliotheque>{
        return this.http.post<Bibliotheque>(`${this.apiServerUrl}/ajouterBibliotheque`,bibliotheque);
    }

    public updateBibliotheque(id: number, bibliotheque: Bibliotheque):Observable<Bibliotheque>{
        return this.http.put<Bibliotheque>(`${this.apiServerUrl}/modifierBibliotheque/${id}`,bibliotheque);
    }

    
    public supprimerBibliotheque(bibliothequeId: number):Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/supprimerBibliotheque/${bibliothequeId}`);
    }
}

