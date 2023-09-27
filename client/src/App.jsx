import { useState, useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import axios from 'axios'
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
import { UserContext } from "./context/UserContext";
import OneCategory from './views/OneCategory'
import { StickyNavbar } from './components/home_page/Nav'
import { AddBooking } from './components/client_components/AddBooking'


function App() {
  const navigate = useNavigate()
  const baseUrl = 'http://localhost:8000/api/'
  const [loggedUser, setLoggedUser] = useState()
  const [isLogged, setIsLogged] = useState(false)


  const logout = () => {
    console.log("logout");
    axios.post(baseUrl+'logout',{},{withCredentials:true})
    .then(serverResponse=>{

        console.log(serverResponse);
        setIsLogged(false)
        navigate('/')
    })
    .catch(error=>console.log(error))
}

  useEffect(() => {
    axios.get(baseUrl + 'loggedUser', { withCredentials: true })
      .then((res) => {
        console.log(res.data,'++++');
        setLoggedUser(res.data)
        //setIsLogged(true)
      })
      .catch((err) => {
        console.log(err);
        //setIsLogged(false)
      });
  }, [isLogged]);
  console.log("IS LOGGED", isLogged)
  return (
    <>
     <UserContext.Provider value={loggedUser}>
        <StickyNavbar baseUrl={baseUrl} isLogged={isLogged} logout={logout}/>
        <Routes>

          <Route path='/' element={<Home baseUrl={baseUrl} />} />
          <Route path='/signin' element={<Signin baseUrl={baseUrl} setLoggedUser={setLoggedUser} setIsLogged={(v)=>setIsLogged(v)}/>}/>
          <Route path='/register' element={<SignUp baseUrl={baseUrl}/>}/>
          <Route path='/register/photographer' element={<RegisterPhotographer baseUrl={baseUrl} setLoggedUser={setLoggedUser}/>}/>
          <Route path='/register/client' element={<RegisterClient baseUrl={baseUrl} setLoggedUser={setLoggedUser}/>}/>
          <Route path='/photographer' element={<PhotographerDashboard baseUrl={baseUrl}/>}/>
          <Route path='/client' element={<AddBooking baseUrl={baseUrl}/>}/>
          <Route path='/categories/:category' element={<OneCategory baseUrl={baseUrl}/>}/>

        </Routes>


          {/* <PhotographerDashboard/> */}
          {/* <Example/> */}
          {/* <LogIn/> */}
          {/* <Signin/> */}
          {/* <SignUp/> */}
          {/* <Test/> */}
          {/* <NewTest/> */}
          {/* <RegisterPhotographer/> */}
      </UserContext.Provider>
    </>
  )
}

export default App
