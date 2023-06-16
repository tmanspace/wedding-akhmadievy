import React from 'react'
import Title from '../components/Title'
import leading from '../resources/leading'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Leading() {
  return (
    <section id="leading">
        <Title text_color={'text-gold-dec'} bg_color={'bg-gold-dec'} img_src={leading.dec3} title={'Ведущий'}/>
        <div className="layout-leading layout gap-10">
            <div className="photo-leading flex-shrink-0 overflow-hidden">
              <LazyLoadImage src={leading.leading} alt="Leading" />
            </div>
            <div className="leading-text flex flex-col">
                <h3 className='deco text-right'>Сабиров Амир</h3>
                <p>Более 1000 успешно проведенных мероприятий.
Более 2000 заказчиков.‌</p>
                <p>Остроумный, интеллигентный
и располагающий мужчина</p>
                <a href="tel:+79375295592" className=' text-gold-light text-4xl deco text-right hover:text-gold-dark mt-6'>+7 937 529 55 92</a>
            </div>
        </div>
    </section>
  )
}

export default Leading