import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import ItemCard from '../components/item-card';
import { useGetItemsQuery } from "../features/itemsSlice";
import toast from 'react-hot-toast';
import Skeleton from './skeleton';
const Welcome = () => {
    // Retrieve items from Api
    const { data, isLoading, error, isError, isSuccess} =  useGetItemsQuery();
    console.log(data);

    if (error) {
        toast.error(error.error)
    }
    // if (isSuccess) toast.success('Items fetched successfully');/
    return (
        <div className="App max-w-[1400px] mx-auto px-3 ">
            <Navbar />
            <Hero />
            <div className='border border-b border-border   drop-shadow rounded-lg p-4'>
                <div className='flex justify-between  border-b border-border py-4 items-center'>
                    <p className='font-semibold'>Featured Items</p>
                    <div className='border border-b border-border   rounded-lg px-2 p-1 flex items-center w-fit sm:mt-0 mt-3'>
                        <span className='text-xs whitespace-nowrap  p-1'>View Auction</span>
                    </div>
                </div>
               
                {isLoading &&  <Skeleton/> }
                {isError && <p className='text-red-500 text-center my-3'>Opps, Unable to get items please try again</p>}
                <div className='grid gap-4 mt-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2'>
                
                    {data && data.data.map((item, key) => (

                        <ItemCard key={key} item={item} />

                    ))}

                </div>
            </div>
        </div>
    );
}

export default Welcome;
