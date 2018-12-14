import { RecipeService } from './../../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-editrecipe',
  templateUrl: './editrecipe.component.html',
  styleUrls: ['./editrecipe.component.css']
})
export class EditrecipeComponent implements OnInit {
  id: number;
  editMode: boolean;
  editedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute
    , private recipeService: RecipeService) {
    this.activatedRoute.params.subscribe(item => {
      this.id = item['id'];
      this.editMode = item['id'] != null;
      console.log(this.editMode);
    });

  }

  ngOnInit() {
    if (this.editMode) {
      const idRecipe = this.activatedRoute.snapshot.params['id'];
      this.editedRecipe = this.recipeService.getRecipeById(idRecipe);
      console.log(this.editedRecipe);
    }
  }

}
