import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"

export default function Header({ onSearch }) {

    const [search, setSearch] = useState("")

    const handleSearch = () => {

        if(search.trim() !== ""){
            onSearch(search)
        }

    }

    return (
<div className='header  sm:flex-row justify-between items-center gap-4 p-4 bg-gradient-to-r from-slate-900 to-slate-800 fixed top-0 left-0 right-0 z-50 flex flex-col  shadow-lg'>

    <h2 className='text-2xl sm:text-3xl font-bold text-red-500 tracking-wide'>
        News App
    </h2>

    <div className='flex items-center border rounded-full px-4 py-2 bg-white w-full sm:w-auto max-w-xl shadow-inner transition-all duration-300 focus-within:ring-2 '>

        <input
            type="text"
            placeholder='Search here...'
          
            className='outline-none w-full sm:w-[350px] md:w-[400px] text-black bg-transparent text-sm sm:text-base'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
                if(e.key === "Enter"){
                    handleSearch()
                    setSearch("")
                }
            }}
        />

        <FaSearch
            className='text-gray-500 cursor-pointer hover:text-red-500 transition-colors duration-200 ml-2'
            onClick={handleSearch}
        />

    </div>

</div>
    )
}