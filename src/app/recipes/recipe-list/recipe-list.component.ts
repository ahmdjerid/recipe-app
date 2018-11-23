import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {



  recipes: Recipe[] = [new Recipe('cheescake', 'Le cheesecake est un gâteau au fromage '
    , 'https://d3rrv21q7fx9b0.cloudfront.net/m/633ba7d8157e391c/TH04_470x470-TH04_cheesecake-aux-pommes-et-carre-frais.jpg'),
  new Recipe('cheescake', 'Le cheesecake est un gâteau au fromage '
    , 'https://d3rrv21q7fx9b0.cloudfront.net/m/633ba7d8157e391c/TH04_470x470-TH04_cheesecake-aux-pommes-et-carre-frais.jpg')
  ];

  constructor() {

  }
  ngOnInit() {
  }

}
