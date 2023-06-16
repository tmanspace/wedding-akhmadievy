import React from 'react'
import links from '../resources/links';

function Menu() {
    function toggleMenu() {
        document.querySelector('body').classList.toggle('open');
        document.querySelector('html').classList.toggle('overflow-hidden')
    }

    return (
        <section id='menu' >
            <nav className='flex flex-col'>
                {links.map(link =>
                    <a key={link.id} onClick={() => toggleMenu()} className='deco text-2xl text-main-light mb-3 hover:text-gold-dark mr-6'  href={`#${link.id}`}>{link.name}</a>)
                }
            </nav>
        </section>
    )
}

export default Menu