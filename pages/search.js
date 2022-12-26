
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import InfoCards from '../components/InfoCards';

import App from '../components/Map';

function Search({ searchResults }) {
    console.log(searchResults);
    const router = useRouter();
    // console.log(router.query);

    const { location, endDate, startDate, guests } = router.query;

    const formatedStartDate = format(new Date(startDate), "dd MMMM yyyy");
    const formatedEndDate = format(new Date(endDate), "dd MMMM yyyy");

    // console.log(location, startDate, endDate, guests);

    return (

        < div >
            <Header placeholder={`${location} | ${formatedStartDate} | ${formatedEndDate} | ${guests} guests`} />
            <main className='flex'>
                <section className='mx-10'>
                    <p className='my-5 text-gray-400'>300+ stays ({formatedStartDate} - {formatedEndDate})  for {guests} number of Guests</p>
                    <h1 className='text-3xl font-semibold'>Stays in {location} city</h1>
                    <div>
                        <button className="rounded-full p-2 px-6 my-3 shadow-md hover:shadow-2xl active:scale-90 transition duration-100 mx-2">Cancelation flexibility</button>
                        <button className='rounded-full p-2 px-6 my-3 shadow-md hover:shadow-2xl active:scale-90 transition duration-100 mx-2'>Type of place</button>
                        <button className='rounded-full p-2 px-6 my-3 shadow-md hover:shadow-2xl active:scale-90 transition duration-100 mx-2'>Price</button>
                        <button className='rounded-full p-2 px-6 my-3 shadow-md hover:shadow-2xl active:scale-90 transition duration-100 mx-2'>Room and Beds</button>
                        <button className='rounded-full p-2 px-6 my-3 shadow-md hover:shadow-2xl active:scale-90 transition duration-100 mx-2'>More Filters</button>
                    </div>
                    <div>
                        {/* <img src={searchResults.img}></img> */}
                        {searchResults.map(item => (
                            <InfoCards img={item.img} title={item.title} description={item.description} price={item.price} location={item.location} star={item.star} />
                        ))}
                    </div>
                </section>
                <section className='hidden w-2/6 lg:inline-flex'>
                    <App searchResults={searchResults} />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search;
export async function getServerSideProps() {
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(res => res.json());

    return {
        props: {
            searchResults
        }
    }
}
