import React from 'react'

const CommonInput = ({label,name,placeholder,type,onChange}) => {
  return (
    <div className='flex  gap-8'>

    <label>{label}</label>
   <input name={name} placeholder={placeholder} type={type} onChange={onChange}/>
    </div>

  )
}

export default CommonInput
