import React from 'react'

function LargeCard({ img, title, description, buttonText }) {
    return (
        <div className='relative my-8 p-2 rounded-xl'>
            <img src={img} className='h-75 min-w-[300px] rounded-xl'></img>
            <div className='absolute top-1/4 mx-9'>
                <h1 className=' text-2xl my-2 w-40 md:text-4xl md:w-60'>{title}</h1>
                <p className='text-sm'>{description}</p>
                <button className=' bg-black text-sm text-white p-1 rounded-full m-2 shadow-md hover:shadow-2xl active:scale-90 transition duration-100 '>{buttonText}</button>
            </div>
        </div>
    )
}

export default LargeCard