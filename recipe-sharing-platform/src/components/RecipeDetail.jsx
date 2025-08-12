import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRecipeDetail = async () => {
      try {
        setLoading(true);
        
        // Find the recipe with the matching ID
        const foundRecipe = recipeData.find(recipe => recipe.id === parseInt(id));
        
        if (!foundRecipe) {
          setError('Recipe not found');
          return;
        }
        
        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setRecipe(foundRecipe);
        
      } catch (err) {
        setError('Failed to load recipe details');
        console.error('Error loading recipe:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadRecipeDetail();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading recipe details...</p>
        </div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">🍽️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recipe Not Found</h2>
          <p className="text-gray-600 mb-6">{error || 'The recipe you are looking for does not exist.'}</p>
          <Link 
            to="/" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          >
            ← Back to Recipes
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            {/* Recipe Image */}
            <div className="md:w-1/2">
              <div className="md:w-1/2">
  {recipe.image && (
    <img
      src={recipe.image}
      alt={recipe.title}
      className="w-full h-full object-cover"
    />
  )}
</div>
            </div>
            
            {/* Recipe Header Info */}
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {recipe.title}
              </h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {recipe.summary}
              </p>
              
              {/* Recipe Meta Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {recipe.prepTime && (
                  <div className="flex items-center text-gray-700">
                    <div className="w-5 h-5 mr-2 text-blue-600">⏰</div>
                    <div>
                      <p className="text-sm text-gray-500">Prep Time</p>
                      <p className="font-semibold">{recipe.prepTime}</p>
                    </div>
                  </div>
                )}
                
                {recipe.cookTime && (
                  <div className="flex items-center text-gray-700">
                    <div className="w-5 h-5 mr-2 text-blue-600">👨‍🍳</div>
                    <div>
                      <p className="text-sm text-gray-500">Cook Time</p>
                      <p className="font-semibold">{recipe.cookTime}</p>
                    </div>
                  </div>
                )}
                
                {recipe.servings && (
                  <div className="flex items-center text-gray-700">
                    <div className="w-5 h-5 mr-2 text-blue-600">👥</div>
                    <div>
                      <p className="text-sm text-gray-500">Servings</p>
                      <p className="font-semibold">{recipe.servings}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ingredients Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  📝
                </span>
                Ingredients
              </h2>
              
              {recipe.ingredients && recipe.ingredients.length > 0 ? (
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">No ingredients listed for this recipe yet.</p>
              )}
            </div>
          </div>

          {/* Instructions Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  👨‍🍳
                </span>
                Instructions
              </h2>
              
              {recipe.instructions && recipe.instructions.length > 0 ? (
                <ol className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed">{instruction}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-gray-500 italic">No cooking instructions available for this recipe yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="mt-12 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            ← Explore More Recipes
          </Link>
        </div>
      </main>
    </div>
  );
};

export default RecipeDetail;