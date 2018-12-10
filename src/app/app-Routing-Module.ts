import { StartRecipeComponent } from './recipes/start-recipe/start-recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { NgModule, Component } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { EditrecipeComponent } from './recipes/editrecipe/editrecipe.component';


const routes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: StartRecipeComponent },
            { path: 'new', component: EditrecipeComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: EditrecipeComponent }
        ]
    },
    { path: 'shoppings', component: ShoppingListComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

