import React from 'react'
import { BackgroundBlogCardPhoto_I } from './photos/Photo_I'
import { BackgroundBlogCardPhoto_II } from './photos/Photo_II'
import { BackgroundBlogCardPhoto_III } from './photos/Photo_III'
import { BackgroundBlogCardPhoto_IV } from './photos/Photo_IV'
import { BackgroundBlogCardPhoto_V } from './photos/Photo_V'
import { BackgroundBlogCardPhoto_VI } from './photos/Photo_VI'
import { BackgroundBlogCardPhoto_VII } from './photos/Photo_VII'

// import { IconButton } from "@material-tailwind/react";
const AllPhotos = () => {
    return (
        <>
        <div className='   grid  m-auto mb-20 items-center grid-cols-4 xl:grid-cols-1 sm:grid-cols-2 justify-items-center gap-10 lg:gap-10 mt-28 w-[1000px]'>
        <p className='font-bold text-6xl font-mono  text-gray-800'>
        All Photos
        </p>
        </div>
        <div className=' grid m-auto mb-20 items-center grid-cols-4 xl:grid-cols-4 sm:grid-cols-2 justify-items-center gap-7 lg:gap-2 mt-7 w-[1300px]'>
                    <BackgroundBlogCardPhoto_I/>
                    <BackgroundBlogCardPhoto_II/>
                    <BackgroundBlogCardPhoto_III/>
                    <BackgroundBlogCardPhoto_IV/>
                    <BackgroundBlogCardPhoto_V/>
                    <BackgroundBlogCardPhoto_VI/>
                    <BackgroundBlogCardPhoto_VII/>
                    <BackgroundBlogCardPhoto_VII/>
        </div>
        </>
    )
}

export default AllPhotos




