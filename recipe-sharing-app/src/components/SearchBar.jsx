import React from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
    const searTerm = useRecipeStore(state => state.searchTerm);

    return(
        <input
            type="text"
            value={searTerm}
            placeholder="Search recipes..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block mb-4 p-2 border rounded w-full"
        />
    )
}
export default SearchBar;