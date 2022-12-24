import React from 'react'
// import { SearchIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid'
function Header() {
    return (
        <div className='sticky top-0 z-50 shadow-md grid grid-cols-3 py-3 px-3 items-center bg-white'>
            {/* className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md"§ */}

            <div className='flex cursor-pointer h-14'>
                <img src='https://icaninfotech.com/wp-content/uploads/2021/06/Airbnb.png'></img>
            </div>

            <div className='flex h-10 border-2 rounded-full items-center shadow-sm  '>
                <input type='text' placeholder='start your search' className='flex-grow pl-3 bg-transparent outline-none text-xs text-gray-500'></input>
                <MagnifyingGlassIcon className='hidden md:flex h-8 bg-red-400 rounded-full p-1.5 mx-2 cursor-pointer text-white' />
            </div>

            <div className='flex items-center space-x-4 justify-end text-gray-500'>
                <p className='hidden md:inline'>Become a host</p>
                <GlobeAltIcon className='h-8' />
                <div className='flex border-2 rounded-full border-gray-300 p-2 cursor-pointer'>
                    <Bars3Icon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
        </div>

    )
}

export default Header