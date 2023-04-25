import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Livre} from './Livre'
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class LivreService{
    private apiServerUrl='http://localhost:8075/api/Livre';

    constructor(private http: HttpClient) { }

    public getLivre():Observable<Livre[]>{
        return this.http.get<Livre[]>(`${this.apiServerUrl}/getLivre`);
    }

    public getLivreById(id: number): Observable<Livre>{
        return this.http.get<Livre>(`${this.apiServerUrl}/getLivre/${id}`);
      }

    public addLivre(Livre: Livre):Observable<Livre>{
        return this.http.post<Livre>(`${this.apiServerUrl}/ajouterLivre`,Livre);
    }

    public updateLivre(id: number, Livre: Livre):Observable<Livre>{
        return this.http.put<Livre>(`${this.apiServerUrl}/modifierLivre/${id}`,Livre);
    }

    
    public supprimerLivre(livreId: number):Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/supprimerLivre/${livreId}`);
    }
}

