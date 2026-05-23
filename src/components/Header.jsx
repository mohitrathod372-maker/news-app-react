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

        <div className='header flex justify-between items-center p-4 bg-gradient-to-r from-slate-900 to-slate-500 sticky top-0 z-50 shadow-lg'>

            <h2 className='text-3xl font-bold text-red-500'>
                News App
            </h2>

            <div className='flex items-center border rounded-full px-4 py-2 bg-white'>

                <input

                    type="text"

                    placeholder='Search here...'

                    className='outline-none w-[400px] text-black'

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
                    className='text-gray-700 cursor-pointer'
                    onClick={handleSearch}
                />

            </div>

        </div>
    )
}