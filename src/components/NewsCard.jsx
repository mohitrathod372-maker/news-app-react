import { useEffect, useState } from "react";
import { fetchNews } from "../services/api.js";

export default function NewsCard({ searchQuery }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const data = await fetchNews(searchQuery);
      setNews(data || []);
      setLoading(false);
    };

    getNews();
  }, [searchQuery]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-white text-xl">
        Loading News...
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-gray-400 text-xl">
        No news found. Try another search.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {news.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300"
          >
      
            <img
              src={item.image || item.urlToImage || "https://via.placeholder.com/400x200?text=No+Image"}
              alt={item.title}
              className="w-full h-[180px] sm:h-[200px] object-cover"
            />

            <div className="p-4 sm:p-5">
              <h2 className="text-white text-lg font-bold mb-2 line-clamp-2">
                {item.title}
              </h2>

     
              <p className="text-gray-300 text-xs sm:text-sm line-clamp-3">
                {item.description || item.content || "No description available."}
              </p>
              
              
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-3 text-red-400 hover:text-red-300 text-xs font-semibold"
              >
                Read Full Article →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}