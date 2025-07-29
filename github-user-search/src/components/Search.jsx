import { useState } from "react";
import fetchUserData from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    setError(null); // Reset error state
    setUserData(null); // Reset user data state
    setLoading(true); // Set loading state to true

    try {
      const data = await fetchUserData(query);
      setUserData(data);
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
        <p>Search for a GitHub user</p>
      </form>

      {/* Conditional rendering */}
      {loading && <p>Loading...</p>}
      {error && (
        <p className="text-red-500">Looks like we can't find the user.</p>
      )}

      {userData && !error && (
        <div>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width={80}
            height={80}
            className="rounded-full"
          />

          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio || "No bio available"}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <p>Location: {userData.location || "Not specified"}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};
export default Search;
