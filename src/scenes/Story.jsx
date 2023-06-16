import React from 'react'
import Title from '../components/Title'
import { story } from '../resources'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Story() {
  return (
    <section id="story" className=' pt-12'>
        <Title text_color={'text-gold-dark'} bg_color={'bg-gold-dark'} img_src={story.story_dec} title={'Наша история'} />
        <div className="layout-story mt-6">
            <div className="sticky-section">
                <p className='cheque text-2xl mt-7'>Наша история</p>
            </div>
            <div className="stories-section w-full ">
                <div className="story-section">
                    <h2 className='cheque text-5xl mb-6'>Искандер</h2>
                    <div className="story-block">
                        <div className="story story-1">
                            <div className="story-photo">
                                <LazyLoadImage src={story.story_1} className='object-cover object-center h-full w-auto' effect='opacity'/>
                            </div>
                            <p>Познакомились мы году в 2018 в сети Instagram. Ближе к 2019 начали общаться, впервые встретились 6 января. 8 января 2019 года я сильно нервничал но предложил Диляре встречаться и был готов услышать отказ, для меня она была будто недосягаема.</p>
                        </div>
                        <div className="story story-2">
                            <div className="story-photo">
                                <LazyLoadImage src={story.story_2} className=' object-cover object-center h-full w-auto' effect='opacity'/>
                            </div>
                            <p>На тот момент я жил и работал в Альметьевске, а она в Казани.</p>
                        </div>
                        <div className="story story-3">
                            <p>Спустя 4 года, 26 января, я пригласил её на фотосет и сделал ей предложение руки и сердца. 26 февраля мы сыграли Никах.
                            <br /> <br />
                            26 августа наш особенный день, Мы будем рады видеть Вас на нашей свадьбе</p>
                            <div className="story-photo">
                                <LazyLoadImage src={story.story_3} className='object-cover object-center h-full w-full' effect='opacity'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="story-section">
                <h2 className='cheque self-end text-5xl mb-6'>Диляра</h2>
                    <div className="story-block">
                        <div className="story story-4">
                            <div className="story-photo">
                                <LazyLoadImage src={story.story_4} className=' object-cover object-center h-full w-full' effect='opacity'/>
                            </div>
                            <p>Это было в 2018 году, когда Искандер постоянно отправлял реакции, смайлики на каждую мою историю в Instagram. Я не подавала виду и игнорировала, но мне было приятно. Прошло время, Искандер забрал меня с работы и мы пошли в кафе, на наше первое свидание.</p>
                        </div>
                        <div className="story story-5">
                            <div className="story-photo">
                                <LazyLoadImage src={story.story_5} className=' object-cover object-center h-full w-auto' effect='opacity'/>
                            </div>
                            <p>8 января мы стояли у парка Черное озеро, и тогда Искандер предложил мне встречаться, я согласилась. Так и закрутилась наша история.</p>
                        </div>
                        <div className="story story-6">
                            <p>Я так ждала предложения, намекала ему, и вот наконец, спустя 4 года Искандер сделал мне предложение.
                                <br /><br />
                            26 февраля 2023 года у нас состоялся Никах. За всё это время, за 4 года мы прошли многое и я благодарна, что судьба ни смотря ни на что соединила наши половинки в одно целое.</p>
                            <div className="story-photo">
                                <LazyLoadImage src={story.story_6} className='object-cover object-center h-full w-full' effect='opacity'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
        </div>

    </section>
  )
}

export default Story