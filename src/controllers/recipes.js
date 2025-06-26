import { getAllRecipes } from "../services/recipes.js";

export const getAllRecipesController = async (req, res) => {
    const recipes = await getAllRecipes();

    res.status(200).json({
        "status": 200,
        "message": "Successfully found recipes!",
        "data": recipes,
    });
};
