import React from 'react'
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import '../App.css'

const Footer = () => {
    return (
        <footer  className='  bg-[#1c1c1c] rounded-t-[30px] ' >
            <div className='md:max-w-[720px] lg:max-w-[1140px] m-auto flex items-center justify-center pt-[35px] pb-[25px]  ' >
                <a className='bg-white text-[#0a3fff] flex h-[46px] gap-[7px] font-semibold py-[10px] px-[50px] rounded-[25px]  '  >
                <ArrowLongLeftIcon className=' ' />  Go Back
                     </a>
            </div>
        <div  id='footer' className=' bg-white flex flex-col  items-center justify-center pt-[50px]  rounded-t-[30px] '>
       <div  className='flex flex-col md:flex-row items-center justify-center md:max-w-[720px] lg:max-w-[1140px] ' >


                <div className='px-[15px] mb-[50px] text-center w-[60%] md:w-[80%] ' >
                    <h3 className='text-[#1b1b1b] font-medium text-sm mb-[15px] leading-[25px] ' >REGISTERED ENTITY:</h3>
                    <p className='text-[#5f5e5e] text-sm ' >VINSM Globe Pvt Ltd
                        GSTIN: 07AAFCK1574R1ZX
                        CIN: U52605DL2012PTC236944
                        Phone: +91 7042 88 4270</p>
                </div>

                <div className='flex flex-col px-[15px] mb-[50px] text-center w-[60%] md:w-[80%] ' >
                    <h3 className='text-[#1b1b1b] font-medium text-sm mb-[15px] leading-[25px] ' >FOR BUYERS</h3>
                    <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-sm ' >Our Buyers</a>
                    <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-sm ' >Browse</a>
                    <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-sm ' >Post Your Requirement</a>
                </div>

                <div className='flex flex-col px-[15px] mb-[50px] text-center w-[60%] md:w-[80%] ' >
                    <h3 className='text-[#1b1b1b] font-medium text-sm mb-[15px] leading-[25px] ' >FOR ARTISTS</h3>
                    <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-sm ' >Login</a>
                    <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-sm ' >Artist SignUp</a>
                    <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-sm ' >Artist Membership</a>
                    <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-sm ' >Jobs</a>
                </div>

                <div className='flex flex-col px-[15px] mb-[50px] text-center w-[60%] md:w-[80%] ' >
                    <h3 className='text-[#1b1b1b] font-medium text-sm mb-[15px] leading-[25px] ' >ABOUT US</h3>
                    <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-sm ' >Our Story</a>
                    <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-sm ' >Contact Us</a>
                    <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-sm ' >Careers</a>
                </div>

                <div className='flex flex-col px-[15px] mb-[50px] text-center w-[60%] md:w-[80%] ' >
                    <h3 className='text-[#1b1b1b] font-medium text-sm mb-[15px] leading-[25px] ' >POLICY</h3>
                    <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-sm ' >Terms of Use</a>
                    <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-sm ' >Disclaimer</a>
                    <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-sm ' >FAQs</a>
                </div>
</div>
<div className='flex items-center justify-center' >
    <p className='text-center w-[80%] md:w-full text-[#5f5e5e] font-medium text-sm mb-[5px] leading-[25px] '>© Copyright 2015- 2023 | VINSM Globe Pvt. Ltd. | All Rights Reserved.</p>
</div>
            </div>

        </footer>
    )
}

export default Footer
