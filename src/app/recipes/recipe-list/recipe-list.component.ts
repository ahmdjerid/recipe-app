import { Component, OnInit, EventEmitter, Output, } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipHoldedEvent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [new Recipe('cheescake', 'Le cheesecake est un gâteau au fromage '
    , 'https://d3rrv21q7fx9b0.cloudfront.net/m/633ba7d8157e391c/TH04_470x470-TH04_cheesecake-aux-pommes-et-carre-frais.jpg'),
  new Recipe('Millefeuilles', 'Le millefeuille est un gateau délicieu '
    , 'https://2.bp.blogspot.com/-lqcyk3RJkSw/WIPGE3ta2gI/AAAAAAAAWLk/8LqWxdgtKTcyq4-cKcalsQyAX-7B2uI1ACLcB/s1600/mille-feuilles-maison.jpg')
  ];

  constructor() {

  }
  ngOnInit() {
  }

  holdRecipe(recipe) {
    this.recipHoldedEvent.emit(recipe);
  }
}
