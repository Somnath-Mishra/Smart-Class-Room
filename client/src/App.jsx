import React,{ useContext, useState } from "react"
import {  AuthContextProvider } from "./context/Authcontext"
import Register from './pages/register'
import Login from "./pages/Login"


const App =()=> {
//const{user}=useContext(AuthContext);
//console.log(user)
  return (
    
<AuthContextProvider>
  <Login/>
  </AuthContextProvider>

    
  )
}

export default App
