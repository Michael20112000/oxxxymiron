import {Logo} from '../Logo/Logo'
import {MENU} from '../../utils/constants'
import {AnimationOnScroll} from 'react-animation-on-scroll'
import {NavLink} from 'react-router-dom'
import {Socials} from '../Socials/Socials'
import {Hamburger} from './Hamburger'

export const Header = () => {
  return <section className="header">
    <div className="container">
      <header>
        <Logo/>
        <nav className="menu">
          {MENU.map(({link, name}, index) =>
            <AnimationOnScroll key={link}
                             className="menu-item"
                             animateIn="fadeInDown"
                             delay={index * 100}
                             offset={0}>
              <NavLink className={({isActive}) => isActive ? 'active' : ''}
                       to={`/${link}`}>
                {name}
              </NavLink>
            </AnimationOnScroll>)}
        </nav>
        <Socials/>
        <Hamburger/>
      </header>
    </div>
  </section>
}
