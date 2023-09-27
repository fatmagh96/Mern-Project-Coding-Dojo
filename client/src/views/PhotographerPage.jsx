import React from 'react'
import { StickyNavbar } from '../components/home_page/Nav'
import { PhotographerPage_Header } from '../components/photographer/PhotographerPage_Header'
import PhotographerPage_Main from '../components/photographer/PhotographerPage_Main'
import { FooterWithSocialLinks } from '../components/home_page/Footer'

const PhotographerPage = () => {
  return (
    <div>
        <StickyNavbar/>
        <div>
                <PhotographerPage_Header/>
                <PhotographerPage_Main/>
        </div>
        <FooterWithSocialLinks/>
    </div>
  )
}

export default PhotographerPage