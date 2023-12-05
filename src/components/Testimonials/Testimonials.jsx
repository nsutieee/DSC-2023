import React from 'react'
import './Testimonials.css'
import SlickSlider from './SlickSlider'

const Testimonials = () => {
  return (
    <div className='t-wrapper'>
       <div className='container'>
           <div className='t-container'>
              <div className='t-head'>
                 <span className='tag'>test1</span>
                 <span className='title'>info</span>
                 <span className='des'>info more</span>
              </div>

           </div>
           {/* slider */}
           <SlickSlider/>

       </div>
      
    </div>
  )
}

export default Testimonials
