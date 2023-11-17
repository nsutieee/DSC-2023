import React from 'react'
import './EmailBox.css'
import {LuMail} from 'react-icons/lu';

const EmailBox = () => {
  return (
    <div className='emailBox'>

    {/* icons */}
    <div>
    <LuMail size={30} color='grey'/>
    </div>

    {/* input */}
    <input type='email' placeholder='Enter Email'/>

    {/* button */}
    <div className='clickme'> click me</div>

    </div>
  )
}

export default EmailBox
