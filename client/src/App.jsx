import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import PhotographerDashboard from './views/PhotographerDashboard'
// import { DefaultSidebar } from './components/photographer/DefaultSidebar'
import Example from './views/Example'
import LogIn from './views/LogIn'
import SignUp from './views/SignUp'
import Test from './views/Test'
import './App.css'
import Signin from './views/Signin'
import Home from './views/Home'
import RegisterPhotographer from './views/RegisterPhotographer'
import RegisterClient from './views/RegisterClient'
import NewTest from './views/NewTest'

function App() {
  const baseUrl = 'http://localhost:8000/api/'

  return (
    <>
    <Routes>
      <Route path='/' element={<Home baseUrl={baseUrl} />} />
      <Route path='/signin' element={<Signin baseUrl={baseUrl}/>}/>
      <Route path='/register' element={<SignUp baseUrl={baseUrl}/>}/>
      <Route path='/register/photographer' element={<RegisterPhotographer baseUrl={baseUrl}/>}/>
      <Route path='/register/client' element={<RegisterClient baseUrl={baseUrl}/>}/>
      <Route path='/photographer' element={<PhotographerDashboard baseUrl={baseUrl}/>}/>

    </Routes>
      {/* <PhotographerDashboard/> */}
      {/* <Example/> */}
      {/* <LogIn/> */}
      {/* <Signin/> */}
      {/* <SignUp/> */}
      {/* <Test/> */}
      {/* <NewTest/> */}
      {/* <RegisterPhotographer/> */}
    </>
  )
}

export default App
