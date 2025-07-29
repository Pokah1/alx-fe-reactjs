import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    setUserData(null);
    setResults([]);
    setLoading(true);

    try {
      // If location or minRepos are provided, do advanced search
      if (location || minRepos) {
        const data = await searchUsers({ username, location, minRepos });
        setResults(data.items); // Search API returns items[]
      } else {
        // Simple search by username
        const data = await fetchUserData(username);
        setUserData(data);
      }
    } catch (err) {
      console.error(err);
      setError("No results found.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl bg-gray-800 rounded-xl p-6 shadow-lg">
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 rounded-lg w-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 rounded-lg w-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="px-4 py-2 rounded-lg w-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg shadow transition"
        >
          Search
        </button>
        <button
          type="reset"
          onClick={() => {
            setUsername("");
            setLocation("");
            setMinRepos("");
            setUserData(null);
            setResults([]);
            setError(null);
          }}
          className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition"
        >
          Reset
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Single user result */}
      {userData && (
        <div className="bg-gray-700 p-5 rounded-lg flex flex-col md:flex-row items-center gap-5 hover:bg-gray-600 transition">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-20 h-20 rounded-full shadow-lg"
          />
          <div className="text-left">
            <h2 className="text-white font-bold text-xl">
              {userData.name || userData.login}
            </h2>
            <p className="text-gray-300">
              {userData.bio || "No bio available"}
            </p>
            <p className="text-gray-300">Followers: {userData.followers}</p>
            <p className="text-gray-400">Following: {userData.following}</p>
            <p className="text-gray-400">
              Public Repos: {userData.public_repos}
            </p>
            <p className="text-gray-400">
              {userData.location || "Location not available"}
            </p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              View Profile
            </a>
          </div>
        </div>
      )}

      {/* Multiple results for advanced search */}
      {results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {results.map((user) => (
            <div
              key={user.id}
              className="bg-gray-700 p-4 rounded-lg flex items-center gap-4 hover:bg-gray-600 transition"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-white font-semibold">{user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
