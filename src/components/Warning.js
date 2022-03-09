import React from 'react'
import { MdWarningAmber } from 'react-icons/md'
import '../styles/Body.css'

//Warning component for error message standardization. Props passed are errorTxt
function Warning(props) {
  return (
    <div className='warning'>
      <MdWarningAmber size={250} />
      
      <h1>{props.errorTxt}</h1>
    </div>
  )
}

export default Warning