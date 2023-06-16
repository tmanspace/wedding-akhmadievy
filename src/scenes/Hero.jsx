import React from 'react'
import { hero } from '../resources'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css';

function Hero() {
  return (
    <section id='hero' className='bg-black flex items-center'>
      <div className="add-info">
        <div className="subtitle-90">
          <div>
            <p className='open text-lg'>Вы были приглашены </p>
            <div className='circle'></div>
            <p className='open text-lg'>Вы были приглашены </p>
            <div className='circle'></div>
            <p className='open text-lg'>Вы были приглашены </p>
            <div className='circle'></div>
            <p className='open text-lg'>Вы были приглашены </p>
            <div className='circle'></div>
          </div>
        </div>
      </div>
      <div className="layout-hero">
        <div className="flex justify-between iskander w-full items-center mb-8">
          <h1 className='deco text-extra text-gold-dark mr-6 leading-none'>Искандер</h1>
          <div className="line"></div>
        </div>
        <div className='hero-info'>
          <div className="photo">
            <LazyLoadImage 
              src={hero.nikah}
              align="bottom"
              placeholderSrc={hero.nikah_place}
              effect='opacity'
            />
          </div>
          <div className="info">
            <h1 className='deco text-extra text-gold-dark leading-none'>Диляра</h1>
            <div className="quote-block">
              <img className="quote-image front" src={hero.quote_front}/>
              <p className="quote open text-left">Возможно, в этом мире ты всего лишь <br /> человек, но для меня ты – весь мир.</p>
              <img className="quote-image back" src={hero.quote_back} />
            </div>
            <LazyLoadImage src={hero.lighthouse} alt="Маяк" className="lighthouse" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero