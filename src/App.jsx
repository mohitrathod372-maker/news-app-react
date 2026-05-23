import React from 'react'
import './index.css'
import './components/Header'
import './components/NewsCard'
import NewsCard from './components/NewsCard'
import Header from './components/Header'


export default function App() {
  return (
    <div >
      <Header/>
      <NewsCard/>
    </div>
  )
}
