import axios from "axios";

const API_KEY = "13170c631efc4f6385cbfe4a12cf6f68";

export const fetchNews = async (query = "india") => {

  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
  );

  return response.data.articles;
};

