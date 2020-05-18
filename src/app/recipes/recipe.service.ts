import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://img.taste.com.au/62w0bkp3/w720-h480-cfill-q80/taste/2018/02/mar-18_creamy-fettuccine-with-chicken-3000x2000-135690-1.jpg'),
    new Recipe('A test Recipe', 'This is simply a test', 'https://img.taste.com.au/62w0bkp3/w720-h480-cfill-q80/taste/2018/02/mar-18_creamy-fettuccine-with-chicken-3000x2000-135690-1.jpg')
  ];

  getRecipe() {
    return this.recipes.slice();
  }



}