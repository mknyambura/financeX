import React from 'react'

import { BsArrowRight } from 'react-icons/bs'

function Header() {
  return (
    <div className='flex flex-row justify-between m-16'>
        <h1 className='font-bold text-4xl'>FinanceX</h1>
        <div className='text-white/70 flex flex-row justify-between gap-8'>
            <h5>Why FinanceX</h5>
            <h5>Features</h5>
            <h5>Update</h5>
            <h5>Blog</h5>
        </div>
        <button className='items-center px-4 py-2 border border-transparent bg-transparent flex flex-row gap-2 hover:bg-[#CBFC01] transition-all duration-500 hover:text-black font-bold rounded-md'>
            Sign Up
            <BsArrowRight/>
        </button>
    </div>
  )
}

export default Header