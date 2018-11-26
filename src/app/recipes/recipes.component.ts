import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {


  selectedRecipe: Recipe = new Recipe('', '', '', '');
  constructor() { }

  ngOnInit() {

  }
  catchRecipe(recipe: Recipe) {
    this.selectedRecipe = new Recipe(recipe.name, recipe.description, recipe.urlImage, recipe.ingredients);
  }

}
