import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Title({text_color, img_src, bg_color, title}) {
  return (
    <div className="layout-title">
            <h2 className={`text-extra deco ${text_color}`}>{title}</h2>
          
          <div className="decor flex justify-center items-center">
              <div className={`line ${bg_color}`}></div>
              <LazyLoadImage src={img_src} />
              <div className={`line ${bg_color}`}></div>
          </div>
        
    </div>
  )
}

export default Title