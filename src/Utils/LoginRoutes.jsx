import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const LoginRoutes = () => {
    const {user} = useContext(AuthContext)
    return user ? <Navigate to={"/"}/> : <Outlet/>
}

export default LoginRoutes
