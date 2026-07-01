import React, { useState } from 'react'
import './index.css'

import NewsCard from './components/NewsCard'
import Header from './components/Header'

export default function App() {
  const [searchQuery, setSearchQuery] = useState("india")

  return (
    // Is master div se layout tootna band ho jayega aur sticky wapas aa jayega
    <div className="w-full min-h-screen bg-slate-900 isolation-auto">
      <Header onSearch={setSearchQuery} />
      
      {/* Cards ke wrapper par overflow control lagaya hai */}
      <div className="w-full overflow-x-hidden">
        <NewsCard searchQuery={searchQuery} />
      </div>
    </div>
  )
}