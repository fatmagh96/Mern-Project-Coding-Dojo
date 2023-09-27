import React , {useContext, useState, useEffect} from 'react'
import { ComplexNavbar } from '../components/photographer/ComplexNavbar'
import { DefaultSidebar } from '../components/photographer/DefaultSidebar'
import Profile from '../components/photographer/Profile'
// import Card from '../components/photographer/Card'
import Main from '../components/photographer/Main'
import ProfilePicture from '../components/photographer/ProfilePicture'
import ImageCard from '../components/photographer/ImageCard'
import { UserContext } from '../context/UserContext'
import { Avatar } from "@material-tailwind/react";
import axios from 'axios'

// import BackgroundBlogCard from '../components/photographer/BackgroundBlogCard'
// import '../components/photographer/photographer.css'


const PhotographerDashboard = ({baseUrl}) => {
  // const user = useContext(UserContext)
  // console.log(user, '+*******************+******+');
  const [user, setLoggedUser] = useState({})
  // app.get('/api/loggedUser'
  useEffect(()=>{
      axios.get(baseUrl+'loggedUser', { withCredentials: true })
      .then(serverResponse=>{
          console.log(serverResponse.data);
          console.log('helloooo??',serverResponse.data._id);
          setLoggedUser(serverResponse.data)
          // setJobs(serverResponse.data)
          // setDeleted(false)
      })
      .catch(error=>{
          console.log(error)
          console.log("teststtstesttestetstets");
      })
  },[])
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
                    <div className='flex flex-row gap-5 items-center'>
                        <Avatar src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt="avatar" size="xxl" />
                        <h1 className='text-xl'>{user.firstName} {user.lastName}</h1>

                    </div>
                  </div>
                    <div className='flex-1'>
                      <p className='text-sm'>{user.description}</p>
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