import { Etudiant } from "./Etudiant";
import { Livre } from "./Livre";

export class Emprunt{
    
    id!: number;
    livre!:Livre;
    etudiant!: Etudiant;
    dateDebut!: Date;
    dateFin!: Date;

}