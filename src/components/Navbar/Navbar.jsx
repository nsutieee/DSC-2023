"use client"

import React,{useState} from 'react'
import './Navbar.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { transform } from 'framer-motion'

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  return (

    <div className="n-wrapper">

    {/* desktop version */}
      <div className="container">
         <div className="n-container">
          {/* left side */}
          <div className='n-logo'>
              <span>logo here</span>
          </div>

          {/* right side */}
          <div className='n-right'>
            <div className='n-menu'>
            <span>what we do?</span>
            <span>How it works?</span>
            <span>Who we invest?</span>
            <span>Testimonials</span>

            </div>
            <div className='fund-button'>
              button
            </div>
          </div>

         </div>
      </div>

      {/* mobile version */}
      <div className='nm-container'>
        {/* logo */}
        <span>logo here</span>
        

        {/* menu icon */}
        {
           !mobileMenuOpened ? (
           <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)}/>):(
           <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/* mobile menu */}
        <div className='nm-menu'
        style={{transform: mobileMenuOpened && "translateX(0%)"}}>
            <span>what we do?</span>
            <span>How it works?</span>
            <span>Who we invest?</span>
            <span>Testimonials</span>
            <div className='m-funded-button'>button</div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
