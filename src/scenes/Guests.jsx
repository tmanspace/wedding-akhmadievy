import React from 'react'
import Title from '../components/Title'
import guests from '../resources/guests'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Fade } from 'react-awesome-reveal';

function Guests() {
  return (
    <section id="guests">
        <Title text_color={'text-gold-dark'} bg_color={'bg-gold-dec'} img_src={guests.dec4} title={'Для гостей'}/>
        
        <div className="layout flex-col">
            <h3 className='deco text-5xl'>План мероприятия</h3>
            <LazyLoadImage src={guests.plan} className='self-center plan-img mt-8' />
            <LazyLoadImage src={guests.plan_adap} className='self-center plan-adap mt-8' />
            <h3 className='deco text-5xl mt-6'>Дресс-код</h3>
            <div className="dresscode-section mt-5 flex justify-around">
                <div className="man-block dresscode-block">
                    <LazyLoadImage src={guests.man} />
                    <h4>Парни</h4>
                    <p>Стиль классический, чёрная рубашка, <br /> короткие и длинные рукава по желанию <br /> (галстуки бабочки не нужны)</p>
                </div>
                <div className="woman-block dresscode-block">
                    <LazyLoadImage src={guests.woman} />
                    <h4>Девушки</h4>
                    <p>Стиль любой. Цветовая гамма  <br />
(Нежно-розовый, малиновый, белый)</p>
                </div>
            </div>
        </div>
        <div className="divider-guests"></div>
        <h1 className='text-extra text-gold-dark deco'>До встречи!</h1>
    </section>
  )
}

export default Guests