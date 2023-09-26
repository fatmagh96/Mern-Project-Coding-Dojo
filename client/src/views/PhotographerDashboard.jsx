import React from 'react'
import { ComplexNavbar } from '../components/photographer/ComplexNavbar'
import { DefaultSidebar } from '../components/photographer/DefaultSidebar'
import Profile from '../components/photographer/Profile'
// import Card from '../components/photographer/Card'
import Main from '../components/photographer/Main'
import ProfilePicture from '../components/photographer/ProfilePicture'
import ImageCard from '../components/photographer/ImageCard'

// import BackgroundBlogCard from '../components/photographer/BackgroundBlogCard'
// import '../components/photographer/photographer.css'


const PhotographerDashboard = (props) => {
  return (
    <div>
        <div className="app">
        <ComplexNavbar/>
        <div className='flex flex-row gap-10'>
          <div className="flex-2">
              <DefaultSidebar/>
          </div>
            <fieldset className='flex-5 border-2 border-black' style={{height:900, width:850}}>
                <legend>main</legend>
                <div className='flex flex-row items-center justify-between gap-20 my-10 mx-7'>
                  <div className='flex-6'>
                    <ProfilePicture/> 
                  </div>
                    <div className='flex-1'>
                      <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorum, recusandae facilis, placeat eius ut ipsam neque, sunt ipsa aperiam minus debitis esse soluta eveniet. Soluta, est. Adipisci, repellat doloremque.</p>
                    </div>
                </div>
                <fieldset className='border-2 border-black mx-3 p-4'>
                  <legend>cards</legend>
                  <h3 className='text-xl text-center mb-4'>All Photos</h3>
                  <ImageCard/>
                </fieldset>
            </fieldset>
        </div>

            {/* <DefaultSidebar/> */}
            {/* <Main/> */}
            {/* <Card/> */}
            {/* <Profile/> */}

        </div>
    </div>
  )
}

export default PhotographerDashboard