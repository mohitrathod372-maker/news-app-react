import React, { useState } from 'react'
import './index.css'

import NewsCard from './components/NewsCard'
import Header from './components/Header'

export default function App() {
  const [searchQuery, setSearchQuery] = useState("india")

  return (
 
    <div className="w-full min-h-screen bg-slate-900 isolation-auto">
      <Header onSearch={setSearchQuery} />
      
     
      <div className="pt-18 w-full overflow-x-hidden">
        <NewsCard searchQuery={searchQuery} />
      </div>
    </div>
  )
}