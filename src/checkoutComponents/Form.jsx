import React from 'react'
import '../App.css'

export const Form = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row items-center mt-[76px] pt-[20px] md:pt-[60px] px-[15px] ' >
                <div className='flex flex-col w-full lg:w-[66.666667%] ' >
                    {/* artist  */}
                    <div className='flex items-center justify-center mx-[20px] my-[20px] lg:mx-[215px] lg:my-[20px] leading-[1.2] ' >
                        <div className='  rounded-full overflow-hidden   ' >
                            <img className=' object-cover  h-[100px] w-[100px]   overflow-hidden ' src="https://wpcdn.starclinch.in/2019/03/26642.jpg?format=webp&w=300&dpr=1.3" alt="" />
                        </div>
                        <h3 className='ml-[15px] text-[29px] font-medium text-[#333] ' >
                            Ranbir Kapoor
                        </h3>
                    </div>
                    {/* artist  */}
                    {/* form title */}
                    <div className='flex flex-col mt-[40px] ' >
                        <h3 className='flex items-center relative pl-[55px] text-[29px] text-[#333] font-medium '>
                            <strong id='' className=' strong   h-[10 ' >★</strong>
                            Submit Form
                        </h3>
                        <h5 className='pl-[55px] text-[20px] text-[#333] font-medium' >Get Best Price</h5>
                    </div>
                    {/* form title */}
                    {/* form */}
                    <div className='pt-[20px]' >
                        <form action="">

                            <div  >
                                {/* First Row */}
                                <div className=' flex flex-col md:flex-row ' >
                                    <div className=' px-[15px] pb-[20px] w-full' >
                                        <label className='flex flex-col text-[#212529] text-[20px] font-medium' htmlFor="ddlModels">

                                            What's the occasion?
                                            <select id="ddlModels" className='mt-[10px] text-[16px] text-[#495057] rounded-md border py-[6px] pl-[12px] pr-[28px] ' required >
                                                <option value="" selected="" hidden="">Select Type</option>
                                                <option value="Virtual">Virtual</option>

                                                <option value="Video Shoutout">Video Shoutout</option>
                                                <option value="Campus">Campus</option>
                                                <option value="Corporate">Corporate</option>
                                                <option value="Private Party">Private Party</option>
                                                <option value="Concert/Festival">Concert/Festival</option>
                                                <option value="Wedding">Wedding</option>
                                                <option value="Restaurant">Restaurant</option>
                                                <option value="Professional Hiring">Professional Hiring</option>
                                                <option value="Inauguration">Inauguration</option>
                                                <option value="Photo/Video Shoot">Photo/Video Shoot</option>
                                                <option value="Religious">Religious</option>
                                                <option value="Charity">Charity</option>
                                                <option value="Fashion Show">Fashion Show</option>
                                                <option value="Kids Party">kids Party</option>
                                                <option value="Exhibition">Exhibition</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className=' px-[15px] pb-[20px]  w-full' >
                                        <label className='flex flex-col text-[#212529] text-[20px] font-medium' htmlFor="Date">
                                            Event Date
                                            <input className='mt-[10px] text-[16px] text-[#495057] rounded-md border py-[6px] pl-[12px] pr-[28px] ' type="date" name="billing_event_date" id="Date" placeholder="When.." required />
                                        </label>
                                    </div>
                                </div>
                                {/* First Row */}
                                {/* Second Row */}
                                <div className=' flex ' >
                                    <div className=' px-[15px] pb-[20px] w-full' >
                                        <label className='flex flex-col text-[#212529] text-[20px] font-medium' htmlFor="adress">
                                            Venue Address
                                            <input id='adress' type="text" className='mt-[10px] text-[16px] text-[#495057] rounded-md border py-[6px] pl-[12px] pr-[28px]' />
                                        </label>
                                    </div>
                                </div>
                                {/* Second Row */}
                                {/* Third Row */}
                                <div className=' flex flex-col md:flex-row ' >
                                    <div className=' px-[15px] pb-[20px] w-full' >
                                        <label className='flex flex-col text-[#212529] text-[20px] font-medium' htmlFor="Budget ">
                                            Budget
                                            <input id='Budget ' type="text" className='mt-[10px] text-[16px] text-[#495057] rounded-md border py-[6px] pl-[12px] pr-[28px]' />
                                        </label>
                                    </div>
                                    <div className=' px-[15px] pb-[20px] w-full' >
                                        <label className='flex flex-col text-[#212529] text-[20px] font-medium' htmlFor="attend">
                                            How many people will attend?
                                            <input id='attend' type="text" className='mt-[10px] text-[16px] text-[#495057] rounded-md border py-[6px] pl-[12px] pr-[28px]' />
                                        </label>
                                    </div>
                                </div>

                                {/* Third Row */}
                                {/* Fourth Row */}
                                <div className=' flex ' >
                                    <div className=' px-[15px] pb-[20px] w-full' >
                                        <label className='flex flex-col text-[#212529] text-[20px] font-medium' htmlFor="name">
                                            Full Name
                                            <input id='name' type="text" className='mt-[10px] text-[16px] text-[#495057] rounded-md border py-[6px] pl-[12px] pr-[28px]' />
                                        </label>
                                    </div>
                                </div>
                                {/* Fourth Row */}
                                {/* Fifth Row */}
                                <div className=' flex flex-col md:flex-row ' >
                                    <div className=' px-[15px] pb-[20px] w-full' >
                                        <label className='flex flex-col text-[#212529] text-[20px] font-medium' htmlFor="Email">
                                            Email Address (No Spam!)
                                            <input id='Email' type="text" className='mt-[10px] text-[16px] text-[#495057] rounded-md border py-[6px] pl-[12px] pr-[28px]' />
                                        </label>
                                    </div>
                                    <div className=' px-[15px] pb-[20px] w-full' >
                                        <label className='flex flex-col text-[#212529] text-[20px] font-medium' htmlFor="number">
                                            Mobile Number
                                            <input id='number' type="tel" className='mt-[10px] text-[16px] text-[#495057] rounded-md border py-[6px] pl-[12px] pr-[28px]' />
                                        </label>
                                    </div>
                                </div>

                                {/* Fifth Row */}
                                 {/* 6  Row */}
                                 <div className=' flex ' >
                                    <div className=' px-[15px] pb-[20px] w-full' >
                                        <label className='flex flex-col text-[#212529] text-[20px] font-medium' htmlFor="name">
                                        Tell us more (we love to listen)
                                            <textarea id='name' cols="30" type="text" className='mt-[10px] text-[16px] text-[#495057] rounded-md border py-[6px] pl-[12px] pr-[28px]' />
                                        </label>
                                    </div>
                                </div>
                                {/* 6 Row */}
                                 {/* 7Row */}
                                 <div className=' flex ' >
                                    <div className=' px-[15px] pb-[20px] w-full' >
                                        <label className='flex flex-col text-[#212529] text-[20px] font-medium' htmlFor="name">
            
                                        <select  required=""> 
												<option value="Yes" selected="" hidden="">Yes</option>  
												<option value="Yes">Yes</option>
												<option value="No">Don't</option>
											</select>
                                        </label>
                                    </div>
                                </div>
                                {/*7 Row */}
                            </div>
                        </form>
                    </div>
                    {/* form */}


                </div>
                <div className='w-[33.333333%]' >

                </div>

            </div>
        </>
    )
}
