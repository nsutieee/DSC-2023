import React from 'react'

const BrandingVideo = () => {
  return (
    <div>
      <div className='bv-container'>
      <div>
        <video 
        loop muted autoPlay controls="">
            <source src="/video.mp4" type='video/mp4'/>
        </video>
      </div>

      </div>
    </div>
  )
}

export default BrandingVideo
