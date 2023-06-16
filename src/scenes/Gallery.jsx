import React from 'react'
import Title from '../components/Title'
import GalleryPhoto from '../components/GalleryPhoto'
import { gallery } from '../resources'
import { Fade } from 'react-awesome-reveal'

function Gallery() {
  return (
    <section id='gallery'>
        <Title text_color={'text-main-black'} bg_color={'bg-main-black'} img_src={gallery.dec2} title={'Сквозь года'}/>
        <div className="layout-gallery mt-6">
            <div className="sticky-section">
                <p className='deco text-4xl text-main-black'>2019</p>
            </div>
            <div className="section-gallery">
                <GalleryPhoto galSrc={gallery.gal1} type={'gallery-1'} corner={'tl'} className=' rounded-bl-3xl'/>
                <GalleryPhoto galSrc={gallery.gal2} type={'gallery-2'} corner={'bl'} />
                <GalleryPhoto galSrc={gallery.gal3} type={'gallery-4'} corner={'br'} className=' rounded-bl-3xl'/>
                <GalleryPhoto galSrc={gallery.gal4} type={'gallery-6'} corner={'tr'} />
            </div>
        </div>
        <div className="layout-gallery mt-10">
            <div className="sticky-section">
                <p className='deco text-4xl text-main-black'>2020</p>
            </div>
            <div className="section-gallery">
                <GalleryPhoto galSrc={gallery.gal5} type={'gallery-3'} corner={'bl'} className=' rounded-bl-3xl'/>
                <GalleryPhoto galSrc={gallery.gal6} type={'gallery-7'} corner={'tr'} />
            </div>
        </div>
        <div className="layout-gallery mt-10">
            <div className="sticky-section">
                <p className='deco text-4xl text-main-black'>настоящее время</p>
            </div>
            <div className="section-gallery flex-wrap">
                <div className="flex flex-col spec gap-5">
                    <GalleryPhoto galSrc={gallery.gal7} type={'spec-gallery-1'} corner={'br'}/>
                    <GalleryPhoto galSrc={gallery.gal9} type={'spec-gallery-2'} corner={'tr'} />
                </div>
                <div className="flex flex-col spec gap-5">
                    <GalleryPhoto galSrc={gallery.gal8} type={'spec-gallery-3'} corner={'tl'} />
                    <GalleryPhoto galSrc={gallery.gal10} type={'spec-gallery-4'} corner={'bl'} />
                </div>
                <GalleryPhoto galSrc={gallery.gal11} type={'gallery-5'}/>
                <GalleryPhoto galSrc={gallery.gal12} type={'gallery-8'}/>
                <GalleryPhoto galSrc={gallery.gal13} type={'gallery-3'} corner={'bl'} />
                <GalleryPhoto galSrc={gallery.gal14} type={'gallery-7'} corner={'tr'} />
            </div>
        </div>
    </section>
  )
}

export default Gallery