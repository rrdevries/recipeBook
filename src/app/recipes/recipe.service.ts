import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'A tasty schnitzel', 
      'Schnitzel has never been this good', 
      'https://img.taste.com.au/62w0bkp3/w720-h480-cfill-q80/taste/2018/02/mar-18_creamy-fettuccine-with-chicken-3000x2000-135690-1.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Lemon', 1),
        new Ingredient('Egg', 2),
        new Ingredient('French Fries', 20),
      ]
    ),
    new Recipe(
      'Chicker Parmezan', 
      'Juicy chicken with a crispy skin', 
      'https://img.taste.com.au/62w0bkp3/w720-h480-cfill-q80/taste/2018/02/mar-18_creamy-fettuccine-with-chicken-3000x2000-135690-1.jpg',
      [
         new Ingredient('Chicken', 1),
         new Ingredient('Parmezan cheese', 1),
          new Ingredient('Milk', 2),
      ]
      )
  ];

  getRecipe() {
    return this.recipes.slice();
  }



}