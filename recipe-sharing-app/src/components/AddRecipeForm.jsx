import useRecipeStore from "./recipeStore";
import { useState } from 'react';

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      addRecipe({ id: Date.now(), title, description });
      setTitle('');
      setDescription('');
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="block mb-2 p-2 border rounded-2xl"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="block mb-2 p-2 border`"
          rows="4"
          cols="50"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Add Recipe
        </button>
      </form>
    );
  };

  export default AddRecipeForm;