import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Input } from '@angular/compiler/src/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {



  @Output() addIngredientEvent = new EventEmitter<Ingredient>();

  @ViewChild("inputName") ingredientName;

  @ViewChild("inputAmount") ingredientAmount;


  newIngredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }
  saveIngredient() {
    this.newIngredient = new Ingredient(this.ingredientName.nativeElement.value, Number(this.ingredientAmount.nativeElement.value));
    this.addIngredientEvent.emit(this.newIngredient);
  }
}
