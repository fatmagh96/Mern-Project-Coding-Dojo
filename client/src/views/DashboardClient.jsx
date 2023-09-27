import React from 'react'
// import { CardDefault } from '../components/client_dashboard/TestHeader'
import { ComplexNavbar} from '../components/client_dashboard/NavDashboard'
import { DefaultSidebar } from '../components/client_dashboard/DashboardSideNav'
import DashboardMain from '../components/client_dashboard/DashboardMain'
import { CardDefault } from '../components/client_dashboard/DashboardHeader'
import { FooterWithSocialLinks } from '../components/home_page/Footer'


const DashboardClient = () => {
  return (
    <div>
        <ComplexNavbar />
        <div className='flex '>
            <DefaultSidebar/>
            <div className='ms-7'>
              <div>
                <CardDefault/>
              </div>
                <div>
                  <DashboardMain/>
                </div>
                
            </div>
        </div>
        <FooterWithSocialLinks/>
    </div>
  )
}

export default DashboardClient