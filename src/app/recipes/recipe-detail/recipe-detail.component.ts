import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  selectedRecipElm: Recipe;

  ngOnInit() {
    this.recipeService.recipeDetailEvent.
      subscribe((recipe: Recipe) =>
        this.selectedRecipElm = recipe
      );
  }
  onaAdToShoppingList() {
    console.log(this.selectedRecipElm.ingredients);
    this.recipeService.addToShppingList(this.selectedRecipElm.ingredients);
  }

}
