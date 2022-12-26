import React, { useState } from 'react'
// import { SearchIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useRouter } from 'next/router';

function Header({ placeholder }) {

    const [searchInput, setSearchInput] = useState('');
    // console.log(searchInput);
    const [startDate, setStartDate] = useState(new Date());

    const [endDate, setEndDate] = useState(new Date(), 7);
    const [guests, setGuests] = useState(1);
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => {
        setGuests(1)
        setSearchInput('')
        setEndDate(new Date(), 7);
        setStartDate(new Date())
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                guests: guests
            }
        }
        )
    }
    return (
        <div className='sticky top-0 z-50 shadow-md grid grid-cols-3 py-3 px-3 items-center bg-white'>
            {/* className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md"§ */}

            <div onClick={() => router.push('/')} className='flex cursor-pointer h-14'>
                <img src='https://icaninfotech.com/wp-content/uploads/2021/06/Airbnb.png'></img>
            </div>

            <div className='flex h-10 border-2 rounded-full items-center shadow-sm  '>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type='text'
                    placeholder={placeholder || "Start your search"}
                    className='flex-grow pl-3 bg-transparent outline-none text-xs text-gray-500'></input>
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

            {/* if searchInput has some value then execute the xyz command */}
            {searchInput &&
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker
                        minDate={new Date()}
                        ranges={[selectionRange]}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />

                    <div className='flex items-center my-2 border-b'>
                        <h1 className='text-2xl flex-grow '>Number of guests</h1>
                        <UsersIcon className='h-5' />
                        <input type='number' className='w-12 outline-none p-1 text-lg text-red-400'
                            value={guests}
                            min={1}
                            onChange={(e) => setGuests(e.target.value)}
                        ></input>
                    </div>

                    <div className=' grid grid-cols-2 m-2'>
                        <button className='border-r'
                            onClick={resetInput}
                        >Cancel</button>
                        <button className=' text-red-400'
                            onClick={search}
                        >Search</button>
                    </div>


                </div>


            }

        </div>

    )
}

export default Header