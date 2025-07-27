import  useRecipeStore  from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favoritesIds = useRecipeStore(state => state.favorites);

  const favorites = favoritesIds.map(id => recipes.find(recipe => recipe.id ===id)).filter(Boolean);


  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">My Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map(recipe => (
          <div key={recipe.id} className="bg-white shadow p-4 mb-3 rounded">
            <h3 className="text-lg text-black font-bold">{recipe.title}</h3>
            <p className='text-gray-700'>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No favorites added yet.</p>
      )}
    </div>
  );
};
export default FavoritesList;