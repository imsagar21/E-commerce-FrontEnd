import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
   const navigate =  useNavigate()
   function handleClickHere(){
    navigate("/")
   }
  return (
    <div className='max-w-md m-auto '>
      Page Not Found please <span className='underline cursor-pointer' onClick={handleClickHere}> Click Here </span>for Home Page
    </div>
  )
}

export default NotFoundPage
