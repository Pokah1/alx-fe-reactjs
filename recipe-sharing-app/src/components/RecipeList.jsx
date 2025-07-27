import { useEffect } from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";


  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.filteredRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);

    const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  const generateRecommendations = useRecipeStore(state => state.generatedRecommendations)

    useEffect(() => {
      filterRecipes();
    }, [searchTerm, filterRecipes]);

      const isFavorite = (id) => favorites.includes(id);

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

            {/*  */}
             <button
              onClick={() => {
                if (isFavorite(recipe.id)) {
                  removeFavorite(recipe.id);
                } else {
                  addFavorite(recipe.id);
                }
                generateRecommendations();
              }}
              className={`mt-2 px-3 py-1 rounded ${
                isFavorite(recipe.id)
                  ? "bg-red-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {isFavorite(recipe.id) ? "Remove Favorite" : "Add to Favorites"}
            </button>
          </div>
        ))}
      </div>
    );
  };
  export default RecipeList;