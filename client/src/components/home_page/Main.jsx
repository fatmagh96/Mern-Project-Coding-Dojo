import React from 'react'
import { BackgroundBlogCard_I } from './categories/Categoryl'
import { BackgroundBlogCard_II } from './categories/Categoryll'
import { BackgroundBlogCard_III } from './categories/Categorylll'
import { BackgroundBlogCard_IV } from './categories/CategorylV'
import { BackgroundBlogCard_V } from './categories/CategoryV'
import { BackgroundBlogCard_VI } from './categories/CategoryVl'


const Main = () => {
  return (
    <>
          <div className='   grid  m-auto mb-20 items-center grid-cols-5 xl:grid-cols-1 sm:grid-cols-2 justify-items-center gap-10 lg:gap-10 mt-28 w-[1000px]'>
          <p className='font-bold text-6xl font-mono  text-gray-800'>
              All Categories</p>
          </div>
        <div className=' grid m-auto mb-20 items-center grid-cols-3 xl:grid-cols-3 sm:grid-cols-2 justify-items-center gap-7 lg:gap-5 mt-7 w-[1300px]'>
            <BackgroundBlogCard_I/>
            <BackgroundBlogCard_II/>
            <BackgroundBlogCard_III/>
            <BackgroundBlogCard_IV/>
            <BackgroundBlogCard_V/>
            <BackgroundBlogCard_VI/>
        </div>

    </>
  )
}

export default Main