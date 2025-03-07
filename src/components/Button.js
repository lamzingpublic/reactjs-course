import React from 'react'
import "./Button.css"
export default function Button({buttonText, message}) {
  return (
    <button className='button' onClick={()=>alert(message)}>
        {buttonText}
    </button>
  )
}
