import React from 'react'

function SmallCard({ img, location, dist }) {
    return (
        <div className='flex rounded-lg hover:scale-105 hover:shadow-md hover:bg-slate-100 transition transform duration-200 ease-out'>
            <div className='flex m-2 w-16 h-16'>
                <img src={img} className='rounded-lg'></img>

            </div>
            <div className='p-3'>
                <p className='font-semibold'>{location}</p>
                <p>{dist}</p>
            </div>
        </div>

    )
}

export default SmallCard;