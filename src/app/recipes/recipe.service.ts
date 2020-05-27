import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'A tasty schnitzel', 
      'Schnitzel has never been this good', 
      'https://st.depositphotos.com/1003814/3360/i/450/depositphotos_33608355-stock-photo-pork-chop-french-fries-and.jpg',
      [
        new Ingredient('Veal schnitzel', 2),
        new Ingredient('Egg', 1),
        new Ingredient('Paneermeel', 1),
        new Ingredient('French Fries', 20),
        new Ingredient('Flour', 1),
        new Ingredient('Lemon', 0.5)
      ]
    ),
    new Recipe(
      'Chicken Parmesan', 
      'Juicy chicken with a crispy skin', 
      'https://thecozyapron.com/wp-content/uploads/2019/03/chicken-parmesan_thecozyapron_1.jpg',
      [
        new Ingredient('Chicken breast', 2),
        new Ingredient('Egg', 2),
        new Ingredient('Flour', 2),
        new Ingredient('Parmesan cheese', 1),
        new Ingredient('Mozerella cheese', 1),
        new Ingredient('Spaghetti', 1)
      ]
      )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}