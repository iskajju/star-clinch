import React from 'react'
import '../App.css'
import './header.css'
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, ShoppingBagIcon } from "@heroicons/react/24/outline"

const Header = () => {
    return (
        <header className='fixed top-0 left-0 right-0 ' >
            <div className="container  md:max-w-[720px] lg:max-w-[1140px]">
                <div className="inner_container flex items-center justify-between ">

                    <div className="brand-logo max-w-[50%]  lg:max-w-[16.666667%] px-[15px] ">
                        <img className=' md:h-[40px] w-full' src="https://starclinch.com/static/images/home/StarClinch-Logo-new.svg" alt="no-image" />
                    </div>
        
                    <div className=" flex-[0 0 83.333333%] hidden lg:inline-flex   ">
                        <ul className='flex items-center  text-[#070707] text-sm  '>
                            <li className='flex items-center' >
                                <a className='ml-[40px] font-medium' href="">Entertainers </a>
                                <ChevronDownIcon className= ' h-[12px] w-[14px] text-[#070707] ' />
                            </li>
                            <li className='flex items-center'>
                                <a className='ml-[40px] font-medium' href="">Join Community</a>
                                <ChevronDownIcon className= ' h-[12px] w-[14px] text-[#070707] ' />
                            </li>
                            <li>
                            <button className='ml-[40px] header-button font-medium'>Post Your Requirement </button>
                            </li>
                            {/* <li>
                                <MagnifyingGlassIcon className= 'ml-[40px] h-[18px] w-[18px] font-bold text-gray-600 ' />
                            </li>
                            <li>
                                <ShoppingBagIcon className= 'ml-[40px] h-[20px] w-[20px] text-[#070707] ' />
                            </li>
                         */}
                        </ul>
                    </div>
                    <div className="  flex-[0 0 42.333333%] lg:hidden  px-[15px] ">
                        <ul className='flex items-center  text-[#070707] text-sm  '>
                        <li>
                                <Bars3Icon className= 'ml-[40px] h-[20px] w-[20px] text-[#070707] ' />
                            </li>
                        
                        </ul>
                    </div>
                            
                </div>
            </div>
        </header>
    )
}

export default Header
