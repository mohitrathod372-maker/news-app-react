import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchNews = async (query = "india") => {

  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
  );

  return response.data.articles;
};

