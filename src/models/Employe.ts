// models/Employe.js
// Importez les modules nécessaires
import mongoose, { Schema, Document } from 'mongoose';

// Schéma pour l'employé
const EmployeSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true }
});

// Modèle pour l'employé:Interface pour typer les documents Employe
export interface EmployeModel extends Document {
    nom: string;
    prenom: string;
}
export interface IEmployeModel extends IEmploye, Document {}

// Modèle Employe
export default mongoose.model<IEmployeModel>('Employe', EmployeSchema);
