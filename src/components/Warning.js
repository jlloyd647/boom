import React from 'react'
import { MdWarningAmber } from 'react-icons/md'

//Warning component for error message standardization. Props passed are errorTxt
function Warning(props) {
  return (
    <div>
      <MdWarningAmber size={250} />
      <h1>{props.errorTxt}</h1>
    </div>
  )
}

export default Warning