import React from 'react';
import heroImg from '../assets/imgs/Image.png'
import logo from '../assets/imgs/Content.png'
const Hero = () => {
    return (
        <div className='sm:px-5 pt-5 px-3 pb-4 my-9 rounded-lg drop-shadow border border-b border-border   relative sm:min-h-[230px] '>

            <div className='rounded-lg sm:h-[152px] h-[132px]'>
                <img alt='hero' src={heroImg} className=" rounded-lg w-full h-full" />
            </div>
            <div className='sm:w-[140px] w-[100px]  absolute sm:-bottom-[1px] sm:left-9 bottom-[65px] '>
                <img alt='logo' src={logo} className="w-full h-full" />
            </div>
            <div className='w-full md:my-2  sm:pl-[160px]  my-3 md:mt-4'>
                <div className='flex sm:flex-row flex-col sm:items-start items-end justify-between '>
                    <div>
                        <p className='font-semibold text-xs sm:text-lg text-radDark'>Starts in: 3 days : 2 hours : 24 minutes </p>
                        <div className='flex sm:justify-start justify-between items-center my-2'>
                            <div className='flex items-center bg-[#FFFAEB] w-fit p-1 px-1 rounded-[15px]'>

                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" className='mx-1' xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3" cy="3" r="3" fill="#F79009" />
                                </svg>
                                <span className='text-xs text-[#B54708] mx-1'>Not Live</span>

                            </div>
                            <span className='text-sm text-[#475467] sm:ml-3'>Layers Auction </span>
                        </div>
                    </div>
                    <div className='border border-b border-border   rounded p-1 px-2 flex items-center w-fit sm:mt-1 mt-3'>
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.83332 18.3333V9.16666M1.66666 10.8333V16.6667C1.66666 17.5871 2.41285 18.3333 3.33332 18.3333H14.5219C15.7558 18.3333 16.8052 17.433 16.9928 16.2135L17.8902 10.3801C18.1232 8.86574 16.9515 7.49999 15.4193 7.49999H12.5C12.0398 7.49999 11.6667 7.12689 11.6667 6.66666V3.72152C11.6667 2.58665 10.7467 1.66666 9.61179 1.66666C9.3411 1.66666 9.09581 1.82607 8.98587 2.07343L6.05327 8.67177C5.91952 8.97271 5.62109 9.16666 5.29176 9.16666H3.33332C2.41285 9.16666 1.66666 9.91285 1.66666 10.8333Z" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className='text-xs whitespace-nowrap  px-1'>Accept Invite</span>
                    </div>
                </div>
            </div>

        </div>
       
    );
}

export default Hero;
