import React from 'react'
import { StickyNavbar } from '../components/home_page/Nav'
import { FooterWithSocialLinks } from '../components/home_page/Footer'
import AllPhotos from '../components/OneCategory.jsx/AllPhotos'
import { ImgWithBlurredCaption } from '../components/OneCategory.jsx/Cover'
import { useParams } from 'react-router-dom'
// import ExampleComponent from '../components/OneCategory.jsx/TestOnHover'


const OneCategory = () => {
    const {category} = useParams()
    return (
        <>
            {/* <StickyNavbar/> */}
            <ImgWithBlurredCaption category={category}/>
            {/* <CoverImage/> */}
            {/* <ExampleComponent/> */}
            <AllPhotos/>
            <FooterWithSocialLinks/>
        </>
    )
}

export default OneCategory