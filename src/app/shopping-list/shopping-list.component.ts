import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  @ViewChild(ShoppingEditComponent)
  private shoppingEditComponent: ShoppingEditComponent;

  ingredients: Ingredient[] = [new Ingredient('Apples', 2),
  new Ingredient('Cheese', 5)
  ];
  constructor() { }

  ngOnInit() {
  }


  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

  }

  private getNewIngrdient(): Ingredient { return this.shoppingEditComponent.newIngredient; }
}
