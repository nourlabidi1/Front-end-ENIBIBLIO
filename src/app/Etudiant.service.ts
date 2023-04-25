import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Etudiant} from './Etudiant'
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class EtudiantService{
    private apiServerUrl='http://localhost:8075/api/Etudiant';

    constructor(private http: HttpClient) { }

    public getEtudiant():Observable<Etudiant[]>{
        return this.http.get<Etudiant[]>(`${this.apiServerUrl}/getEtudiant`);
    }

    public getEtudiantById(id: String): Observable<Etudiant>{
        return this.http.get<Etudiant>(`${this.apiServerUrl}/getEtudiant/${id}`);
      }

    public addEtudiant(etudiant: Etudiant):Observable<Etudiant>{
        return this.http.post<Etudiant>(`${this.apiServerUrl}/ajouterEtudiant`,etudiant);
    }

    public updateEtudiant(id: String, etudiant: Etudiant):Observable<Etudiant>{
        return this.http.put<Etudiant>(`${this.apiServerUrl}/modifierEtudiant/${id}`,etudiant);
    }

    
    public supprimerEtudiant(etudiantId: String):Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/supprimerEtudiant/${etudiantId}`);
    }
}

