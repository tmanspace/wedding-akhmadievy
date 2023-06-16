import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css';

function GalleryPhoto({galSrc, corner, type}) {
  return (
    <div className={`gallery-photo rounded-${corner} ${type}`} >
        <LazyLoadImage src={galSrc} className='w-full h-full object-cover object-center' effect='opacity'/>
    </div>
  )
}

export default GalleryPhoto