import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Favorite some recipes!</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} className="border p-4 mb-2 rounded bg-yellow-100">
            <h3 className="font-semibold text-lg text-black">{recipe.title}</h3>
            <p className="text-gray-700">{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
