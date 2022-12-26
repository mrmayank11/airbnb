import { HeartIcon, StarIcon } from '@heroicons/react/24/solid'
import React from 'react'

function InfoCards({ img, location, title, description, price, star }) {
    return (
        <div className='flex m-6 first:border-t p-8 hover: cursor-pointer hover:opacity-50 hover:shadow-lg transition duration-200 ease-out'>
            <div className=''><img src={img} className='rounded-lg object-cover  h-36  w-96 md:h-64 md:w-96'></img></div>
            <div className='flex flex-col mx-5'>
                <div className='flex '>
                    <h2 className='text-sm md:text-lg flex-grow'>{location}</h2>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>

                <p className=' text-lg md:text-xl ' >{title}</p>

                <p className=' text-xs  flex-grow md:text-md'>{description}</p>
                <div className='flex justify-between'>
                    <div className='flex flex-grow'>
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </div>
                    <h2 className=''>{price}</h2>
                </div>

            </div>
        </div>
    )
}

export default InfoCards