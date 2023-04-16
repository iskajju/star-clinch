import React, { useState } from 'react'
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import StarRating from './StarRating';

const Accordian = ({ image, Title, desc, PerformanceDetails, PerformanceLanguage, Review }) => {
    const [activeaccordian, setActiveaccordian] = useState(false);
    const [count, setCount] = useState(0)
    const [rating, setRating] = useState(0);
    const OpenAccordian = () => {
        setCount(count + 1)
        if (count % 2 == 0) {
            setActiveaccordian(true)
           
        } else {

            setActiveaccordian(false)
           
        }

    }
    return (
        <>
            <div onClick={OpenAccordian} className={`mt-[40px] flex items-center justify-between rounded-xl 
            shadow-[#9e9e9e30]  shadow-md p-[15px]  w-full `}>
                <div className='flex  '>
                    <img className='h-full w-[34px] mr-[15px] ' src={image} alt="" />
                    <p className=' text-[18px] text-[#000] font-medium w-full '>{Title}</p>
                </div>
                <ChevronDownIcon className='text-[#26c6da] h-5 w-5 font-bold ' />
               
            </div>
            {activeaccordian ? <div className=' shadow-md shadow-[#9e9e9e40] rounded-b-xl px-[15px] md:px-[30px]  py-[20px]' >

                {/* for Biography */}
                {desc && <p className='text-sm text-[#2125529] ' >{desc}</p>}

                {/* for Performace details */}
                {PerformanceDetails && <div className='shadow-md shadow-[#9e9e9e40] rounded-xl h-[90%] flex flex-wrap md:flex-nowrap items-center gap-[15px] md:gap-[30px] py-[14px] px-[15px] ' >


                    {/* Off Stage Members */}
                    <div className=' bg-[#e3f8fa]  rounded-lg flex flex-col items-center h-full w-[47%]  md:w-full py-[10px] px-[5px] mb-[17px]  '>
                        <div className='pb-[15px]' >
                            <img src="https://stcdn.starclinch.in/mobile/images/profile/offstage_members_new.svg" alt="" />
                        </div>
                        <div className='flex flex-col items-center text-[#26c6da;] text-center ' >
                            <h3 className='md:text-[15px] lg:text-[22px] font-[600] lg:mb-[20px] ' >4</h3>
                            <p className='text-[16px] font-[300] ' >Off Stage Members</p>
                        </div>
                    </div>

                    {/* Performing Members */}
                    <div className=' bg-[#ffe6e2] rounded-lg flex flex-col items-center h-full w-[47%] md:w-full py-[10px] px-[5px] mb-[17px] '>
                        <div className='pb-[15px]' >
                            <img src="https://stcdn.starclinch.in/mobile/images/profile/performing_members_new.svg" alt="" />
                        </div>
                        <div className='flex flex-col items-center text-[#ff3366] text-center ' >
                            <h3 className='md:text-[15px] lg:text-[22px] font-[600] lg:mb-[20px] ' >1</h3>
                            <p className='text-[16px] font-[300] ' >Performing Members</p>
                        </div>
                    </div> 
                      {/* Performance duration */}
                    <div className=' bg-[#f5e6fe] rounded-lg flex flex-col items-center h-full w-[47%] md:w-full py-[10px] px-[5px] mb-[17px] '>
                        <div className='pb-[15px]' >
                            <img src="https://stcdn.starclinch.in/mobile/images/profile/performance_min_duration_new.svg" alt="" />
                        </div>
                        <div className='flex flex-col items-center text-[#be63f9] text-center ' >
                            <h3 className='md:text-[15px] lg:text-[22px]  font-[600] lg:mb-[20px] ' >60 - 120 min</h3>
                            <p className='text-[16px] font-[300] ' >Performance Duration</p>
                        </div>
                    </div>   
                    {/* Can Travel */}
                    <div className=' bg-[#fff1c0] rounded-lg flex flex-col items-center h-[151px] md:h-full w-[47%] md:w-full py-[10px]  px-[5px] mb-[17px] '>
                        <div className='pb-[15px]' >
                            <img src="https://stcdn.starclinch.in/mobile/images/profile/can_travel_new.svg" alt="" />
                        </div>
                        <div className='flex flex-col items-center text-[#ffb148] text-center ' >
                            <h3 className='md:text-[15px] lg:text-[22px]  font-[600] lg:mb-[20px] ' >Can Trave</h3>
                            <p className='text-[16px] font-[300] ' >Nationwide</p>
                        </div>
                    </div>
                </div>
                }

                {/* for Performace Language */}
               {PerformanceLanguage && <div className='flex items-center shadow-md shadow-slate-200 rounded-lg gap-[10px] py-[14px] px-[15px] ' >
                    <div className='flex flex-col items-center w-[228px] ' >
                        <img src="https://starclinch.com/static/mobile/images/language_icons/English.svg" alt="" />
                        <p className='text-sm text-[#333] font-medium ' >English</p>
                    </div>
                    <div className='flex flex-col items-center w-[228px] ' >
                        <img src="https://starclinch.com/static/mobile/images/language_icons/Hindi.svg" alt="" />
                        <p  className='text-sm text-[#333] font-medium '>Hindi</p>
                    </div>

                </div>}
                {/* for Review */}
                {Review && 
                <div className='flex  flex-col md:mx-[54px] ' >
                    <div className='flex items-center justify-center ' >
                        <h5 className=' text-[12px] md:text-[22px] text-center text-[#191918] font-medium ' >0 reviews</h5>
                    </div>
                    <div>
                        <h3 className=' text-[16px] md:text-[30px] text-[#000] ' >Post a review</h3>
                        <StarRating />
                       
                        <textarea className=' shadow-lg shadow-[#25252580] w-full text-[15px] md:text-[20px] text-[#191918] outline-none py-[10px] px-[15px] '  placeholder='Review' name="" id="" cols="30" rows="2"></textarea>
                    </div>
                    <div className='flex items-center justify-end mt-[1rem] ' >
                        <button className='bg-[#0a3fff] text-[10px] md:text-[16px]  h-[27px] w-[69px] md:h-[39px] md:w-[91.5px] text-white font-semibold rounded-[.25rem]  '> Post</button>

                    </div>

                
                </div>

                }
            </div> : null}
        </>
    )
}

export default Accordian
