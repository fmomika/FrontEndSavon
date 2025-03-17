import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../app/models/ingredient';


@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private apiUrl = 'http://172.17.216.4:8080/api-savon/v1';

  constructor(private http: HttpClient) {}

    /**
    * Récupère tous les ingrédients depuis l'API.
    * @returns Un Observable contenant la liste des ingrédients.
    */
  getAllIngredients(): Observable<Ingredient[]> {
      return this.http.get<Ingredient[]>(`${this.apiUrl}/ingredient`);
  }
  postIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(`${this.apiUrl}/ingredient`, ingredient)
  }


}