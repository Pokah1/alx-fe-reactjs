import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Validation logic
  const validate = () => {
    let newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split("\n").length < 2) {
      newErrors.ingredients = "Please enter at least two ingredients.";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"),
      image: "https://via.placeholder.com/300x200", // default image
      summary: steps.split("\n")[0] || "No summary provided.",
    };

    onAddRecipe(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Add New Recipe</h2>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Recipe Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title}</p>
        )}
      </div>

      {/* Ingredients */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Ingredients (one per line)
        </label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows="4"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}
      </div>

      {/* Steps */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Preparation Steps (one per line)
        </label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          rows="4"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.steps && (
          <p className="text-red-500 text-sm">{errors.steps}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
