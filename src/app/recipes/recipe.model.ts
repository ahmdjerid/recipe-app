import { Ingredient } from "../shared/ingredient.model";

export class Recipe {

    name: string;
    description: string;
    urlImage: string;
    ingredients: [Ingredient];

    constructor(name, description, urlImage, ingredients) {
        this.name = name;
        this.description = description;
        this.urlImage = urlImage;
        this.ingredients = ingredients;
    }
}
