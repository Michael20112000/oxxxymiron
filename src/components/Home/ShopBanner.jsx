import {Section} from '../Section/Section'
import {Link} from 'react-router-dom'
import {AnimationOnScroll} from 'react-animation-on-scroll'
import logo from '../../images/oxxxyshop.webp'
import bannerImg from '../../images/banner.webp'

export const ShopBanner = () => (
  <Section className="shop-banner__section">
    <div className="container">
      <div className="shop-banner__wrapper">
        <Link to="/shop" className='shop-banner'>
          <AnimationOnScroll animateIn="fadeInLeft" animateOut="fadeOutLeft" className="shop-banner__text">
            <p className="shop-banner__subtitle">
              ОБНОВЛЕННЫЙ МЕРЧ ОТ ОКСИМИРОНА
            </p>
            <p className="shop-banner__title">
              OXXXYSHOP 2.0
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInRight" animateOut="fadeOutRight" className="shop-banner__logo">
            <img src={logo} alt="oxxxyshop" className='shop-logo'/>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="fadeInRight" animateOut="fadeOutRight" className="shop-banner__image">
            <img src={bannerImg} alt="oxxxymiron"/>
          </AnimationOnScroll>
        </Link>
      </div>
    </div>
  </Section>
)
