import axios from 'axios';

export const fetchNews = async (query) => {
 const token = import.meta.env.VITE_API_KEY;  
  const searchQuery = query && query.trim() !== "" ? query.trim() : "india";


  const url = `/api/news/search?q=${encodeURIComponent(searchQuery)}&token=${token}&lang=en`;

  try {
    const response = await axios.get(url);
    return response.data.articles || [];
  } catch (error) {
    console.error("Fetch error:", error.response ? error.response.data : error.message);
    return [];
  }
};