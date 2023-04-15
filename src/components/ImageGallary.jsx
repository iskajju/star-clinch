import React, { useState } from 'react'
import '../App.css'

const ImageGallary = () => {
    let data = [
        {
            id: 1,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26642.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 2,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26641.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 3,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26632.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 4,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26626.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 5,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26636.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 6,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26637.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 7,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26631.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 8,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26630.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 9,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26625.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 10,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26640.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 11,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26635.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 12,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26639.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 13,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26638.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 14,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26634.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 15,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26629.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 16,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26624.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 17,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26633.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 18,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26627.jpg?format=webp&w=300&dpr=1.0",

        },

        {
            id: 19,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26623.jpg?format=webp&w=300&dpr=1.0",

        },
        {
            id: 20,
            imgSrc: "https://wpcdn.starclinch.in/2019/03/26628.jpg?format=webp&w=300&dpr=1.0",

        },

    ]
    const [model, setModel] = useState(false)
    const [tempImgSrc, settempImgSrc] = useState('')
    const getImg = (imgSrc) => {
        settempImgSrc(imgSrc)
        setModel(true)
        console.log(imgSrc)
    }
    return (
        <>
        <div className={model ? "model open" : " model" } >
            <img src={tempImgSrc} className=' w-auto h-auto block leading-0 max-w-full box-border max-h-full mx-auto py-[20px] ' alt="" />
        </div>
        <div id='gallary' >
            {data.map((item, index) => {
                return (
                    <div key={index} >
                        <img src={item.imgSrc} onClick={() => getImg(item.imgSrc)} className='w-full mb-[15px] rounded-md ' />

                    </div>
                )
            })}

        </div>
            </>
    )
}

export default ImageGallary
