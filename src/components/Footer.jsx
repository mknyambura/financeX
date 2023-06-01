import React from 'react'

import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiMessenger, SiTwoo } from 'react-icons/si'

function Footer() {
  return (
    <div className='flex flex-row justify-between m-16'>
        <div className='flex flex-col gap-6'>
            <h4 className='text-4xl font-bold'>FinanceX</h4>
            <p className='opacity-70'>Lorem ipsum dolor sit amet, consectetur </p>
            <div className='flex flex-row gap-4'>
                <FaLinkedinIn/>
                <SiMessenger/>
                <BsTwitter/>
                <SiTwoo/>
            </div>
        </div>
        <div className='text-white/70 flex flex-col gap-4'>
            <h5 className='font-bold text-2xl'>Company</h5>
            <div className='flex flex-col gap-6'>
                <h6>About Us</h6>
                <h6>Careers</h6>
                <h6>Blog</h6>
                <h6>Pricing</h6>
            </div>
        </div>

        <div className='text-white/70 flex flex-col gap-4'>
            <h5 className='font-bold text-2xl'>Resources</h5>
            <div className='flex flex-col gap-6'>
                <h6>Templates</h6>
                <h6>Tutorials</h6>
                <h6>Free resources</h6>
                <h6>Contract templates</h6>
            </div>
        </div>

        <div className='flex flex-col gap-4'>
            <h5 className='font-bold text-2xl opacity-70'>Join Our Newsletter</h5>
            <div className='flex flex-col relative'>
                <input type="text" className='px-4 py-2 relative bg-white/50' placeholder='Your email address'/>
                <div className='absolute right-0'>
                    <button className='bg-[#CBFC01] text-black px-4 py-2 font-bold'>Subscribe</button>
                </div>
            </div>
            <p className='opacity-70'>* Will send you weekly updates for your better finance management</p>
        </div>
    </div>
  )
}

export default Footer