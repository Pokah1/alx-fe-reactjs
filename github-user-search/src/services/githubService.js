import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let queryParts = [];

    if (username) queryParts.push(`${username}`);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);

    const query = queryParts.join(" ");

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error searching users:", error);
    throw error;
  }
};
