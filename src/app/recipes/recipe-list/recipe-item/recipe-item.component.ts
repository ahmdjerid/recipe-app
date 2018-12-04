import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  @Input() recipe: Recipe;

  @Input() id: number;
  ngOnInit() {
  }

  selectRecipe(recipe) {
    console.log(this.id);
    this.recipeService.selectRecipe(recipe);
  }
}
