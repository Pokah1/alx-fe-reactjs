 import DeleteRecipeButton from './DeleteRecipeButton';
 import EditRecipeForm from './EditRecipeForm';
import  useRecipeStore  from './recipeStore';
import { useParams, useNavigate } from 'react-router-dom';

  const RecipeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === Number (id))
    );

    if (!recipe) return <p>Recipe not found</p>;

    return (
      <div>
        <h className="text-2xl font-bold">{recipe.title}</h>
        <p className="mb-4">{recipe.description}</p>
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} onDelete={() => navigate('/')} />
        
      </div>
    );
  };
  export default RecipeDetails;