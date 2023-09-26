import React from 'react';
import { BlogCard } from './CardWorks';
import { BlogCardll } from './CardWorksll';
import { BlogCardlll } from './CardWorkslll';

const HowItWorks = () => {
    return (
        <>
            <div className='   grid  m-auto mb-20 items-center grid-cols-5 xl:grid-cols-1 sm:grid-cols-2 justify-items-center gap-10 lg:gap-10 mt-28 w-[1000px]'>
                <p className='font-bold text-6xl font-mono  text-gray-800'>
                    How It Works
                    </p>
            </div>
            <div className='   grid  m-auto mb-20 items-center grid-cols-5 xl:grid-cols-3 sm:grid-cols-2 justify-items-center gap-10 lg:gap-10 mt-20 w-[1000px]'>
                <BlogCard/>
                <BlogCardll/>
                <BlogCardlll/>
            </div>
        </>
    );
}

export default HowItWorks;
