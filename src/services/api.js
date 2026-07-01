import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchNews = async (query = "india") => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=${query}&token=${API_KEY}&lang=en`
    );

    return response.data.articles;
  } catch (error) {
    console.log("Error fetching news:", error);
    return [];
  }
};