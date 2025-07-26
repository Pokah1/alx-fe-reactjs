import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = (event) => {
    event.preventDefault();
    deleteRecipe(recipeId);
    alert('Recipe deleted successfully');
    if (onDelete) onDelete();
    navigate('/');
  };
  

  return (
    <button
      className="bg-red-500 text-white px-4 py-2 mt-2"
      onClick={handleDelete}
    >
      Delete Recipe
    </button>
  )
};

export default DeleteRecipeButton;
