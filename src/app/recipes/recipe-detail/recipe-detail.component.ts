import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute) { }

  selectedRecipElm: Recipe;


  ngOnInit() {
    this.activatedRoute.params.subscribe(item => {
      this.selectedRecipElm = this.recipeService.getRecipeById(item['id']);
    });
  }
  onaAdToShoppingList() {
    this.recipeService.addToShppingList(this.selectedRecipElm.ingredients);
  }

}
