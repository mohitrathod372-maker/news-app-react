import { useEffect, useState } from "react";
import { fetchNews } from "../services/api.js";

export default function NewsCard({ searchQuery }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(searchQuery);
      setNews(data || []);
    };

    getNews();
  }, [searchQuery]);

  return (
    <div className=" w-full max-w-full min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 p-4 sm:p-6 lg:p-8">

      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-5 
        sm:gap-6 
        lg:gap-8
      ">

        {news.map((item, index) => (
          <div
            key={index}
            className="
              bg-white/10 
              border border-white/10 
              rounded-2xl sm:rounded-3xl 
              overflow-hidden 
              shadow-lg sm:shadow-2xl 
              hover:scale-105 
              hover:shadow-cyan-500/30 
              transition-all duration-300
            "
          >

            <img
              src={item.image || item.urlToImage}
              alt={item.title}
              className="
                w-full 
                h-[180px] sm:h-[200px] lg:h-[220px] 
                object-cover
              "
            />

            <div className="p-4 sm:p-5">

              <h2 className="
                text-white 
                text-lg sm:text-xl lg:text-2xl 
                font-bold 
                mb-2 sm:mb-3 
                line-clamp-2
              ">
                {item.title}
              </h2>

              <p className="
                text-gray-300 
                text-xs sm:text-sm 
                leading-5 sm:leading-6 
                line-clamp-3
              ">
                {item.description || item.content}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}