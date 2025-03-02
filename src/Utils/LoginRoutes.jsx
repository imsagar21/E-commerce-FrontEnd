import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const LoginRoutes = () => {
    const user = useSelector((state)=>state.login.user)
    
    return user ? <Navigate to={"/"}/> : <Outlet/>
}

export default LoginRoutes
