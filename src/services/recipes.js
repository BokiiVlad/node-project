import { RecipesCollection } from "../db/models/recipe.js";

export const getAllRecipes = async () => {
    const recipes = RecipesCollection.find();

    return {
        data: recipes,
    };
};
