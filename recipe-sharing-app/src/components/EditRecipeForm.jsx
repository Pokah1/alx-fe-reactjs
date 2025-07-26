import { useState } from "react";
import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ ...recipe, title, description });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="block mb-2 p-2 border rounded-2xl"
      />

      <textarea
        
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        className="block mb-2 p-2 border`"
          rows="4"
          cols="50"
      />

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Update Recipe
      </button>
    </form>
  );
};

export default EditRecipeForm;
