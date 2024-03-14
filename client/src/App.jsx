import React,{ useContext, useState } from "react"
import {  AuthContextProvider } from "./context/Authcontext"
import Register from './pages/register'
import Login from "./pages/Login"

import Schedule from "./components/Schedule/Schedule"
import Frame from "./Frame"
import {Form, Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements} from 'react-router-dom';





const App =()=> {
//const{user}=useContext(AuthContext);
//console.log(user)

const router =createBrowserRouter( createRoutesFromElements(
  <Route path='/' element={<Frame />} >
      <Route path='' element={<Schedule />} />
      {/* <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='user/:userId' element={<User />} />
      <Route loader={GithubInfoLoader} path='github' element={<Github />} /> */}
  </Route>
))

  return (
    
  // <AuthContextProvider>
  //   <Login/>
  // </AuthContextProvider>
  <>
    {/* <Schedule subject="Physics" teacher="P.R sir" startTime="12:00am" endTime="01:30pm" /> */}
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    {/* <Frame /> */}
  </>

    
  )
}

export default App
