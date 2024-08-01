import {Outlet , Navigate} from 'react-router-dom'

import React, { useContext } from 'react'
import { loggedInResponseContext } from '../contex/DataShare'

function ProtectedRoutes() {
    const {isLoggedIn , setIsLoggedIn} = useContext(loggedInResponseContext)
    // let auth = {'token':true}
  return (
    
    isLoggedIn ? <Outlet/> : <Navigate to={'/'} state={setIsLoggedIn(true)}/>

  )
}

export default ProtectedRoutes