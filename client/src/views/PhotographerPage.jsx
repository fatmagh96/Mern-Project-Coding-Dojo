import React, { useEffect } from 'react'
import { StickyNavbar } from '../components/home_page/Nav'
import { PhotographerPage_Header } from '../components/photographer/PhotographerPage_Header'
import PhotographerPage_Main from '../components/photographer/PhotographerPage_Main'
import { FooterWithSocialLinks } from '../components/home_page/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PhotographerPage = () => {
  const {id} = useParams()
  useEffect(()=>{
    axios.get('http://localhost:8000/api/users/'+id)
    .then(response=>{
      console.log(response.data,'😢😢😢')
    })
    .catch()
  },[])
  console.log(id,'iddd')
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