import useRecipeStore from "./recipeStore";


const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  

  const handleDelete = () => {
    deleteRecipe(recipeId);
    alert('Recipe deleted successfully');
    if (onDelete) onDelete();
  };

  return (
    <button
      className="bg-red-500 text-white px-4 py-2 mt-2"
      onClick={handleDelete}
    >
      Delete Recipe;
    </button>
  )
};

export default DeleteRecipeButton;
