import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { RecipeDetail } from './recipe-detail';
import { Recipe } from './Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<RecipeDetail[]> {
    return this.http.get<RecipeDetail[]>(this.apiUrl + "recipe.json");
  }

  getRecipe(id: string): Observable<RecipeDetail> {
    return this.http.get<RecipeDetail>(this.apiUrl + "1/recipe.json/" + id)
  }

}
