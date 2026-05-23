import { useEffect, useState } from "react";
import { fetchNews } from "../services/api.js";

export default function NewsCard() {

  const [news, setNews] = useState([]);

  useEffect(() => {

    const getNews = async () => {

      const data = await fetchNews();

      setNews(data);

    };

    getNews();

  }, []);

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 p-8">

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {news.map((item, index) => (

      <div
        key={index}
        className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300"
      >

        <img
          src={item.urlToImage}
          alt=""
          className="w-full h-[220px] object-cover"
        />

        <div className="p-5">

          <h2 className="text-white text-2xl font-bold mb-3 line-clamp-2">
            {item.title}
          </h2>

          <p className="text-gray-300 text-sm leading-6 line-clamp-3">
            {item.description}
          </p>

          

        </div>

      </div>

    ))}

  </div>

</div>
  );
}

