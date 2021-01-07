/* Includes */

import { useState, useEffect, useRef } from 'react'

//  Styles

import './style.scoped.sass'
import './responsive.scoped.sass'

// Icons

import { ICONS } from 'data/icons'
import CommonIcon from 'icon-components/common-icon/component'
import EvenoddIcon from 'icon-components/evenodd-icon/component'
import IncomingCallIcon from 'icon-components/incoming-call/component'
import SignInIcon from 'icon-components/sign-in/component'

// Common components

import BurgerMenu from 'common-components/BurgerMenu/component'
import Search from 'common-components/Search/component'

// Helper scripts

import windowDimensions from 'hooks/useWindowDimensions'



/* Functional component */

const Header = () => {
  const { width, height } = windowDimensions(),
    [isActive, setActive] = useState('false'),
    [headerHeight, setHeight] = useState(null),
    headerRef = useRef(null)

  const handleToggle = () => setActive(!isActive);

  useEffect(() => {
    if (headerRef !== null) {
      const handleHeight = () => setHeight(headerRef.current.offsetHeight);

      handleHeight();

      window.addEventListener('resize', handleHeight);

      return () => window.removeEventListener('resize', handleHeight)
    }
  }, [headerRef])

  return (
    <header className='header'>
      <div className='header-wrapper'>
        <div className='header__cont' ref={headerRef}>
          <a href='/home' className='logo'>
            <img
              className='logo__img'
              src={require('./img/logo.svg').default}
              alt='Fancy.shop'
            />
          </a>

          <a className='header-phone' href='tel:+79175391142'>
            <div className='header-phone__icon-cont'>
              <IncomingCallIcon />
            </div>
            <div className='header-phone__txt-cont'>
              <span className='header-phone__num'>+7 (917) 539-11-42</span>
              <span className='header-phone__txt'>заказать звонок</span>
            </div>
          </a>

          <button className='catalog-btn'>
            <CommonIcon
              width='30'
              height='20'
              viewBox='0 0 30 20'
              icon={ICONS.list}
            />
            <span className='catalog-btn__txt'>каталог</span>
          </button>

          {width > 991 && <Search />}

          <nav className='nav'>
            <a className='nav__link' href='/signIn'>
              <EvenoddIcon
                name='sign-in'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                icon={ICONS.profile}
              />
              <span className='nav__txt'>войти</span>
            </a>

            <a className='nav__link' href='/favorite'>
              <EvenoddIcon
                name='favorite'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                icon={ICONS.favorite}
              />
              <span className='nav__txt'>избранное</span>
            </a>

            <a className='nav__link cart' href='/cart'>
              <EvenoddIcon
                name='cart'
                width='30'
                height='30'
                viewBox='0 0 30 30'
                icon={ICONS.cart}
              />
              <span className='nav__txt'>корзина</span>
            </a>
          </nav>

          <div
            className={`burger-btn ${isActive ? '' : 'active'}`}
            onClick={handleToggle}
          >
            <span className='burger-btn__elem' />
          </div>

          {width < 991 && (
            <BurgerMenu
              active={isActive}
              headerHeight={headerHeight}
            />
          )}
        </div>
      </div>

      <div className='header-bottom'>
        <div className='container'>
          <div className='header-bottom__cont'>
            {width < 991 && <Search />}

            {width > 991 && (
              <nav className='header-nav'>
                <ul className='header-nav__list'>
                  <li className='header-nav__item'>
                    <div className='header-nav__link'>Доставка</div>
                  </li>
                  <li className='header-nav__item'>
                    <div className='header-nav__link'>Гарантия</div>
                  </li>
                  <li className='header-nav__item'>
                    <div className='header-nav__link'>О нас</div>
                  </li>
                  <li className='header-nav__item'>
                    <div className='header-nav__link'>Контакты</div>
                  </li>
                </ul>
              </nav>
            )}

            <div className='header-info'>
              <div className='header-info__cont'>
                <div className='header-social'>
                  <div className='header-social__link' />
                  <div className='header-social__link' />
                  <div className='header-social__link' />
                </div>
                <span className='header-info__txt'>
                  подпишитесь на&nbsp;нас, выигрывайте подарки
                </span>
              </div>
            </div>

            <div className='auth'>
              <div className='auth__link'>
                <SignInIcon />
                <span>вход</span>
              </div>

              <div className='auth__link'>
                <span>регистрация</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
