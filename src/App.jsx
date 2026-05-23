import React, { useState } from 'react'
import './index.css'

import NewsCard from './components/NewsCard'
import Header from './components/Header'

export default function App() {

  const [searchQuery, setSearchQuery] = useState("india")

  return (

    <div>

      <Header onSearch={setSearchQuery} />

      <NewsCard searchQuery={searchQuery} />

    </div>
  )
}