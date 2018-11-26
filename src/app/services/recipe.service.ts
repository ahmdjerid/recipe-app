import { Injectable, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {



  @Output() recipeDetailEvent = new EventEmitter<Recipe>();
  constructor(private shoppingService: ShoppingService) {

  }

  private ingredients = [new Ingredient('eggs', 2), new Ingredient('cheese', 3)];


  recipes: Recipe[] = [new Recipe(
    'cheescake',
    'Le cheesecake est un gâteau au fromage ',
    'https://d3rrv21q7fx9b0.cloudfront.net/m/633ba7d8157e391c/TH04_470x470-TH04_cheesecake-aux-pommes-et-carre-frais.jpg'
    , this.ingredients),
  new Recipe('Millefeuilles', 'Le millefeuille est un gateau délicieu '
    , 'https://2.bp.blogspot.com/-lqcyk3RJkSw/WIPGE3ta2gI/AAAAAAAAWLk/8LqWxdgtKTcyq4-cKcalsQyAX-7B2uI1ACLcB/s1600/mille-feuilles-maison.jpg',
    this.ingredients)
  ];

  selectRecipe(recipe: Recipe): void {
    this.recipeDetailEvent.emit(recipe);
  }

  addToShppingList(ingredients: [Ingredient]): void {
    ingredients.forEach(ingredient => this.shoppingService.addIngredient(ingredient));
  }

}
