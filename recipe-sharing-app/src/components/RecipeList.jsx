import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";


  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        {recipes.map(recipe => (
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