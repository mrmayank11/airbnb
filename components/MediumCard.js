import React from 'react'

function MediumCard({ img, title }) {
    return (
        <div className='m-4'>
            <div className='h-80 w-80'>
                <img src={img} className='rounded-xl'></img>
            </div>
            <div>
                <h2 className='m-2'>{title}</h2>
            </div>
        </div>
    )
}

export default MediumCard