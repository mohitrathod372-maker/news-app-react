import React from 'react'
import {FaSearch} from "react-icons/fa"


export default function Header() {
  return (
    <div className='header flex justify-between p-4  bg-gradient-to-r from-slate-900 to-slate-500 sticky top-0 z-50 shadow-lg'>
        
            <h2 className='text-3xl font-bold text-red-500'>News App</h2>
            <div className='flex border rounded-full px-4 py-2 bg-white'>
                <input type="text" placeholder='Search here...' className='outline-none w-[400px]' />
                <FaSearch className='searchIcon'/>

            </div>
       
    </div>
  )
}
