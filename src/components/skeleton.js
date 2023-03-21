import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader = () => {
    return (
        <div className='grid gap-4 mt-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 my-4'>

            {/* adding Fake array to generate more skeleton to fit into UI  */}
            {'abcdefgh'.split('').map((e) => (

                <div className='xl:w-[300px] w-full mx-auto border  border-b border-border   drop-shadow rounded-lg p-4' key={e}>
                    <Skeleton height={103} width={'100%'} className=""></Skeleton>
                    <div className='flex items-center '>
                        <Skeleton height={40} width={40} circle={true} className="rounded-[50%] mr-2 "></Skeleton>
                        <Skeleton height={25} width={200} className=""></Skeleton>
                    </div>
                    <Skeleton height={10} width={'100%'} className="mt-3"></Skeleton>
                    <Skeleton height={10} width={'100%'} className=""></Skeleton>
                    <Skeleton height={1} width={'100%'} className=""></Skeleton>
                    <Skeleton height={35} width={'100%'} className=""></Skeleton>
                </div>
                
            ))}


        </div>
    );
}

export default SkeletonLoader;
