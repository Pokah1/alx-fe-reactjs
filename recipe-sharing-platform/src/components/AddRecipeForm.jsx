import { useState } from "react";

export default function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.slice(0, 100) + "...", // short preview
      image: "https://via.placeholder.com/400x300.png?text=New+Recipe",
      ingredients: ingredients.split("\n"),
      instructions: steps.split("\n"),
    };

    onAddRecipe(newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Add a New Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        className="w-full border rounded-lg p-2"
        required
      />
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (one per line)"
        className="w-full border rounded-lg p-2"
        required
      />
      <textarea
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        placeholder="Preparation steps (one per line)"
        className="w-full border rounded-lg p-2"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
      >
        Submit Recipe
      </button>
    </form>
  );
}
