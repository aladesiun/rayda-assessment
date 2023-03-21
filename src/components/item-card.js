import React from 'react';
const ItemCard = ({ item }) => {
    return (
        <div className='border  border-b border-border   drop-shadow rounded-lg p-4 xl:w-[300px] mx-auto'>
            <div className='bg-rayLight rounded-lg'>
                <img alt='laptop' src={item.image} />
            </div>
            <div className='flex items-center my-3'>
                <div className='flex mr-2 justify-center items-center w-[40px] h-[40px] bg-[#F2F4F7] rounded-[50%] text-radDark2'> KO</div>
                <p><span className='text-md'>{item.name}<span className='font-light text-[#98A2B3] text-sm'>(Highest Bidder)</span></span></p>
            </div>
            <p className='my-2 font-semibold text-md'>{item.title}</p>
            <p className='my-2'><span className='text-md capitalize text-[#344054]'>current Bid: <span className='font-semibold text-sm'>{item.bid}</span></span></p>
            <div className='border-t'>
                <button type='button' className='bg-primary text-white block text-center w-full p-2 rounded-lg mt-3'>Add to wishist </button>

            </div>
        </div>
    );
}

export default ItemCard;
