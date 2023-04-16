import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/material';

const Bottom = () => {
    return (
        <footer className='bg-[#1c1c1c] pt-[35px] pb-[67px] rounded-t-[35px] text-[#6f6f6f] ' >
            
            <div className=' flex flex-col items-center justify-center bg-[#141414]   ' >
                {/* First */}
                <div className='flex flex-col md:flex-row md:max-w-[720px] lg:max-w-[1140px] m-auto py-[50px] px-[15px] w-full ' >
                    <div className='flex items-center justify-center mb-[15px] px-[15px] md:w-[33.3%] ' >
                        <p className='text-sm text-center ' >India's Largest Marketplace for Professional Artists</p>
                    </div>
                    <div className='flex items-center justify-center  mb-[15px] px-[15px] md:w-[33.3%]  ' >
                        <Link to='/'>
                        <img className='h-[45px]' src="https://starclinch.com/static/images/home/StarClinch-Logo-white.svg" alt="" />
                        </Link>
                    </div>
                    <div className='flex md:flex-col lg:flex-row items-center justify-center  w-full mb-[15px]  px-[15px] md:w-[33.3%] ' >
                        <p className='text-sm md:text-[12px] text-center '>On social networks</p>
                        <div className='flex items-center  gap-[20px] md:gap-[10px]  ml-[20px]  ' >
                            <FacebookIcon className=' h-[18px] text-[#6f6f6f] ' />
                            <TwitterIcon className=' h-[18px] text-[#6f6f6f] ' />
                            <YouTubeIcon className=' h-[18px] text-[#6f6f6f] ' />
                            <InstagramIcon className=' h-[18px] text-[#6f6f6f] ' />
                        </div>
                    </div>
                   
                </div>

                {/* First */}


                {/*  */}
                <div className=' flex flex-col md:flex-row w-full bg-[#1c1c1c]  ' >
                <div className=' flex flex-col md:flex-row  md:max-w-[720px] lg:max-w-[1140px] m-auto  pt-[60px] border-[#363636] border-b w-full' >


                    <div className='px-[15px] mb-[50px] text-center md:text-left  md:w-[33.3%] ' >
                        <h3 className='text-[#939393] font-medium text-sm md:text-[12px] mb-[15px] leading-[25px]  ' >LEGAL ENTITY:</h3>
                        <p className='text-[#5f5e5e] text-[16px]  m-auto ' >VINSM Globe Private Limited
                            GSTIN : 07AAFCK1574R1ZX 
                            <br/>
                            CIN: U52605DL2012PTC236944 <br/>
                            Phone: +91 7042 88 4270 <br/>
<br />
<br />
                            Contact Us</p>
                    </div>


                    <div className='flex flex-col  md:w-[33.3%]' >

                        <div className='flex flex-col px-[15px] mb-[30px] text-center md:text-left   ' >
                            <h3 className='text-[#939393] font-medium text-sm mb-[15px] leading-[25px] md:text-[12px] ' >FOR BUYERS</h3>
                            <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-[16px] ' >Our Buyers</a>
                            <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-[16px] ' >Browse</a>
                            <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-[16px] ' >Post Your Requirement</a>
                        </div>

                        <div className='flex flex-col px-[15px] mb-[30px] text-center md:text-left ' >
                            <h3 className='text-[#939393] font-medium text-sm mb-[15px] leading-[25px] md:text-[12px] ' >FOR ARTISTS</h3>
                            <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-[16px] ' >Login</a>
                            <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-[16px] ' >Artist SignUp</a>
                            <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-[16px] ' >Artist Membership</a>
                            <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-[16px] ' >Jobs</a>
                        </div>
                    </div>
                    <div className='flex flex-col  md:w-[33.3%] ' >


                        <div className='flex flex-col px-[15px] mb-[30px] text-center  md:text-left  ' >
                            <h3 className='text-[#939393] font-medium text-sm mb-[15px] leading-[25px] md:text-[12px] ' >ABOUT US</h3>
                            <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-[16px] ' >Our Story</a>
                            <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-[16px] ' >Contact Us</a>
                            <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-[16px] ' >Careers</a>
                        </div>

                        <div className='flex flex-col px-[15px] mb-[30px] text-center md:text-left  ' >
                            <h3 className='text-[#939393] font-medium text-sm mb-[15px] leading-[25px]  md:text-[12px]' >POLICY</h3>
                            <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-[16px] ' >Privacy Poli[16px]</a>
                            <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-[16px] ' >Terms of Use</a>
                            <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-[16px] ' >Disclaimer</a>
                            <a className='text-[#5f5e5e] leading-[25px] mb-[5px] text-[16px] ' >FAQs</a>
                        </div>
                    </div>
                    
</div>
                </div>
                    <div className='flex items-center justify-center bg-[#1c1c1c] w-full pt-[30px]' >
                    <p className='text-center w-[80%] md:w-full text-[#5f5e5e] font-medium text-sm mb-[5px] leading-[25px] '>© Copyright 2015- 2023 | VINSM Globe Pvt. Ltd. | All Rights Reserved.</p>
                    </div>
                {/*  */}
            





            </div></footer>
    )
}

export default Bottom
