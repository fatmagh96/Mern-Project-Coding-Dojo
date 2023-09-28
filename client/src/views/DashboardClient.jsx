import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import { CardDefault } from '../components/client_dashboard/TestHeader'
import { ComplexNavbar} from '../components/client_dashboard/NavDashboard'
import { DefaultSidebar } from '../components/client_dashboard/DashboardSideNav'
import DashboardMain from '../components/client_dashboard/DashboardMain'
import { CardDefault } from '../components/client_dashboard/DashboardHeader'
import { FooterWithSocialLinks } from '../components/home_page/Footer'


const DashboardClient = ({baseUrl}) => {
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
        {/* <ComplexNavbar /> */}
        <div className='flex '>
            <DefaultSidebar/>
            <div className='ms-7'>
              <div>
                <CardDefault user={user}/>
              </div>
                <div>
                  <DashboardMain user={user}/>
                </div>
                
            </div>
        </div>
        <FooterWithSocialLinks/>
    </div>
  )
}

export default DashboardClient