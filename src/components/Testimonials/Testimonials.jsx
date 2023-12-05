import React from 'react'
import './Testimonials.css'
import SlickSlider from './SlickSlider'

const Testimonials = () => {
  return (
    <div className='t-wrapper'>
       <div className='container'>
           <div className='t-container'>
              <div className='t-head'>
                 <span className='tag'>speak from our experts</span>
                 <span className='title'>Testimonials</span>
                 <span className='des'>kuch bhi likhod thoda bada sa</span>
              </div>

           </div>
           {/* slider */}
           <SlickSlider/>

       </div>
      
    </div>
  )
}

export default Testimonials
