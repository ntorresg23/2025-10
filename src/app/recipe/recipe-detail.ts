import { Recipe } from "./Recipe";
import { Ingredient } from "../ingredient/Ingredient";

export class RecipeDetail extends Recipe {
    
    constructor(
        id: number,
        nombre: string,
        porciones: number,
        pasos: string[],
        tiempo_minutos: number,
        dificultad: string,
        tipo: string,
        imagen: string,
        etiquetas: string[],
        ingredientes: Ingredient[]){

            super(id, nombre, porciones, pasos, tiempo_minutos, dificultad, tipo, imagen, etiquetas, ingredientes);

        }

}