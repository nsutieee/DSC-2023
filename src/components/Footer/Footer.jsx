import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='f-wrapper'>
       <div className='container'>
          <div className='f-container'>
               <span className='title'>IEEE NSUT WELCOMES YOU</span>

               <hr/>
               <div className='f-menu'>
                  <span>Home</span>
                  <span>What we do</span>
                  <span>How it works</span>
                  <span>some info</span>
                  <span>Testimonials</span>
               </div>
               <hr/>
          </div>

          <span className='text'> Made with 💖 by IEEE NSUT</span>

       </div>
      
    </div>
  )
}

export default Footer
