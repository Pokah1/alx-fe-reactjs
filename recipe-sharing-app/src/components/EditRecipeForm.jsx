import { useState } from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ ...recipe, title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="block mb-2 p-2 border"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="block mb p2 border"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Update Recipe
      </button>
    </form>
  );
};

export default EditRecipeForm;
