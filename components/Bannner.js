import React from 'react'

function Bannner() {
    return (
        <div className='relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[700px]'>
            <img src='https://img.freepik.com/free-vector/flat-design-lake-scenery_23-2149161405.jpg?w=2000' className=' h-full w-full'></img>
            <div className='absolute top-1/2 w-full text-center z-10'>
                <p>Not sure where to go? Perfect.</p>
                <button className='font-weight: 500 text-purple-600 bg-slate-200 rounded-full p-2 px-6 my-3 shadow-md hover:shadow-2xl active:scale-90 transition duration-100'>Explore</button>
            </div>
        </div>

    )
}

export default Bannner