import { useEffect } from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";


  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.filteredRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);

    useEffect(() => {
      filterRecipes();
    }, [searchTerm, filterRecipes]);

    return (
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Recipes </h2>
        {recipes.length === 0
 ? ( <p>No recipes found.</p>)  :      
        recipes.map(recipe => (
          <div key={recipe.id} className="border p-4 mb-4 rounded">
            
            <h3 className="text-xl font-bold">
              <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
              {recipe.title}
              </Link>
              </h3>
            <p>{recipe.description}</p>
            
          </div>
        ))}
      </div>
    );
  };
  export default RecipeList;