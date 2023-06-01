import React from 'react'

import { BsArrowRight } from 'react-icons/bs'

function Header() {
  return (
    <div className='flex flex-row justify-between m-16'>
        <h1 className='font-bold text-4xl'>FinanceX</h1>
        <div className='text-white/70 flex flex-row justify-between gap-8'>
            <h1>Why FinanceX</h1>
            <h1>Features</h1>
            <h1>Update</h1>
            <h1>Blog</h1>
        </div>
        <button className='items-center px-4 py-2 border border-transparent bg-transparent flex flex-row gap-2 hover:bg-[#CBFC01] transition-all duration-500 hover:text-black font-bold rounded-md'>
            Sign Up
            <BsArrowRight/>
        </button>
    </div>
  )
}

export default Header