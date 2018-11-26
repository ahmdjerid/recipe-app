import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[] = [new Recipe('cheescake', 'Le cheesecake est un gâteau au fromage '
    , 'https://d3rrv21q7fx9b0.cloudfront.net/m/633ba7d8157e391c/TH04_470x470-TH04_cheesecake-aux-pommes-et-carre-frais.jpg'),
  new Recipe('Millefeuilles', 'Le millefeuille est un gateau délicieu '
    , 'https://2.bp.blogspot.com/-lqcyk3RJkSw/WIPGE3ta2gI/AAAAAAAAWLk/8LqWxdgtKTcyq4-cKcalsQyAX-7B2uI1ACLcB/s1600/mille-feuilles-maison.jpg')
  ];
  constructor() { }
}
