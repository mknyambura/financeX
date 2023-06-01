import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs'
import { SlArrowLeft, SlArrowRight, SlLocationPin } from 'react-icons/sl'
import { TfiWorld } from 'react-icons/tfi'
import { GiNetworkBars } from 'react-icons/gi'

import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper' 
import 'swiper/css'
import 'swiper/css/free-mode'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './Header'
import Footer from './Footer'

import card from '../images/card.png'
import paypal from '../images/Paypal.png'
import webflow from '../images/Webflow.png'
import google from '../images/Google.png'
import amazon from '../images/Amazon.png'
import adobe from '../images/Adobe.png'
import map from '../images/map.png'
import card1 from '../images/card1.png'
import mahesh from '../images/mahesh.png'


function Home() {
    const [counterOn, setCounterOn] = useState(false)
    
    return (
        <div className='flex flex-col'>
            <Header/>
            <div className=''>
                <div className='flex flex-row items-center justify-between m-16'>
                    <div className='flex flex-col gap-8 w-1/2'>
                        <h5 className='text-[#CBFC01] font-bold'>Welcome! Future Platform</h5>
                        <h4 className='font-bold text-5xl'>The World's Most Modern Card <span className='text-[#CBFC01]'>Platform</span></h4>
                        <p className='opacity-70'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Rerum veritatis quia delectus sint, consequuntur dolore nisi iusto ipsa quaerat, debitis earum recusandae totam, aut adipisci beatae nam officia mollitia animi.
                        </p>
                        <button className='w-[32%] flex flex-row justify-evenly items-center font-bold text-black bg-[#CBFC01] px-3 py-2'>
                            Get Started
                            <BsArrowRight className='text-2xl'/>
                        </button>
                    </div>
                    <img src={card} alt="" className='float-right' />
                </div>

                <div className='bg-[#CBFC01] flex flex-row justify-evenly'>
                    <img className='m-8' src={paypal} alt="" />
                    <img className='m-8' src={webflow} alt="" />
                    <img className='m-8' src={google} alt="" />
                    <img className='m-8' src={amazon} alt="" />
                    <img className='m-8' src={adobe} alt="" /> 
                </div>

                <div className='grid grid-cols-3 flex-wrap mt-24 mb-16 mr-16 ml-16'>
                    <div className='flex flex-col m-16 gap-8'>
                        <h5 className='text-[#CBFC01] font-bold'>Our Services</h5>
                        <h4 className='font-bold text-5xl'>Browse our services & <span className='text-[#CBFC01]'>offerings</span></h4>
                        <button className='w-[70%] flex flex-row justify-evenly items-center font-bold text-black bg-[#CBFC01] px-3 py-2 gap-4'>
                            Get Started
                            <BsArrowRight className='text-3xl'/>
                        </button>
                    </div>
                    <div className='flex flex-col bg-[#2E2E2E] px-8 py-8 justify-between gap-8'>
                        <div className='bg-white/70 h-[1px] w-1/4'></div>
                        <h4 className='font-semibold text-2xl'>Checking accounts</h4>
                        <p className='opacity-70'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, doloribus. 
                            Necessitatibus eum non ipsam repellat pariatur velit ex saepe nulla cum placeat veniam, voluptate, dolore neque sunt provident quas. Inventore!
                        </p>
                        <button className='px-2 py-2 bg-[#CBFC01] flex items-center justify-center w-[10%]'>
                            <BsArrowUpRight className='text-black text-2xl'/>
                        </button>
                    </div>
                    <div className='flex flex-col bg-transparent px-8 py-8 justify-between gap-8  border border-white/30'>
                        <div className='bg-white/70 h-[1px] w-1/4'></div>
                        <h4 className='font-semibold text-2xl'>Checking accounts</h4>
                        <p className='opacity-70'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, doloribus. 
                            Necessitatibus eum non ipsam repellat pariatur velit ex saepe nulla cum placeat veniam, voluptate, dolore neque sunt provident quas. Inventore!
                        </p>
                        <button className='px-2 py-2 bg-white flex items-center justify-center w-[10%]'>
                            <BsArrowUpRight className='text-black text-2xl'/>
                        </button>
                    </div>
                    <div className='flex flex-col bg-transparent px-8 py-8 justify-between gap-8  border border-white/30'>
                        <div className='bg-white/70 h-[1px] w-1/4'></div>
                        <h4 className='font-semibold text-2xl'>Checking accounts</h4>
                        <p className='opacity-70'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, doloribus. 
                            Necessitatibus eum non ipsam repellat pariatur velit ex saepe nulla cum placeat veniam, voluptate, dolore neque sunt provident quas. Inventore!
                        </p>
                        <button className='px-2 py-2 bg-white flex items-center justify-center w-[10%]'>
                            <BsArrowUpRight className='text-black text-2xl'/>
                        </button>
                    </div>
                    <div className='flex flex-col bg-transparent px-8 py-8 justify-between gap-8  border border-white/30'>
                        <div className='bg-white/70 h-[1px] w-1/4'></div>
                        <h4 className='font-semibold text-2xl'>Checking accounts</h4>
                        <p className='opacity-70'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, doloribus. 
                            Necessitatibus eum non ipsam repellat pariatur velit ex saepe nulla cum placeat veniam, voluptate, dolore neque sunt provident quas. Inventore!
                        </p>
                        <button className='px-2 py-2 bg-white flex items-center justify-center w-[10%]'>
                            <BsArrowUpRight className='text-black text-2xl'/>
                        </button>
                    </div>
                    <div className='flex flex-col bg-transparent px-8 py-8 justify-between gap-8  border border-white/30'>
                        <div className='bg-white/70 h-[1px] w-1/4'></div>
                        <h4 className='font-semibold text-2xl'>Checking accounts</h4>
                        <p className='opacity-70'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, doloribus. 
                            Necessitatibus eum non ipsam repellat pariatur velit ex saepe nulla cum placeat veniam, voluptate, dolore neque sunt provident quas. Inventore!
                        </p>
                        <button className='px-2 py-2 bg-white flex items-center justify-center w-[10%]'>
                            <BsArrowUpRight className='text-black text-2xl'/>
                        </button>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between mr-16 ml-16 mb-16 mt-24 gap-12'>
                    <div className='flex flex-col gap-8 w-[40%]'>
                        <h5 className='text-[#CBFC01] font-bold'>Benefits</h5>
                        <h5 className='font-bold text-7xl'>We have many users all over the <span className='text-[#CBFC01]'>world</span></h5>
                        <p className='opacity-70'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Asperiores sit iste ullam tempora animi, accusantium labore quam debitis quia nesciunt unde autem aspernatur voluptatem. 
                            Voluptatem et natus voluptatibus laudantium accusantium?
                        </p>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <div className='flex flex-row gap-8'>
                                <div className='flex flex-col items-center m-10'>
                                    <h5 className='font-bold text-7xl'>
                                        {counterOn && 
                                            <CountUp start={0} end={10} duration={5} delay={0}/>
                                        }
                                    M<span className='text-[#CBFC01]'>+</span>
                                    </h5>
                                    <p className='text-xl font-semibold text-[#CBFC01]'>User active</p>
                                </div>
                                <div className='flex flex-col items-center m-10'>
                                    <h5 className='font-bold text-7xl'>
                                        {counterOn && 
                                            <CountUp start={0} end={30} duration={5} delay={0}/>
                                        }
                                    <span className='text-[#CBFC01]'>+</span>
                                    </h5>
                                    <p className='text-xl font-semibold text-[#CBFC01]'>Country</p>
                                </div>
                                    
                                <div className='flex flex-col items-center m-10'>
                                    <h5 className='font-bold text-7xl'>
                                        $
                                        {counterOn && 
                                            <CountUp start={0} end={50} duration={5} delay={0}/>
                                        }
                                    M<span className='text-[#CBFC01]'>+</span>
                                    </h5>
                                    <p className='text-xl font-semibold text-[#CBFC01]'>Transaction</p>
                                </div>
                            </div>
                        </ScrollTrigger>
                    </div>
                    <div className=''>
                        <img src={map} alt="" />
                    </div>
                </div>

                <div className='flex flex-row justify-between m-16 gap-12'>
                    <div className='flex flex-col gap-8 w-1/2'>
                        <h5 className='font-bold text-[#CBFC01]'>Our Services</h5>
                        <h5 className='text-6xl font-bold'>Real Time <span className='text-[#CBFC01]'>Transaction Report</span></h5>
                        <p className='opacity-70'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus vitae natus quod. Ut corrupti reprehenderit quia magnam, maxime nemo impedit minus culpa nesciunt nulla odio nisi hic veniam laudantium enim.
                        </p>
                        <button className='px-4 py-2 font-bold bg-[#CBFC01] text-black flex items-center justify-between w-[32%]'>
                            Getting Started
                            <BsArrowRight className='text-black text-2xl'/>
                        </button>
                    </div>
                    <div>
                        <img src={card1} alt="" />
                    </div>
                </div>

                <div className='flex flex-row ml-16 mr-16'>
                    <div className='border border-white/20 flex flex-col gap-8 px-4 py-4 bg-transparent'>
                        <div className='mt-4 ml-4 mr-4 w-[10%] text-black items-center justify-center bg-white px-2 py-2'>
                            <SlLocationPin/>
                        </div>
                        <h4 className='mt-4 ml-4 mr-4 font-bold text-3xl'>Local business finance</h4>
                        <p className='mt-4 ml-4 mr-4 opacity-70'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel asperiores nostrum odit iste.
                        </p>
                        <Link className='mt-4 ml-4 mr-4 hover:underline flex flex-row items-center text-white gap-4 justify-center'>
                            Learn More
                            <BsArrowRight/>
                        </Link>
                    </div>

                    <div className='flex flex-col gap-8 bg-white/50 px-4 py-4'>
                        <div className='mt-4 ml-4 mr-4 w-[10%] text-black items-center justify-center bg-[#CBFC01] px-2 py-2'>
                            <TfiWorld/>
                        </div>
                        <h4 className='mt-4 ml-4 mr-4 font-bold text-3xl'>Local business finance</h4>
                        <p className='mt-4 ml-4 mr-4 opacity-70'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel asperiores nostrum odit iste.
                        </p>
                        <Link className='mt-4 ml-4 mr-4 hover:underline flex flex-row items-center text-white gap-4 justify-center'>
                            Learn More
                            <BsArrowRight/>
                        </Link>
                    </div>

                    <div className='border border-white/20 flex flex-col gap-8 bg-transparent px-4 py-4'>
                        <div className='mt-4 ml-4 mr-4 w-[10%] text-black items-center justify-center bg-white px-2 py-2'>
                            <GiNetworkBars/>
                        </div>
                        <h4 className='mt-4 ml-4 mr-4 font-bold text-3xl'>Local business finance</h4>
                        <p className='mt-4 ml-4 mr-4 opacity-70'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel asperiores nostrum odit iste.
                        </p>
                        <Link className='mt-4 ml-4 mr-4 hover:underline flex flex-row items-center text-white gap-4 justify-center'>
                            Learn More
                            <BsArrowRight/>
                        </Link>
                    </div>
                </div>
                <div className='relative bg-[#CBFC01] text-black py-12 mt-[150px]'>
                    <div className='flex flex-col gap-8 m-16'>
                        <h5>Our Services</h5>
                        <h4 className='font-bold text-5xl'>Global businesses love financeX</h4>
                        {/* <div className=' flex flex-row justify-between'>
                            <div className='absolute flex flex-row gap-4 right-8'>
                                <button className='px-2 py-2 rounded-full border border-black bg-transparent text-black'><SlArrowLeft/></button>
                                <button className='px-2 py-2 rounded-full bg-black text-[#CBFC01]'><SlArrowRight/></button>
                            </div>
                        </div> */}
                    </div>
                    <Swiper 
                        freeMode={true}
                        grabCursor={true}
                        modules={FreeMode}
                        slidesPerView={3}
                        spaceBetween={30}
                        className='mySwiper bg-[#CBFC01] text-black flex flex-row items-center justify-start overflow-x-scroll overflow-y-hidden m-16 scrollbar-hide'
                        >
                        <SwiperSlide>
                            <div className='flex flex-col px-14 py-14 gap-8 bg-[#151515] text-white'>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    Necessitatibus, maxime expedita veniam totam quidem, aut repellendus ipsam aspernatur, vitae minus sed unde illo. 
                                    Ab soluta cupiditate eveniet labore quidem laboriosam.
                                </p>
                                <div className='flex flex-row gap-2 items-center'>
                                    <img src={mahesh} alt="" />
                                    <div className='flex flex-col'>
                                        <h1 className='text-xl'>Mahesh</h1>
                                        <h1 className='text-sm opacity-70'>CEO</h1>
                                    </div>         
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col px-14 py-14 gap-8 bg-[#151515] text-white'>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    Necessitatibus, maxime expedita veniam totam quidem, aut repellendus ipsam aspernatur, vitae minus sed unde illo. 
                                    Ab soluta cupiditate eveniet labore quidem laboriosam.
                                </p>
                                <div className='flex flex-row gap-2 items-center'>
                                    <img src={mahesh} alt="" />
                                    <div className='flex flex-col '>
                                        <h1 className='text-xl'>Mahesh</h1>
                                        <h1 className='text-sm opacity-70'>CEO</h1>
                                    </div>         
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col px-14 py-14 gap-8 bg-[#151515] text-white'>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    Necessitatibus, maxime expedita veniam totam quidem, aut repellendus ipsam aspernatur, vitae minus sed unde illo. 
                                    Ab soluta cupiditate eveniet labore quidem laboriosam.
                                </p>
                                <div className='flex flex-row gap-2 items-center'>
                                    <img src={mahesh} alt="" />
                                    <div className='flex flex-col '>
                                        <h1 className='text-xl'>Mahesh</h1>
                                        <h1 className='text-sm opacity-70'>CEO</h1>
                                    </div>         
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col px-14 py-14 gap-8 bg-[#151515] text-white'>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    Necessitatibus, maxime expedita veniam totam quidem, aut repellendus ipsam aspernatur, vitae minus sed unde illo. 
                                    Ab soluta cupiditate eveniet labore quidem laboriosam.
                                </p>
                                <div className='flex flex-row gap-2 items-center'>
                                    <img src={mahesh} alt="" />
                                    <div className='flex flex-col '>
                                        <h1 className='text-xl'>Mahesh</h1>
                                        <h1 className='text-sm opacity-70'>CEO</h1>
                                    </div>         
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col px-14 py-14 gap-8 bg-[#151515] text-white'>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    Necessitatibus, maxime expedita veniam totam quidem, aut repellendus ipsam aspernatur, vitae minus sed unde illo. 
                                    Ab soluta cupiditate eveniet labore quidem laboriosam.
                                </p>
                                <div className='flex flex-row gap-2 items-center'>
                                    <img src={mahesh} alt="" />
                                    <div className='flex flex-col '>
                                        <h1 className='text-xl'>Mahesh</h1>
                                        <h1 className='text-sm opacity-70'>CEO</h1>
                                    </div>         
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col px-14 py-14 gap-8 bg-[#151515] text-white'>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    Necessitatibus, maxime expedita veniam totam quidem, aut repellendus ipsam aspernatur, vitae minus sed unde illo. 
                                    Ab soluta cupiditate eveniet labore quidem laboriosam.
                                </p>
                                <div className='flex flex-row gap-2 items-center'>
                                    <img src={mahesh} alt="" />
                                    <div className='flex flex-col '>
                                        <h1 className='text-xl'>Mahesh</h1>
                                        <h1 className='text-sm opacity-70'>CEO</h1>
                                    </div>         
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='flex flex-col px-14 py-14 gap-8 bg-[#151515] text-white'>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    Necessitatibus, maxime expedita veniam totam quidem, aut repellendus ipsam aspernatur, vitae minus sed unde illo. 
                                    Ab soluta cupiditate eveniet labore quidem laboriosam.
                                </p>
                                <div className='flex flex-row gap-2 items-center'>
                                    <img src={mahesh} alt="" />
                                    <div className='flex flex-col '>
                                        <h1 className='text-xl'>Mahesh</h1>
                                        <h1 className='text-sm opacity-70'>CEO</h1>
                                    </div>         
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div> 

                <div>
                    <div className='bg-[#CBFC01] m-24 px-24 py-24 flex flex-col gap-8 items-center justify-center'>
                        <h4 className='text-[#151515] text-5xl font-bold'>Let's grow your business, together</h4>
                        <button className='text-[#CBFC01] px-4 py-2 bg-[#151515] font-bold'>Get started</button>
                    </div>
                </div>               
            </div>

            <Footer/>
            <div className='flex flex-col items-center gap-8'>
                <div className='bg-white/70 h-[1px] w-[99.9%]'></div>
                <p className='opacity-70'>Copyright @ Mercy Faith Nyambura Kariuki. All rights reserved</p>
            </div>
        </div>
    )
}

export default Home