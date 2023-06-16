import React from 'react'
import links from '../resources/links'
import { hero } from '../resources';

function Header() {
  function toggleMenu() {
    document.querySelector('body').classList.toggle('open');
    document.querySelector('html').classList.toggle('overflow-hidden')
  }

  return (
    <header className='w-full bg-black'>
      <div className="header-layout items-baseline">
        <div className="menu-hidden z-30" onClick={() => toggleMenu()}>
          <img src={hero.menu} alt="Menu Icon" />
        </div>
        <nav className='flex full-menu'>
            {links.map(link => 
              <a key={link.id} className='deco text-xl text-main-light hover:text-gold-dark mr-6' href={`#${link.id}`}>{link.name}</a>)
            }
        </nav>
         <p className='text-xl uppercase cheque'>Август 26, 2023</p>
        
      </div>
    </header>
  )
}

export default Header