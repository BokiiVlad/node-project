import { RecipesCollection } from "../db/models/recipe.js";

export const getAllRecipes = async () => {
    const recipes = await RecipesCollection.find();

    return {
        data: recipes,
    };
};

export const createRecipes = async (payload) => {
    const recipe = await RecipesCollection.create(payload);
    return recipe;
};
