import { element } from 'protractor';
import { Component, OnInit, EventEmitter, Output, ElementRef, Injectable, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipHoldedEvent = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private router: Router, private recipeService: RecipeService,
    private route: Router,
    private activatedRoute: ActivatedRoute) {
    this.recipes = recipeService.recipes;
  }
  ngOnInit() {
  }

  createRecipe() {
    console.log('add new recipe');
    this.route.navigate(['new'], { relativeTo: this.activatedRoute });
  }
}
